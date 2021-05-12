import React from "react";
import {
  Grid,
  Icon,
  Image,
  Segment,
  Sidebar,
  Card,
  Button,
} from "semantic-ui-react";
import logo from "../../imgs/logo.png";
import { getUserInfo, updateUser } from "../../store/user";
import { postNewPlan } from "../../store/plan";
import { getUsersInfo } from "../../store/users";
import { getAllPosts } from "../../store/posts";
import { postNewLike, fetchAllLikes, fetchUpdateLike } from "../../store/likes";
import SideBar from "../Search/Sidebar";
import Comments from "./Comments";

import { connect } from "react-redux";
class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      like_users: {},
      new_images: {},
      like_event: false,
      like_icon: "heart",
      flag: "false",
      bool: true,
      city_selected: "all",
      posts: [],
      comment_bool: false,
    };
  }
  componentDidMount = async () => {
    await this.props.getUserInfo(this.props.match.params.id);
    await this.props.getAllPosts();
  };

  handleCityChange = async (event) => {
    event.preventDefault();

    if (event.target.value == "from_City") {
      const home_city_events = this.props.posts.filter((post) => {
        return post.city == this.props.user.fromCity;
      });
      this.setState({
        city_selected: event.target.value,
        posts: home_city_events,
      });
    }
    if (event.target.value == "to_City") {
      const destination_city_events = this.props.posts.filter((post) => {
        return post.city == this.props.user.toCity;
      });
      this.setState({
        city_selected: event.target.value,
        posts: destination_city_events,
      });
    }
  };
  handleLike = async (post_id) => {
    await this.props.getLikes();
    this.props.postNewLike({
      postId: post_id,
      userId: this.props.match.params.id,
      liked: true,
    });

    await this.props.getLikes();
    let view_likes = {};
    let people_likes = [];
    await this.props.likes.map((like) => {
      if (post_id == like.postId) {
        people_likes.push(like.userId);
      }
    });
    view_likes[post_id] = people_likes;
    await this.props.getUsersInfo();
    let new_info = [];
    let info = [];
    let new_info_imgs = [];
    let new_images_users = [];
    this.props.users.map((user) => {
      [view_likes[post_id]].map((like) => {
        like.map((id) => {
          if (user.id == id) {
            info.push(user.name);
            new_info_imgs.push(user.imgUrl);
          }
        });
      });
    });

    new_info[post_id] = info;
    new_images_users[post_id] = new_info_imgs;
    await this.setState({
      like_users: new_info,
      new_images: new_images_users,
      bool: !this.state.bool,
    });
  };
  handleParticipate = async (post_id) => {
    await this.props.getUserInfo(this.props.user.id);
    await this.props.postPlan({
      userId: this.props.user.id,
      postId: post_id,
    });
    await this.props.history.push(`/waiting-room/${post_id}`);
  };
  render() {
    return (
      <>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />
        <Card centered>
          <Grid columns={1}>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <SideBar sidebarId={this.props.match.params.id} />
                <Image
                  style={{
                    width: 66,
                    height: 62,
                    borderRadius: "60%",
                    border: "solid 2px white",
                  }}
                  src={this.props.user.imgUrl}
                  centered
                />
                <Card
                  centered
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    margin: 8,
                    padding: 6,
                    width: "95%",
                  }}
                  as="h3"
                  block
                >
                  {this.props.user.name}'s Newsfeed
                </Card>
                <div style={{ padding: 15, fontWeight: "bold", fontSize: 16 }}>
                  <Icon color="blue" name="home" size="large" />
                  {this.props.user.fromCity}
                  <br />
                  <Icon color="blue" name="plane" size="large" />
                  {this.props.user.toCity}
                </div>
                <Button
                  content="Primary"
                  primary
                  onClick={this.handleCityChange}
                  value="from_City"
                  style={{ position: "relative", left: 12 }}
                >
                  <Icon color="white" name="home" />
                  Home City
                </Button>
                <Button
                  content="Primary"
                  primary
                  onClick={this.handleCityChange}
                  value="to_City"
                  style={{ position: "relative", left: 18 }}
                >
                  <Icon color="white" name="plane" />
                  Travel City
                </Button>

                <>
                  {this.props.posts.length > 0 ? (
                    this.state.posts.map((post) => (
                      <Card centered style={{ padding: 10, width: "87%" }}>
                        <div
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <>
                            <h2> {post.title}</h2>
                            <h3 style={{ position: "relative", top: -20 }}>
                              <Icon name="marker" color="blue" />
                              {post.city}
                            </h3>
                          </>

                          <Image
                            centered
                            src={post.imgUrl}
                            style={{
                              width: 94,
                              height: 90,
                              borderRadius: "60%",
                              padding: 5,
                              position: "relative",
                              top: -16,
                            }}
                          />
                          <Segment inverted>
                            <Icon
                              value={post.id}
                              name={this.state.like_icon}
                              color="pink"
                              size="large"
                              onClick={() => this.handleLike(post.id)}
                            ></Icon>
                            <Icon
                              name="calendar alternate"
                              color="blue"
                              size="large"
                              onClick={() => this.handleParticipate(post.id)}
                            ></Icon>
                            <Button
                              color="blue"
                              onClick={() =>
                                this.setState({
                                  comment_bool: !this.state.comment_bool,
                                })
                              }
                            >
                              Comments
                            </Button>
                          </Segment>
                          {this.state.comment_bool ? (
                            <Comments
                              postId={post.id}
                              userId={this.props.match.params.id}
                            />
                          ) : (
                            <></>
                          )}
                        </div>

                        {this.state.bool ? (
                          <>
                            {this.state.like_users[post.id] ? (
                              <Card
                                centered
                                style={{
                                  textAlign: "center",
                                  width: "100%",
                                  padding: "2%",
                                }}
                              >
                                {`liked by ${
                                  this.state.like_users[post.id].length
                                } user(s)`}
                                {this.state.like_users.map((user) => (
                                  <>
                                    <p>{` ${user} `}</p>
                                  </>
                                ))}
                              </Card>
                            ) : (
                              <p></p>
                            )}
                          </>
                        ) : (
                          <p></p>
                        )}
                      </Card>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              </Sidebar.Pushable>
              <br />
            </Grid.Column>
          </Grid>
        </Card>
      </>
    );
  }
}
const mapToState = (state) => ({
  users: state.users,
  user: state.user,
  posts: state.posts,
  likes: state.likes,
  like: state.like,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersInfo: () => dispatch(getUsersInfo()),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    updateUser: (id, updateData) => {
      return dispatch(updateUser(id, updateData));
    },
    getAllPosts: () => {
      return dispatch(getAllPosts());
    },
    getLikes: () => {
      return dispatch(fetchAllLikes());
    },
    postNewLike: (likeObject) => {
      return dispatch(postNewLike(likeObject));
    },
    updateLike: (id, like) => {
      return dispatch(fetchUpdateLike(id, like));
    },
    postPlan: (PlanObject) => {
      return dispatch(postNewPlan(PlanObject));
    },
  };
};
export default connect(mapToState, mapDispatchToProps)(Feed);
