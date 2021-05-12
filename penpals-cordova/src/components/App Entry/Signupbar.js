import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SignupBar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "",
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
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
    );
  }
}
export default SignupBar;
