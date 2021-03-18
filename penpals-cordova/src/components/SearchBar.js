import React from "react";
import { Dropdown } from "semantic-ui-react";
import {
  Button,
  Form,
  Icon,
  Message,
  Card,
  Image,
  Input,
  Menu,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getUsersInfo } from "../store/users";
import { getUserInfo } from "../store/user";
import { connect } from "react-redux";
import logo from ".././imgs/logo.png";

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
    };
  }
  componentDidMount = async () => {
    await this.props.getUsers();
  };

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let res = this.props.users.map((user) => user.name);
    let resID = this.props.users.map((user) => user.id);
    for (let i = 0; i < res.length; i++) {
      if (this.state.searchText === res[i]) {
        const nameRes = res[i];
        const userID = resID[i];
        await this.setState({ searchResults: nameRes });
        await this.props.getUserInfo(userID);
      }
    }
  };
  render() {
    let users = this.props.users.map((user) => user.name);

    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 25 }} />
        <br />
        <br />
        <Card center style={{ width: "23%", left: "37.5%" }}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="input"
              onChange={this.handleChange}
              placeholder="Search..."
              // style={BarStyling}
            />
            <button type="submit">Submit</button>
          </form>
          <div>
            {this.state.searchText === this.state.searchResults &&
            this.state.searchResults !== "" ? (
              <div>
                Found User {this.props.user.name}! <br /> Email is{" "}
                {this.props.user.email} on PenPal's App!
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </Card>
      </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
