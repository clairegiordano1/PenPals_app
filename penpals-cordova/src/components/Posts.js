import React from "react";
import {
  Grid,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Card,
  Form,
  Input,
  TextArea,
  Button,
  Select,
} from "semantic-ui-react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import logo from ".././imgs/logo.png";
import hamburger from ".././imgs/hamburger.png";
import { getUserInfo, updateUser } from "../store/user";
import { postNewPost } from "../store/posts";
import { connect } from "react-redux";
class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      image: null,
      event_title: "",
      event_date: "",
      event_details: "",
      resultCity: "",
      friend_email: "",
    };
  }

  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.id);
  }
  handleChange = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
    if (!event.target.name) {
      await this.setState({
        resultCity: event.target.innerText,
      });
    }
  };

  onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      await this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };
  handleSend = async (e) => {
    //EMAIL JS

    e.preventDefault();
    // this.props.submitInfo();
    await emailjs.sendForm(
      "service_w6z0o6d",
      "template_2",
      e.target,
      "user_5SSkJYz69Wad3kVUHh7pP"
    ); //emailjs call with API ref num, email template ID, and mu account user ID
    // .then(
    //   (result) => {
    //     window.location.reload(); //This is to reload page (since e.preventDefault() cancels that behavior)
    //   },
    // (error) => {
    //   console.log(error.text); //error if unsucessful
    // }
    // );
    await this.handleSubmit();
  };
  handleSubmit = async () => {
    await this.props.postNewPost({
      title: this.state.event_name,
      description: this.state.event_details,
      imgUrl: this.state.image,
      date: this.state.event_date,
      city: this.state.resultCity,
    });
    await this.setState({
      visible: false,
      image: null,
      event_name: "",
      event_date: "",
      event_details: "",
      resultCity: "",
      friend_email: "",
    });
  };
  render() {
    const cityOptions = [
      {
        key: "toCity",
        text: this.props.user.toCity,
        value: this.props.user.toCity,
      },
      {
        key: "fromCity",
        text: this.props.user.fromCity,
        value: this.props.user.fromCity,
      },
    ];

    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />

        <Card centered>
          <Grid columns={1}>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <Sidebar
                  as={Menu}
                  animation="overlay"
                  direction="left"
                  icon="labeled"
                  onHide={() => this.setState({ visible: false })}
                  vertical
                  visible={this.state.visible}
                  width="thin"
                  style={{ position: "fixed" }}
                >
                  <Link to={`/feed/${this.props.user.id}`}>
                    {" "}
                    <Menu.Item as="a">
                      <Icon name="home" style={{ color: "#3a8fb0" }} />
                      Feed
                    </Menu.Item>
                  </Link>
                  <Link to={`/search/${this.props.user.id}`}>
                    <Menu.Item as="a">
                      <Icon
                        name="search"
                        style={{
                          color: "#54d673",
                        }}
                      />
                      Search
                    </Menu.Item>
                  </Link>
                  <Link to="/message">
                    <Menu.Item as="a">
                      <Icon name="wechat" style={{ color: "#0b5978" }} />
                      Message
                    </Menu.Item>
                  </Link>
                  <Link to={`/requests/${this.props.user.id}`}>
                    {" "}
                    <Menu.Item as="a">
                      <Icon name="users" style={{ color: "#54d673" }} />
                      Requests
                    </Menu.Item>
                  </Link>
                  <Link to={`/posts/${this.props.user.id}`}>
                    {" "}
                    <Menu.Item as="a">
                      <Icon name="edit" style={{ color: "#0b5978" }} />
                      Posts
                    </Menu.Item>
                  </Link>
                </Sidebar>
                <Image
                  src={hamburger}
                  left
                  style={{ width: "11%" }}
                  onClick={() =>
                    this.setState({ visible: !this.state.visible })
                  }
                />
                <Image
                  style={{
                    width: 50,
                    borderRadius: "60%",
                    border: "solid 2px green",
                  }}
                  src={this.props.user.imgUrl}
                  centered
                />
                <Card centered style={{ textAlign: "center", fontSize: 16 }}>
                  {this.props.user.name}'s New Post
                </Card>

                <Card centered>
                  <Form className="contact-form" onSubmit={this.handleSend}>
                    <Button.Group
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button color="blue "> Host</Button>
                      <Button.Or />
                      <Button positive>Travel</Button>
                    </Button.Group>
                    <Form.Group>
                      <Form.Input
                        id="form-input-control-first-name"
                        control={Input}
                        label="Title"
                        name="event_name"
                        value={this.state.event_name}
                        onChange={this.handleChange}
                        placeholder="Title.."
                      />
                      <Form.Input
                        id="form-input-control-first-name"
                        control={Input}
                        label="Date"
                        name="event_date"
                        style={{
                          textAlign: "center",
                          width: 100,
                        }}
                        value={this.state.event_date}
                        onChange={this.handleChange}
                        placeholder="Date.."
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Field
                        fluid
                        control={Select}
                        options={cityOptions}
                        label={{
                          children: "City",
                        }}
                        placeholder="City.."
                        search
                        name="resultCity"
                        onChange={this.handleChange}
                        searchInput={{ id: "form-select-control-gender" }}
                      />
                      <Form.Input
                        id="form-input-control-first-name"
                        control={Input}
                        name="event_details"
                        value={this.state.event_details}
                        label="Description"
                        placeholder="Description.."
                        onChange={this.handleChange}
                        style={{
                          textAlign: "center",
                          width: 194,
                        }}
                      />
                    </Form.Group>

                    <Form.Field
                      style={{
                        textAlign: "center",
                        width: "100%",
                        padding: "1%",
                      }}
                      control={Input}
                      label="Your Friends Email"
                      placeholder="Notify them to download PenPal"
                      name="friend_email"
                      // value={this.state.friend_email}
                      // onChange={this.handleChange}
                    />

                    <Button
                      content="Submit "
                      primary
                      type="submit"
                      style={{ position: "relative", top: 100, left: 100 }}
                    />
                  </Form>
                  <img
                    src={this.state.image}
                    style={{
                      width: "28%",
                      height: 80,
                      borderRadius: "47%",
                      position: "relative",
                      left: "33%",
                      top: -44,
                    }}
                  />

                  <input
                    style={{
                      position: "relative",
                      top: -38,
                      left: 50,
                    }}
                    type="file"
                    placeholder="Email Address"
                    name="myImage"
                    onChange={this.onImageChange}
                  />
                </Card>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid>
        </Card>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
const mapToState = (state) => ({
  user: state.user,
  post: state.post,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    updateUser: (id, updateData) => {
      return dispatch(updateUser(id, updateData));
    },
    postNewPost: (post) => {
      return dispatch(postNewPost(post));
    },
  };
};
export default connect(mapToState, mapDispatchToProps)(Post);
