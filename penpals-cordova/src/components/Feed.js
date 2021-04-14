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
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from ".././imgs/logo.png";
import hamburger from ".././imgs/hamburger.png";
import { getUserInfo, updateUser } from "../store/user";
import { postNewPlan } from "../store/plan";
import { getUsersInfo } from "../store/users";
import { getAllPosts } from "../store/posts";
import { postNewLike, fetchAllLikes, fetchUpdateLike } from "../store/likes";

import { connect } from "react-redux";
class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      like_users: {},
      new_images: {},
      like_event: false,
      like_icon: "heart",
      flag: "false",
      bool: true,
    };
  }
  componentDidMount = async () => {
    await this.props.getUserInfo(this.props.match.params.id);
    await this.props.getAllPosts();
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
    console.log(this.state.like_users, this.state.new_images, this.state.bool);
  };
  handleParticipate = async (post_id) => {
    await this.props.getUserInfo(this.props.user.id);
    await this.props.postPlan({
      userId: this.props.user.id,
      postId: post_id,
    });
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
                    width: 50,
                    borderRadius: "60%",
                    border: "solid 2px green",
                  }}
                  src={this.props.user.imgUrl}
                  centered
                />
                <Card centered style={{ textAlign: "center", fontSize: 16 }}>
                  {this.props.user.name}'s Newsfeed
                </Card>
                <p>
                  <Icon color="blue" name="map marker alternate" size="large" />
                  Home- {this.props.user.fromCity}
                  <br />
                  <Icon color="blue" name="map marker alternate" size="large" />
                  Destination- {this.props.user.toCity}
                </p>

                <Card centered>
                  {this.props.posts.length > 0 ? (
                    this.props.posts.map((post) => (
                      <Card centered>
                        <div style={{ textAlign: "center" }}>
                          {post.title}
                          <br />
                          {post.city}
                          <br />
                          {post.description}
                          <br />
                          {post.date}
                          <Image centered size="small" src={post.imgUrl} />
                          <Icon
                            value={post.id}
                            name={this.state.like_icon}
                            color="pink"
                            onClick={() => this.handleLike(post.id)}
                          ></Icon>
                          <Icon
                            name="calendar alternate"
                            color="blue"
                            onClick={() => this.handleParticipate(post.id)}
                          ></Icon>
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
                </Card>
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
