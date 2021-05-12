import React from "react";
import { Button, Form, Icon, Message, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import { auth2 } from "../../store/user";
import { connect } from "react-redux";
import SignupBar from "./Signupbar";
class Signup1 extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.auth2(
      this.state.name,
      this.state.email,
      this.state.password
    );
    await this.props.history.push("/signup-2");
  };
  render() {
    return (
      <Card centered style={{ top: 100 }}>
        <Image src={logo} centered style={{ top: 6, width: 120 }} />{" "}
        <SignupBar />
        <Message
          attached
          header="Welcome to PenPals!"
          content="Please fill out the form below "
        />
        <Form className="attached fluid segment">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Full Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Input
            label="Email Address"
            placeholder="Email Address"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Checkbox inline label="My Information looks correct" />
        </Form>
        <Button
          content="Submit "
          primary
          type="button"
          onClick={this.handleSubmit}
        />{" "}
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
    auth2: (
      firstName,
      lastName,
      email,
      password,
      description,
      imgUrl,
      city,
      state,
      zipCode,
      pushToken
    ) => {
      return dispatch(
        auth2(
          firstName,
          lastName,
          email,
          password,
          description,
          imgUrl,
          city,
          state,
          zipCode,
          pushToken
        )
      );
    },
  };
};

export default connect(mapToState, mapDispatchToProps)(Signup1);
