import React from "react";
import {
  Button,
  Card,
  Image,
  Grid,
  Segment,
  Sidebar,
  Icon,
} from "semantic-ui-react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import { getUsersInfo } from "../../store/users";
import { getUserInfo } from "../../store/user";
import SideBar from "../Search/Sidebar";
import ChatPlatform from "./chatPlatform";
class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userInfo: [],
      postId: 0,
      postView: false,
      messageView: true,
    };
  }
  componentDidMount = async () => {
    await this.props.getUserInfo(this.props.match.params.id);
    await this.setState({
      userInfo: this.props.user,
    });
    let user_posts = this.props.user.posts.map((post) => {
      return post;
    });
    this.setState({ posts: user_posts });
  };

  handleChat = async (event) => {
    await this.setState({
      postId: event.target.value,
      postView: !this.state.postView,
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
                <SideBar sidebarId={this.props.match.params.id} />
                <Card
                  centered
                  id={this.state.userInfo.id}
                  style={{ textAlign: "center", padding: 10, width: "80%" }}
                >
                  <h4>
                    PenPal's Messenger System
                    <br /> Welcome {this.state.userInfo.name}
                  </h4>
                </Card>
                <div>
                  {this.state.postView ? (
                    <Icon
                      name="x"
                      size="large"
                      color="grey"
                      style={{ position: "absolute", left: "92%" }}
                      onClick={() => {
                        this.setState({ postView: !this.state.postView });
                      }}
                    />
                  ) : (
                    <></>
                  )}
                  <br />
                </div>
                <>
                  {this.state.posts.map((post) => (
                    <Card
                      key={post.id}
                      centered
                      style={{ width: "65%", padding: 10, marginBottom: 15 }}
                    >
                      <Card
                        centered
                        style={{
                          textAlign: "center",
                          position: "relative",
                          padding: 3,
                          fontWeight: "bold",
                        }}
                      >
                        {post.title}
                      </Card>
                      <br />
                      <Image
                        style={{
                          width: 68,
                          height: 66,
                          borderRadius: "60%",
                          alignSelf: "center",
                          position: "relative",
                          top: -8,
                        }}
                        src={post.imgUrl}
                      />
                      <br />
                      <Button onClick={this.handleChat} value={post.id}>
                        Message Friends
                      </Button>
                      <></>
                    </Card>
                  ))}
                  <>
                    {this.state.postId != 0 && this.state.postView ? (
                      <ChatPlatform
                        postId={this.state.postId}
                        userId={this.props.match.params.id}
                      />
                    ) : (
                      <></>
                    )}
                  </>
                </>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersInfo: () => dispatch(getUsersInfo()),
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  getAllPlans: (id) => dispatch(getAllPlans(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
