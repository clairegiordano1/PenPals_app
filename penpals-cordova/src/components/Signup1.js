import React from "react";
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
import logo from ".././imgs/logo.png";
import { auth2 } from "../store/user";
import { connect } from "react-redux";

class Signup1 extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "credential",
      email: "",
      password: "",
      name: "",
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
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
    const { activeItem } = this.state;

    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />
        <Card centered>
          <Menu>
            <Link to="/signup-1">
              <Menu.Item
                name="Credentials"
                active={activeItem === "credential"}
                onClick={this.handleItemClick}
                centered
              />
            </Link>
            <Link to="/signup-2">
              <Menu.Item
                name="Profile Picture"
                active={activeItem === "profile"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/signup-3">
              <Menu.Item
                name="Demographics"
                active={activeItem === "demographics"}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu>

          <Message
            attached
            header="Welcome to PenPals!"
            content="Please fill out the form below "
          />
          <Form className="attached fluid segment" onSubmit={this.handleSubmit}>
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
              {/* <Form.Input
                fluid
                label="Last Name"
                placeholder="Last Name"
                type="text"
              /> */}
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
            <Button color="blue" type="submit">
              Submit
            </Button>
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Signed up?&nbsp;<Link to="/login">Login here</Link>
            &nbsp;instead.
          </Message>
        </Card>
      </div>
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
