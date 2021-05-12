import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Button, Icon, Message, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";

import earth_city_picker from "../../imgs/earth_city_picker.png";
import { getUserInfo, updateUser } from "../../store/user";
import { connect } from "react-redux";
import SignupBar from "./Signupbar";
const countryOptions = [
  { key: "ny", value: "New York", flag: "us", text: "New York" },
  { key: "gb", value: "London", flag: "gb", text: "London" },
  { key: "nj", value: "New Jersey", flag: "us", text: "New Jersey" },
  { key: "fr", value: "Paris", flag: "fr", text: "Paris" },
  { key: "gr", value: "Athens", flag: "gr", text: "Athens" },
  { key: "is", value: "Rejavik", flag: "is", text: "Rejavik" },
  { key: "it", value: "Rome", flag: "it", text: "Rome" },
  { key: "ma", value: "Boston", flag: "us", text: "Boston" },
  { key: "ca", value: "Los Angeles", flag: "us", text: "Los Angeles" },
  { key: "co", value: "Denver", flag: "us", text: "Denver" },
  { key: "ni", value: "Amsterdam", flag: "ni", text: "Amsterdam" },
  { key: "no", value: "Oslo", flag: "no", text: "Oslo" },
  { key: "hk", value: "Hong Kong", flag: "hk", text: "Hong Kong" },
  { key: "sg", value: "Singapore", flag: "sg", text: "Singapore" },

  { key: "au", value: "Syndey", flag: "au", text: "Sydney" },
  { key: "at", value: "Vienna", flag: "at", text: "Vienna" },
  { key: "es", value: "Malaga", flag: "es", text: "Malaga" },
  { key: "bs", value: "Bahamas", flag: "bs", text: "Bahamas" },

  { key: "se", value: "Stockholm", flag: "se", text: "Stockholm" },
  { key: "be", value: "Brussels", flag: "be", text: "Brussels" },
  { key: "vi", value: "Virgin Islands", flag: "vi", text: "Virgin Islands" },
];

class Signup3 extends React.Component {
  constructor() {
    super();
    this.state = {
      fromCity: "",
      toCity: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.getUserInfo(this.props.user.id);

    await this.props.updateUser(this.props.user.id, {
      fromCity: this.state.fromCity,
      toCity: this.state.toCity,
    });
    await this.props.history.push(`/profile/${this.props.user.id}`);
  };

  handleChange = (e, result) => {
    const { name, value } = result;
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    this.props.getUserInfo(this.props.user.id);
  }
  render() {
    return (
      <Card centered style={{ top: 100 }}>
        <Image src={logo} centered style={{ top: 6, width: 120 }} />
        <SignupBar />
        <Message
          attached
          header="Welcome to PenPals!"
          content="Please select your demographics"
        />
        <br />
        <Image src={earth_city_picker} centered style={{ width: 225 }} />

        <Icon
          name="map marker alternate"
          color="blue"
          size="large"
          style={{
            position: "absolute",
            top: "59%",
            left: "8%",
          }}
        />

        <Dropdown
          placeholder="Where are you from?"
          fluid
          searchable
          selection
          style={{
            position: "absolute",
            top: "58%",
            width: "69%",
            alignSelf: "center",
          }}
          name="fromCity"
          label="fromCity"
          onChange={this.handleChange}
          options={countryOptions}
          value={this.state.fromCity}
        />
        <Icon
          name="map marker alternate"
          color="blue"
          size="large"
          style={{
            position: "absolute",
            top: "69%",
            left: "8%",
          }}
        />

        <Dropdown
          placeholder="Where are you traveling?"
          fluid
          searchable
          selection
          style={{
            position: "absolute",
            top: "68%",
            width: "69%",
            alignSelf: "center",
          }}
          centered
          options={countryOptions}
          name="toCity"
          label="toCity"
          onChange={this.handleChange}
          value={this.state.toCity}
        />
        <br />
        <Button
          content="Submit "
          primary
          type="button"
          onClick={this.handleSubmit}
        />
        <Message attached="bottom" warning>
          <Icon name="help" />
          Signed up?&nbsp;<Link to="/login">Login here</Link>
          &nbsp;instead.
        </Message>
      </Card>
    );
  }
}

const mapToState = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    updateUser: (id, updateData) => {
      return dispatch(updateUser(id, updateData));
    },
  };
};

export default connect(mapToState, mapDispatchToProps)(Signup3);
