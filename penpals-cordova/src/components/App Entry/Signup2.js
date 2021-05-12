import React from "react";
import { Button, Icon, Message, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import { getUserInfo, updateUser } from "../../store/user";
import { connect } from "react-redux";
import SignupBar from "./Signupbar";
import earthFrame from "../../imgs/earth.png";

class Signup2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }
  componentDidMount() {
    this.props.getUserInfo(this.props.user.id);
  }
  onImageChange = async (event) => {
    this.props.getUserInfo(this.props.user.id);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      await this.setState({
        image: URL.createObjectURL(img),
      });
      await this.props.updateUser(this.props.user.id, {
        imgUrl: this.state.image,
      });
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.history.push("/signup-3");
  };

  render() {
    return (
      <Card centered style={{ top: 100 }}>
        <Image src={logo} centered style={{ top: 6, width: 120 }} />
        <SignupBar />
        <Message
          attached
          header="Welcome to PenPals!"
          content="Please upload a profile picture "
        />
        <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br />
        <img
          src={this.state.image}
          style={{
            width: 160,
            height: 150,
            borderRadius: "60%",
            position: "absolute",
            top: 315,
            alignSelf: "center",
          }}
        />
        <input
          type="file"
          placeholder="Email Address"
          style={{ color: "#2185d0" }}
          name="myImage"
          onChange={this.onImageChange}
        />
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

export default connect(mapToState, mapDispatchToProps)(Signup2);
