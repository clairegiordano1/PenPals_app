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
import logo from ".././logo.png";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "credential",
    };
  }

  render() {
    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 25 }} />
        <br />
        <br />
        <Card center style={{ width: "25%", left: "37.5%" }}>
          <p>User Profile</p>
        </Card>
      </div>
    );
  }
}

export default Profile;
