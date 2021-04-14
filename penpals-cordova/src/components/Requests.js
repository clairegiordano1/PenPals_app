import React from "react";
import {
  Grid,
  Icon,
  Button,
  Image,
  Menu,
  Segment,
  Sidebar,
  Card,
  Search,
} from "semantic-ui-react";
import hamburger from ".././imgs/hamburger.png";
import { Link } from "react-router-dom";
import { getUsersInfo } from "../store/users";
import {
  getAllRequests,
  updateRequest,
  deleteAllRequests,
} from "../store/request";

import { getUserInfo } from "../store/user";
import { connect } from "react-redux";
import logo from ".././imgs/logo.png";
class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: {},
      checker: "false",
      responded: "user plus",
      see: false,
      count: 0,
    };
  }
  componentDidMount = async () => {
    try {
      const id = this.props.match.params.id;
      await this.props.getUserInfo(id);
      await this.props.getUsersInfo();
    } catch (error) {
      console.error(error);
    }
  };

  handleFriends = async () => {
    let requests = [];
    const id = this.props.match.params.id;
    await this.props.getUsersInfo();
    await this.props.getUserInfo(id);
    await this.props.users.map((user) => {
      [user].forEach((req) => {
        req.sent_request.forEach((element) => {
          if (
            element !== null &&
            element.sent_request == this.props.match.params.id &&
            !element.accepted
          ) {
            requests.push(user.id);
          }
        });
        return requests;
      });
    });
    await this.setState({ friends: requests, see: !this.state.see });
    console.log("huh", this.state.friends);
  };

  handleAccept = async (argid) => {
    let friends = this.state.friends || [];
    let i = 0;
    console.log(argid);
    await this.props.getAllRequests();
    this.props.users.map((user) => {
      [this.state.friends].forEach((id) => {
        user.sent_request.map((userNow) => {
          if (
            userNow.sent_request == this.props.match.params.id &&
            userNow.userId == id[i]
          ) {
            this.setState({
              checker: "true",
              // responded: "checkmark",
            });
          }
          i++;
        });
      });
    });

    await this.handleFriends(argid);
    this.state.checker
      ? await this.props.updateRequest(argid, {
          accepted: "TRUE",
        })
      : console.log("hi");
    this.setState({
      checker: "false",
    });
  };

  handleDecline = async (argid) => {
    await this.props.getAllRequests();
    await this.props.deleteAllRequests(argid);
    const id = this.props.match.params.id;
    await this.props.getUserInfo(id);
    await this.props.getUsersInfo();
  };

  render() {
    let names = [];
    let pictures = {};
    let ids = [];
    let friends = this.state.friends;
    let i = 0;
    this.props.users.map((user) => {
      [friends].forEach((id) => {
        user.sent_request.map((userNow) => {
          if (
            userNow.sent_request == this.props.match.params.id &&
            userNow.userId &&
            !userNow.accepted
          ) {
            names.push(user.name);
            pictures[user.name] = user.imgUrl;
            ids[user.name] = user.id;
          }
          i++;
        });
      });
    });
    let user = this.props.user;
    var set = new Set(names);
    var filteredNames = Array.from(set);
    let count = filteredNames.length;
    // this.setState({ count: filteredNames.length });
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
                <Card
                  centered
                  style={{ textAlign: "center", fontSize: 16, padding: 10 }}
                >
                  {this.props.user.name}'s Requests
                </Card>

                <Button
                  centered
                  style={{ position: "relative", left: "20%" }}
                  onClick={this.handleFriends}
                >
                  {" "}
                  Click To See Requests
                </Button>
                <div>
                  {this.state.see ? (
                    <Card
                      centered
                      style={{
                        backgroundColor: "lightblue",
                        textAlign: "center",
                        margin: 7,
                        width: "95.5%",
                      }}
                    >
                      <div>
                        <p>Pending Friend Requests:</p>

                        {filteredNames.map((name) => (
                          <div>
                            {this.state.see ? (
                              <div key="name">
                                {name}
                                <Image
                                  centered
                                  style={{
                                    width: 50,
                                    borderRadius: "60%",
                                    border: "solid 2px green",
                                  }}
                                  src={pictures[name]}
                                />
                                <Icon
                                  name={this.state.responded}
                                  color="green"
                                  size="large"
                                  onClick={() => this.handleAccept(ids[name])}
                                />
                                <Icon
                                  name="user times"
                                  value={ids[name]}
                                  color="red"
                                  size="large"
                                  onClick={() => this.handleDecline(ids[name])}
                                />
                                <br />
                                <br />
                              </div>
                            ) : (
                              <p></p>
                            )}
                          </div>
                        ))}
                      </div>
                    </Card>
                  ) : (
                    <div>{}</div>
                  )}
                </div>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
  request: state.request,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersInfo: () => dispatch(getUsersInfo()),
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  updateRequest: (id, body) => dispatch(updateRequest(id, body)),
  getAllRequests: () => dispatch(getAllRequests()),
  deleteAllRequests: (id) => dispatch(deleteAllRequests(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
