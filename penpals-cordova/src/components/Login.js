import React from "react";
import {
  Form,
  Checkbox,
  Input,
  Card,
  Button,
  Select,
  Image,
  Icon,
} from "semantic-ui-react";
import "../style/Login.css";
import { connect } from "react-redux";
import { me, auth1, auth2, getUserInfo } from "../store/user";
import { getUsersInfo } from "../store/users";
import { useHistory } from "react-router-dom";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import logo from ".././imgs/logo.png";
import "../style/style.css";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      imgUrl: "",
      token: "",
    };
  }

  componentDidMount() {
    // this.props.getUserInfo(1);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleLogin = async () => {
    try {
      if (this.state.email.length && this.state.password.length) {
        await this.props.auth1(this.state.email, this.state.password);
        await this.props.me();
        this.props.history.push("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const responseFacebook = async (response) => {
      console.log(response);
      this.setState({
        email: response.email,
        password: response.id,
        name: response.name,
        token: response.userID,

        // imgUrl: response.picture.data.url,
      });
      console.log(this.state, "<- state");
      await this.props.getUsersInfo();

      var returnedUser = this.props.users.forEach((element) => {
        if (
          element.email === this.state.email &&
          element.token === this.state.token
        ) {
          return element;
        }
      });
      console.log("state,", this.state);
      if (!returnedUser) {
        this.props.auth2(
          this.state.name,
          this.state.email,
          this.state.password,
          this.state.token
          // this.state.imgUrl
        );
        this.props.history.push("/profile");
      }
      if (returnedUser) {
        this.props.me();
        this.props.history.push("/profile");
      }
    };

    const responseGoogle = async (response) => {
      console.log("SHOULD BE", response.googleId);
      this.setState({
        email: response.Hs.nt,
        password: response.googleId,
        name: response.Hs.sd,
        token: response.googleId,
      });
      await this.props.getUsersInfo();
      var returnedUser = this.props.users.map((element) => {
        if (
          element.email === this.state.email &&
          element.token === this.state.token
        )
          return element;
      });

      if (!returnedUser[1]) {
        this.props.auth2(
          this.state.name,
          this.state.email,
          this.state.password,
          this.state.token
          // this.state.imgUrl
        );
        this.props.history.push("/profile");
      }
      if (returnedUser[1]) {
        this.props.me();
        this.props.history.push("/profile");
      }
    };

    return (
      <div>
        <Image src={logo} size="small" centered />
        <br />
        <br />
        <Card centered>
          <Form onSubmit={this.handleLogin} style={{ margin: 20 }}>
            <Form.Field>
              <br />
              <label>Email</label>
              <Input
                placeholder="Email Address"
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
                placeholder="Password"
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="My information looks correct" />
            </Form.Field>
            <Button
              fluid
              basic
              color="blue"
              content="Blue"
              type="submit"
              style={{ top: 10 }}
            >
              Submit
            </Button>
          </Form>
          <FacebookLogin
            appId="480009723012050"
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="btnFacebook"
            icon={<Icon name="facebook" size="large" />}
            textButton="&nbsp;&nbsp;&nbsp;&nbsp;Facebook"
          />
          {/* <Icon name="google plus" /> Google */}
          <GoogleLogin
            clientId="545150694380-spcotq9ehq63horosg1ohsbbo0kqulih.apps.googleusercontent.com"
            // Button not working on IOS simulator?!
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="btnGoogle"
            theme="light"
          />
          <br />
        </Card>

        <br />
        <br />
      </div>
    );
  }
}

const mapToState = (state) => ({
  user: state.user,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  auth1: (email, password) => dispatch(auth1(email, password)),
  me: () => dispatch(me()),
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  getUsersInfo: () => dispatch(getUsersInfo()),
  auth2: (
    name,
    email,
    password,
    token,
    description,
    imgUrl,
    city,
    state,
    zipCode,
    pushToken
  ) => {
    return dispatch(
      auth2(
        name,
        email,
        password,
        token,
        description,
        imgUrl,
        city,
        state,
        zipCode,
        pushToken
      )
    );
  },
});

export default connect(mapToState, mapDispatchToProps)(Login);
