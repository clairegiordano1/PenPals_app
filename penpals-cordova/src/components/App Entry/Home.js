import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";

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
      <>
        <Card centered style={{ top: 100, marginTop: 10 }}>
          <Image
            src={logo}
            centered
            size="small"
            style={{ top: 15, marginBottom: 150 }}
          />{" "}
          <br />
          <br />
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
      </>
    );
  }
}

export default Home;
