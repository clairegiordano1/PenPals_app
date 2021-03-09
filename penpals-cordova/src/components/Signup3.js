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

const countryOptions = [
  { key: "ny", value: "ny", flag: "us", text: "New York" },
  { key: "gb", value: "gb", flag: "gb", text: "London" },
  { key: "nj", value: "nj", flag: "us", text: "New Jersey" },
  { key: "fr", value: "fr", flag: "fr", text: "France" },
  { key: "gr", value: "gr", flag: "gr", text: "Greece" },
  { key: "is", value: "is", flag: "is", text: "Iceland" },
  { key: "it", value: "it", flag: "it", text: "Italy" },
  { key: "ma", value: "ma", flag: "us", text: "Massachusetts" },
  { key: "ct", value: "ct", flag: "us", text: "Connecticut" },
  { key: "ca", value: "ca", flag: "us", text: "California" },
  { key: "co", value: "co", flag: "us", text: "Colorado" },
  { key: "ni", value: "ni", flag: "ni", text: "Netherland" },
  { key: "no", value: "no", flag: "no", text: "Norway" },
  { key: "hk", value: "hk", flag: "hk", text: "Hong Kong" },
  { key: "sg", value: "sg", flag: "sg", text: "Singapore" },

  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "es", value: "es", flag: "es", text: "Spain" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },

  { key: "se", value: "se", flag: "se", text: "Sweden" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "vi", value: "vi", flag: "vi", text: "Virgin Islands" },
];

class Signup3 extends React.Component {
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
        <Card center style={{ left: "39%" }}>
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={countryOptions}
          />
        </Card>
      </div>
    );
  }
}

export default Signup3;
