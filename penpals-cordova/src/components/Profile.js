import React from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Card,
  Search,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from ".././imgs/logo.png";
import hamburger from ".././imgs/hamburger.png";
import { getUserInfo, updateUser } from "../store/user";
import { postNewRequest, getAllRequests } from "../store/request";
import { getUsersInfo } from "../store/users";
import { connect } from "react-redux";
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      e_information: [],
      view_friends: [],
      view_friends_img: [],
      view_friends_bool: false,
      view_friends_count: 0,
    };
  }
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.id);
  }
  handleViewFriends = async () => {
    const id = this.props.match.params.id;
    let view_friends = [];
    await this.props.getUserInfo(id);
    await this.props.getAllRequests();
    await this.props.users.map((user) => {
      [user].forEach((req) => {
        req.sent_request.forEach((element) => {
          if (
            element.sent_request == this.props.match.params.id ||
            (element.userId == this.props.match.params.id && element.accepted)
          ) {
            if (element.sent_request == this.props.match.params.id) {
              view_friends.push(element.userId);
            }
            if (element.userId == this.props.match.params.id) {
              view_friends.push(element.sent_request);
            }
          }
        });
      });
    });
    let view_friend_info = [];
    let pic_info = [];

    await this.props.users.forEach((user) => {
      view_friends.forEach((friend) => {
        if (friend == user.id) {
          view_friend_info.push(user.name);
          pic_info.push(user.imgUrl);
        }
      });
    });
    let set = new Set(view_friend_info);
    let arr = Array.from(set);
    let len = arr.length;

    let picSet = new Set(pic_info);
    let imgSet = Array.from(picSet);
    console.log(pic_info, "pls work somehow");
    this.setState({
      view_friends: arr,
      view_friends_img: imgSet,
      view_friends_bool: true,
      view_friends_count: len,
    });
  };
  handleUnViewFriends = () => {
    this.setState({
      view_friends_bool: false,
    });
  };
  render() {
    return (
      <>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />

        <Card centered style={{ height: 390 }}>
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
                  <Link to={`/posts/${this.props.user.id}`}>
                    {" "}
                    <Menu.Item as="a">
                      <Icon name="edit" style={{ color: "#54d673" }} />
                      Posts
                    </Menu.Item>
                  </Link>
                  <Link to={`/requests/${this.props.user.id}`}>
                    {" "}
                    <Menu.Item as="a">
                      <Icon name="users" style={{ color: "#0b5978" }} />
                      Requests
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
                    width: 72,
                    borderRadius: "60%",
                    border: "solid 2px white",
                  }}
                  src={this.props.user.imgUrl}
                  centered
                />
                <Card centered style={{ width: 280, height: 280 }}>
                  <Card.Content>
                    <Card.Header> {this.props.user.name}</Card.Header>
                    <Card.Meta>
                      <Icon color="blue" name="home" />
                      {this.props.user.fromCity}
                      <br />
                      <Icon color="blue" name="plane" />
                      {this.props.user.toCity}
                    </Card.Meta>
                    <br />
                    <Card.Meta>
                      <span className="date">
                        Joined {this.props.user.createdAt.slice(0, 10)}
                      </span>
                    </Card.Meta>
                    <Card.Description>
                      Claire is a student from New York, this is hardcoded for
                      now.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <a>
                      <Icon
                        name="user"
                        onClick={() => this.handleViewFriends()}
                      />
                      Friends
                    </a>
                    <br />
                    {this.state.view_friends_bool ? (
                      <div>
                        <Icon
                          name="cancel"
                          color="blue"
                          size="large"
                          style={{
                            position: "relative",
                            top: -20,
                            left: "88%",
                          }}
                          onClick={() => this.handleUnViewFriends()}
                        ></Icon>

                        <p
                          style={{
                            position: "relative",
                            top: -15,
                          }}
                        >
                          {this.state.view_friends_count}
                        </p>
                        {this.state.view_friends.map((friend) => (
                          <>
                            <div
                              style={{
                                position: "relative",
                                top: -20,
                              }}
                            >
                              {friend}
                            </div>{" "}
                          </>
                        ))}
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </Card.Content>
                </Card>
                <br />
                <br />
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid>
        </Card>
      </>
    );
  }
}
const mapToState = (state) => ({
  user: state.user,
  requests: state.requests,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersInfo()),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    updateUser: (id, updateData) => {
      return dispatch(updateUser(id, updateData));
    },
    getAllRequests: () => dispatch(getAllRequests()),
    postNewRequest: (id, updateData) => {
      return dispatch(postNewRequest(id, updateData));
    },
  };
};
export default connect(mapToState, mapDispatchToProps)(Profile);
