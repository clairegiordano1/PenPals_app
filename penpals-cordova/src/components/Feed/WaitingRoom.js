import React from "react";
import {
  Card,
  Image,
  Form,
  Button,
  Input,
  Grid,
  Sidebar,
  Segment,
  Icon,
} from "semantic-ui-react";
import emailjs from "emailjs-com";
import SideBar from "../Search/Sidebar";
import logo from "../../imgs/logo.png";
import { getAllPosts } from "../../store/posts";
import { getAllPlans } from "../../store/plan";
import { getUsersInfo } from "../../store/users";
import { connect } from "react-redux";
import ChatPlatform from "../Messenger/chatPlatform";
class WaitingRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      plan: [],
      userId: 0,
    };
  }

  componentDidMount = async () => {
    try {
      // Info about thw plan
      await this.props.getAllPosts();
      let post_info = this.props.posts.filter((post) => {
        if (post.id == this.props.match.params.id) {
          return post;
        }
      });
      await this.setState({
        post: post_info,
      });

      // User's apart of plan
      let ids = "";
      await this.props.getAllPlans(this.props.match.params.id);
      this.props.plans.filter((plan) => {
        if (plan.postId == this.props.match.params.id) {
          ids += plan.userId;
        }
      });
      await this.props.getUsersInfo();
      let plan_info_names = this.props.users.filter((user) => {
        if (ids != "") {
          if (ids.includes(user.id.toString())) {
            return user;
          }
        }
      });
      await this.setState({
        plan: plan_info_names,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChat = () => {
    this.props.history.push(`/messages/${this.props.user.id}`);
  };
  sendEmail = (e) => {
    //emailjs call when form is submitted to send email to email submitted
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w6z0o6d",
        "template_2",
        e.target,
        "user_5SSkJYz69Wad3kVUHh7pP"
      ) //emailjs call with API ref num, email template ID, and mu account user ID
      .then(
        (result) => {
          window.location.reload(); //This is to reload page (since e.preventDefault() cancels that behavior)
        },
        (error) => {
          console.log(error.text); //error if unsucessful
        }
      );
  };

  render() {
    return (
      <>
        <Image src={logo} centered size="small" style={{ top: 15 }} />

        <Card centered>
          <Grid columns={1}>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <SideBar sidebarId="1" />
                <>
                  {this.state.post[0] ? (
                    <>
                      <Image
                        src={this.state.post[0].imgUrl}
                        ui={false}
                        style={{
                          width: 105,
                          display: "block",
                          margin: "auto",
                          height: 100,
                          borderRadius: "60%",
                          border: "solid 2px white",
                        }}
                      />
                      <Card
                        centered
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          padding: 8,
                          width: "90%",
                        }}
                        as="h3"
                        block
                      >
                        {this.state.post[0].title}
                        <br />
                        {this.state.post[0].date}
                        <Card.Description
                          style={{
                            textAlign: "center",
                            width: "100%",
                            fontSize: 12,
                            padding: "1%",
                          }}
                        >
                          {this.state.post[0].description}
                        </Card.Description>
                      </Card>

                      <Card
                        centered
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          padding: 8,
                          width: "90%",
                        }}
                        as="h5"
                        block
                      >
                        Friends going:
                        {this.state.plan ? (
                          this.state.plan.map((user) => (
                            <div
                              style={{
                                textAlign: "center",
                                fontSize: 11,
                              }}
                            >
                              {user.name} {""}
                              <Icon size="small" name="home" color="blue" />
                              {user.fromCity}
                            </div>
                          ))
                        ) : (
                          <div></div>
                        )}
                      </Card>

                      <Card
                        centered
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          padding: 8,
                          width: "90%",
                        }}
                        as="h3"
                        block
                      >
                        <Form
                          className="contact-form"
                          onSubmit={this.sendEmail}
                        >
                          <div style={{ textAlign: "center", fontSize: 17 }}>
                            <Form.Field
                              style={{
                                width: "100%",
                                padding: "1%",
                              }}
                              control={Input}
                              label="Invite Other Friends:"
                              name="friend_email"
                            />
                          </div>
                          <Button
                            style={{
                              textAlign: "center",
                              width: "100%",
                              padding: "4%",
                            }}
                            color="blue"
                            type="submit"
                          >
                            {" "}
                            Submit
                          </Button>
                        </Form>
                      </Card>
                      <Button
                        style={{
                          textAlign: "center",
                          width: "100%",
                          padding: "4%",
                        }}
                        color="blue"
                        type="submit"
                        onClick={this.handleChat}
                      >
                        {" "}
                        Enter Group Chat
                      </Button>
                    </>
                  ) : (
                    <></>
                  )}
                </>

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
  posts: state.posts,
  plans: state.plans,
  users: state.users,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => {
      return dispatch(getAllPosts());
    },
    getAllPlans: (id) => {
      return dispatch(getAllPlans(id));
    },
    getUsersInfo: () => dispatch(getUsersInfo()),
  };
};
export default connect(mapToState, mapDispatchToProps)(WaitingRoom);
