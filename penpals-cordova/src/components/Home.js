import React from "react";
import {
  Form,
  Checkbox,
  Input,
  Card,
  Button,
  Select,
  Icon,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from ".././logo.png";

class Home extends React.Component {
  constructor() {
    super();
  }

  handleLogin = () => {
    // navigate to login
  };

  handleSignup = () => {
    // navigate to login
  };

  render() {
    return (
      <div>
        <Image src={logo} centered style={{ top: 100, width: 225 }} />
        <br />
        <br />
        <Card centered style={{ top: 120 }}>
          <Link to="/login">
            <Card.Group textAlign="center">
              <Card fluid color="blue" header="Login"></Card>
            </Card.Group>
          </Link>
          <Link to="/signup-1">
            <Card.Group textAlign="center">
              <Card fluid color="green" header="Signup" style={{ top: 4 }} />
            </Card.Group>
          </Link>
        </Card>
      </div>
    );
  }
}

export default Home;
