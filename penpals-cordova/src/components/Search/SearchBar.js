import React from "react";
import {
  Button,
  Form,
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
import { getUsersInfo } from "../../store/users";
import { getUserInfo, me } from "../../store/user";
import { connect } from "react-redux";
import logo from "../../imgs/logo.png";
import SideBar from "./Sidebar";

const BarStyling = {
  width: "20rem",
  background: "#F2F1F9",
  border: "none",
  padding: "0.5rem",
};
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResults: "",
      currentUser: 0,
    };
  }
  componentDidMount = async () => {
    await this.props.getUserInfo(this.props.user.id);
    await this.setState({
      currentUser: this.props.user.id,
    });
    await this.props.getUsers();
    // await this.props.me();
  };

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let res = this.props.users.map((user) => user.name);
    let resID = this.props.users.map((user) => user.id);
    for (let i = 0; i < res.length; i++) {
      if (this.state.searchText == res[i]) {
        const nameRes = res[i];
        const userID = resID[i];
        await this.setState({ searchResults: nameRes });
        await this.props.getUserInfo(userID);
      }
    }
  };

  handleLink = () => {
    this.props.history.push({
      pathname: `/find/${this.props.user.id}`,
      state: { data: this.props.match.params.id },
    });
  };

  handleBack = () => {
    this.props.history.push({
      pathname: `/profile/${this.props.match.params.id}`,
      state: { data: this.props.match.params.id },
    });
  };
  render() {
    let users = this.props.users.map((user) => user.name);

    return (
      <>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />
        <Card centered>
          <Grid columns={1}>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <SideBar />
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: 40,
                      borderRadius: "3%",
                      border: "1px bottom solid ",
                    }}
                    className="input"
                    onChange={this.handleChange}
                    placeholder="Search..."
                  />
                  <button
                    style={{
                      position: "absolute",
                      top: 40,
                      right: 3,
                      backgroundColor: "white",
                      border: "0px solid white",
                    }}
                  >
                    <Icon name="search" size="large" />
                  </button>
                </form>
                <div>
                  {this.state.searchText === this.state.searchResults &&
                  this.state.searchResults !== "" ? (
                    <div>
                      <Card
                        centered
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                        }}
                      >
                        <br />
                        <Card centered style={{ width: 150, height: 120 }}>
                          <br />
                          <Image
                            style={{
                              width: 50,
                              borderRadius: "80%",
                              border: "solid 2px green",
                            }}
                            src={this.props.user.imgUrl}
                            centered
                          />

                          <Button color="blue" onClick={this.handleLink}>
                            Found, {this.props.user.name}.
                          </Button>
                        </Card>
                        <br />
                      </Card>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <Button
                  onClick={this.handleBack}
                  style={{ backgroundColor: "white", color: "green" }}
                >
                  <Icon name="user" color="green" />
                  Profile
                </Button>
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
  getUsers: () => dispatch(getUsersInfo()),
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  me: () => dispatch(me()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
