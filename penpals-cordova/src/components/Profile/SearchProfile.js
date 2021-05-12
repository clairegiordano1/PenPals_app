import React from "react";
import {
  Button,
  Icon,
  Card,
  Image,
  Segment,
  Sidebar,
  Grid,
} from "semantic-ui-react";
import { getUsersInfo } from "../../store/users";
import { getUserInfo, me } from "../../store/user";
import { postNewRequest, getAllRequests } from "../../store/request";
import {
  postNewEndorsement,
  getAllEndorsements,
} from "../../store/endorsement";
import { connect } from "react-redux";
import logo from "../../imgs/logo.png";
import SideBar from "../Search/Sidebar";

class SearchProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 0,
      currentRequests: [],
      addButton: "add user",
      e_message: "",
      e_count: 0,
      e_bool: false,
      endorsed: false,
      button1: "star outline",
      button2: "star outline",
      button3: "star outline",
      button4: "star outline",
      button5: "star outline",
      e_users: [],
      length: 0,
      realUser: 0,
      e_information: [],
      view_friends: [],
      view_friends_img: [],
      view_friends_bool: false,
      view_friends_count: 0,
    };
  }
  componentDidMount = async () => {
    try {
      await this.setState({
        currentUser: this.props.location.state.data,
      });

      const id = this.props.match.params.id;
      await this.props.getUserInfo(id);
      await this.props.getAllRequests();
      await this.props.users.map((user) => {
        [user].forEach((req) => {
          req.sent_request.forEach((element) => {
            if (
              element.sent_request == this.props.match.params.id &&
              element.userId == this.state.currentUser
            ) {
              this.setState({
                addButton: "paper plane outline",
              });
            }
          });
        });
      });

      await this.props.user.received_request.forEach((element) =>
        [element].forEach((user) => {
          if (
            user.userId == this.props.match.params.id &&
            user.sent_request == this.state.currentUser &&
            user.accepted
          ) {
            this.setState({
              addButton: "star outline",
            });
          }
        })
      );

      let new_info = {};
      let j = 1;
      await this.props.users.forEach((user) => {
        user.endorsed.forEach((end) => {
          [end].forEach((endorsement) => {
            if (
              endorsement.endorsement_user == this.props.match.params.id &&
              endorsement.userId == user.id
            ) {
              new_info[j] = endorsement;
              new_info[j + 1] = user;
            }
            j += 2;
          });
        });
      });
      this.setState({
        e_information: new_info,
        length: j - 1,
      });

      let counter = 0;
      let map = {};
      for (let i = 1; i < 9; i += 2) {
        map[this.state.e_information[i].id] = {
          message: [this.state.e_information[i].message],
          rating_count: [this.state.e_information[i].rating_count],
          user_name: [this.state.e_information[i + 1].name],
          user_img: [this.state.e_information[i + 1].imgUrl],
        };
        counter++;
      }
      this.setState({
        e_information: map,
        length: Object.keys(this.state.e_information).length,
      });
    } catch (error) {
      console.error(error);
    }
  };
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
  handleStarCount = (id) => {
    console.log(id);
    if (id == "1") {
      if (this.state.button1 == "star outline") {
        this.setState({
          button1: "star",

          e_count: 1,
        });
      } else if (this.state.button1 == "star") {
        this.setState({
          button1: "star outline",
          button2: "star outline",
          button3: "star outline",
          button4: "star outline",
          button5: "star outline",
          e_count: 0,
        });
      }
    }
    if (id == "2") {
      if (this.state.button2 == "star outline") {
        this.setState({
          button1: "star",
          button2: "star",
          button3: "star outline",
          button4: "star outline",
          button5: "star outline",
          e_count: 2,
        });
      } else if (this.state.button2 == "star") {
        this.setState({
          button1: "star",
          button2: "star outline",
          button3: "star outline",
          button4: "star outline",
          button5: "star outline",
          e_count: 1,
        });
      }
    }
    if (id == "3") {
      if (this.state.button3 == "star outline") {
        this.setState({
          button1: "star",
          button2: "star",
          button3: "star",
          button4: "star outline",
          button5: "star outline",

          e_count: 3,
        });
      } else if (this.state.button3 == "star") {
        this.setState({
          button1: "star",
          button2: "star",
          button3: "star outline",
          button4: "star outline",
          button5: "star outline",
          button3: "star outline",
          e_count: 2,
        });
      }
    }
    if (id == "4") {
      if (this.state.button4 == "star outline") {
        this.setState({
          button1: "star",
          button2: "star",
          button3: "star",
          button4: "star",
          button5: "star outline",
          e_count: 4,
        });
      } else if (this.state.button4 == "star") {
        this.setState({
          button1: "star",
          button2: "star",
          button3: "star",
          button4: "star outline",
          button5: "star outline",

          e_count: 3,
        });
      }
    }
    if (id == "5") {
      if (this.state.button5 == "star outline") {
        this.setState({
          button1: "star",
          button2: "star",
          button3: "star",
          button4: "star",
          button5: "star",
          e_count: 5,
        });
      } else if (this.state.button5 == "star") {
        this.setState({
          button1: "star",
          button2: "star",
          button3: "star",
          button4: "star",
          button5: "star outline",
          e_count: 4,
        });
      }
    }
  };
  handleBack = () => {
    this.props.history.push({
      pathname: `/profile/${this.state.currentUser}`,
      state: { data: this.state.currentUser },
    });
  };
  handleBackSearch = () => {
    this.props.history.push({
      pathname: `/search/${this.state.currentUser}`,
      state: { data: this.state.currentUser },
    });
  };
  handleViewEndorsements = async () => {
    await this.setState({
      endorsed: !this.state.endorsed,
    });
  };
  handleEndorsementMessage = (event) => {
    event.preventDefault();
    this.setState({
      e_message: [event.target.value],
    });
  };
  handleEndorsement = async () => {
    await this.setState({
      e_bool: true,
    });
  };
  handleUnViewFriends = () => {
    this.setState({
      view_friends_bool: false,
    });
  };
  handleEndorsementSubmit = async () => {
    await this.props.postNewEndorsement({
      userId: this.state.currentUser,
      endorsement_user: this.props.match.params.id,
      message: this.state.e_message.toString(),
      rating_count: this.state.e_count,
    });
    await this.setState({
      e_bool: false,
    });
  };
  handleRequest = async () => {
    await this.props.postNewRequest({
      userId: this.state.currentUser, // user sending request
      sent_request: this.props.user.id, // user i want to add as a friend
    });
    await this.setState({
      addButton: "paper plane outline",
    });
  };
  componentWillUnmount() {
    this.componentDidMount();
  }
  render() {
    const res = [];

    if (Object.keys(this.state.e_information).length > 0) {
      for (
        let i = 0;
        i < Object.keys(this.state.e_information).length;
        i += 2
      ) {
        let k = Object.keys(this.state.e_information)[i];
        let j = Object.keys(this.state.e_information)[i + 1];

        res.push(
          <Card key={i * j + 1} centered style={{ width: 190, height: 110 }}>
            <p
              style={{
                position: "relative",
                top: 15,
              }}
            >
              {this.state.e_information[j].name}
            </p>
            <Image
              src={this.state.e_information[j].imgUrl}
              style={{
                width: 40,
                borderRadius: "75%",
                position: "absolute",
                top: 4,
                left: 3,
              }}
              centered
            />
            <br />
            <p style={{ textAlign: "center" }}>
              Endorsement: {this.state.e_information[k].message}
            </p>
          </Card>
        );
        let count = 1;
        for (let m = 0; m < this.state.e_information[k].rating_count; m++) {
          res.push(
            <Icon
              name="star"
              style={{ position: "relative", top: -93 }}
              color="blue"
              key={Math.random(count * 100)}
            ></Icon>
          );
          count++;
        }
      }
    }

    let ids = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
    let keyCounter = 0;
    keyCounter++;
    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />
        <Card centered>
          <Grid columns={1}>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <SideBar />

                <Card centered style={{ width: 210, height: 200 }}>
                  <br />
                  <Image
                    style={{
                      width: 80,
                      borderRadius: "60%",
                      border: "solid 2px green",
                    }}
                    src={this.props.user.imgUrl}
                    centered
                  />
                  <Icon
                    name={this.state.addButton}
                    centered
                    size="large"
                    color="blue"
                    onClick={this.handleRequest}
                    style={{
                      top: -10,
                      left: "62%",
                      position: "relative",
                    }}
                  />
                  <Card
                    centered
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      margin: 5,
                      letterSpacing: 0.5,
                      padding: 5,
                      right: 9,
                    }}
                  >
                    {this.props.user.name}
                  </Card>
                  <Icon
                    color="blue "
                    name="handshake"
                    size="large"
                    style={{ position: "relative", left: 62, top: 10 }}
                    onClick={() => this.handleViewFriends()}
                  >
                    <p
                      style={{
                        position: "relative",
                        top: -21,
                        left: 37,
                        fontSize: 15,
                      }}
                    >
                      {" "}
                      Friends
                    </p>
                  </Icon>
                  {this.state.view_friends_bool ? (
                    <div
                      style={{
                        position: "absolute",
                        backgroundColor: " white",
                        width: 220,
                        height: 200,
                        top: -3,
                        alignSelf: "center",
                        border: "solid 2px lightgrey",
                      }}
                    >
                      <Icon
                        name="cancel"
                        style={{
                          position: "absolute",
                          left: "92%",
                        }}
                        onClick={() => this.handleUnViewFriends()}
                      ></Icon>

                      <p
                        style={{
                          textAlign: "center",
                          alignSelf: "center",
                          fontSize: 16,
                        }}
                      >
                        {this.state.view_friends_count}
                      </p>
                      {this.state.view_friends.map((friend) => (
                        <>
                          <div
                            style={{
                              letterSpacing: 1,
                              position: "relative",
                              textAlign: "center",
                              padding: 6,
                              top: -15,
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
                  {this.state.view_friends_bool ? (
                    <>
                      {this.state.view_friends_img ? (
                        <p>
                          {this.state.view_friends_img.map((url) => (
                            <Image
                              src={url}
                              style={{
                                width: 25,
                                borderRadius: "60%",

                                position: "relative",
                                top: -140,
                                left: 17,
                                margin: 5,
                              }}
                            />
                          ))}
                        </p>
                      ) : (
                        <p></p>
                      )}
                    </>
                  ) : (
                    <p></p>
                  )}
                </Card>
                <div style={{ position: "relative", left: "17%" }}>
                  <Icon color="blue" name="home" />
                  {this.props.user.fromCity}
                  <br />
                  <Icon color="blue" name="plane" />
                  {this.props.user.toCity}
                </div>
                {this.state.e_bool === true ? (
                  <Card
                    centered
                    style={{
                      width: 210,
                      height: 120,
                      margin: 7,
                      left: 32.5,
                      top: 5,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                        left: "18%",
                      }}
                    >
                      <Icon
                        name={this.state.button1}
                        centered
                        size="large"
                        value="1"
                        color="blue"
                        // style={{ flex: 1 }}
                        onClick={() => this.handleStarCount(ids[1])}
                      />
                      <Icon
                        name={this.state.button2}
                        value="2"
                        centered
                        size="large"
                        color="blue"
                        // style={{ flex: 2 }}
                        onClick={() => this.handleStarCount(ids[2])}
                      />
                      <Icon
                        name={this.state.button3}
                        centered
                        size="large"
                        value="3"
                        color="blue"
                        // style={{ flex: 3 }}
                        onClick={() => this.handleStarCount(ids[3])}
                      />
                      <Icon
                        name={this.state.button4}
                        centered
                        size="large"
                        value="4"
                        color="blue"
                        onClick={() => this.handleStarCount(ids[4])}
                      />
                      <Icon
                        name={this.state.button5}
                        centered
                        size="large"
                        color="blue"
                        value="5"
                        // style={{ flex: 5 }}
                        onClick={() => this.handleStarCount(ids[5])}
                      />
                    </div>
                    <br />

                    <input
                      value={this.state.e_message}
                      onChange={this.handleEndorsementMessage}
                      placeholder="Leave a Message..."
                      style={{ border: "solid 1px white" }}
                    ></input>
                    <br />
                    <br />

                    <Button primary onClick={this.handleEndorsementSubmit}>
                      Submit
                    </Button>
                  </Card>
                ) : (
                  <h2></h2>
                )}
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "green",
                  }}
                  onClick={this.handleViewEndorsements}
                >
                  <Icon
                    name="                envelope open outline
"
                    color="green"
                    centered
                  />
                  View Endorsements
                </Button>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "green",
                  }}
                  onClick={this.handleEndorsement}
                >
                  <Icon name="plus" color="green" centered />
                  Endorse
                </Button>
                <Button
                  onClick={this.handleBack}
                  style={{
                    backgroundColor: "white",
                    color: "green",
                  }}
                >
                  <Icon name="user" color="green" centered />
                  Profile
                </Button>
                <br />

                <div>
                  {this.state.endorsed == true ? (
                    <Card
                      centered
                      style={{ textAlign: "center" }}
                      key={keyCounter++ / 2}
                    >
                      <h4
                        style={{
                          letterSpacing: 2,
                          color: "green",
                          position: "relative",
                          top: 10,
                        }}
                      >
                        Endorsements
                      </h4>
                      <div key={keyCounter++}>{res}</div>
                    </Card>
                  ) : (
                    <p></p>
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
  requests: state.requests,
  endorsement: state.endorsement,
  endorsements: state.endorsements,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsersInfo()),
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  me: () => dispatch(me()),
  postNewRequest: (id, updateData) => {
    return dispatch(postNewRequest(id, updateData));
  },
  postNewEndorsement: (id, updateData) => {
    return dispatch(postNewEndorsement(id, updateData));
  },
  getAllRequests: () => dispatch(getAllRequests()),
  getAllEndorsements: () => dispatch(getAllEndorsements()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfile);
