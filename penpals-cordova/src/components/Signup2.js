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
import logo from ".././imgs/logo.png";
import earthFrame from ".././imgs/earth.png";
import ImageUploader from "react-images-upload";
import { getUserInfo, updateUser } from "../store/user";
import { connect } from "react-redux";

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
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      await this.setState({
        image: URL.createObjectURL(img),
      });
      await this.props.updateUser(1, {
        imgUrl: this.state.image,
      });
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.history.push("/signup-3");
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />
        <Card centered>
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
          <Message
            attached
            header="Welcome to PenPals!"
            content="Please upload a profile picture "
          />
          <Image src={earthFrame} size="medium" />
          <img
            src={this.state.image}
            style={{
              width: 268,
              height: 250,
              borderRadius: "47%",
              position: "absolute",
              top: 182,
              alignSelf: "center",
            }}
          />

          <input
            type="file"
            placeholder="Email Address"
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
      </div>
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
