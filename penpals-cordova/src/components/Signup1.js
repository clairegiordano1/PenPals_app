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
import logo from ".././logo.png";

class Signup1 extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "credential",
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 25 }} />
        <br />
        <br />
        <Card center style={{ width: "25%", left: "37.5%" }}>
          <Menu pointing>
            <Link to="/signup-1">
              <Menu.Item
                name="Credentials"
                active={activeItem === "credential"}
                onClick={this.handleItemClick}
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
        </Card>
        <Card centered>
          <Message
            attached
            header="Welcome to PenPals!"
            content="Please fill out the form below "
          />
          <Form className="attached fluid segment">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First Name"
                placeholder="First Name"
                type="text"
              />
              <Form.Input
                fluid
                label="Last Name"
                placeholder="Last Name"
                type="text"
              />
            </Form.Group>
            <Form.Input
              label="Email Address"
              placeholder="Email Address"
              type="text"
            />
            <Form.Input label="Password" type="password" />
            <Form.Checkbox inline label="My Information looks correct" />
            <Button color="blue">Submit</Button>
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Already signed up?&nbsp;<Link to="/login">Login here</Link>
            &nbsp;instead.
          </Message>
        </Card>
      </div>
    );
  }
}
export default Signup1;
