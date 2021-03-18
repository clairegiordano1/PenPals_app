import React from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Card,
  Search,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from ".././imgs/logo.png";
import hamburger from ".././imgs/hamburger.png";
class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <div>
        <Image src={logo} centered size="small" style={{ top: 15 }} />
        <br />
        <br />
        <Card centered>
          <Grid columns={1}>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <Sidebar
                  as={Menu}
                  animation="overlay"
                  direction="left"
                  icon="labeled"
                  onHide={() => this.setState({ visible: false })}
                  vertical
                  visible={this.state.visible}
                  width="thin"
                >
                  <Link to="/">
                    <Menu.Item as="a">
                      <Icon name="home" style={{ color: "#3a8fb0" }} />
                      Home
                    </Menu.Item>
                  </Link>
                  <Link to="/search">
                    <Menu.Item as="a">
                      <Icon
                        name="search"
                        style={{
                          color: "#54d673",
                        }}
                      />
                      Search
                    </Menu.Item>
                  </Link>
                  <Link to="/message">
                    <Menu.Item as="a">
                      <Icon name="wechat" style={{ color: "#0b5978" }} />
                      Message
                    </Menu.Item>
                  </Link>
                </Sidebar>
                <Image
                  src={hamburger}
                  left
                  style={{ width: "11%" }}
                  onClick={() =>
                    this.setState({ visible: !this.state.visible })
                  }
                />
                <Sidebar.Pusher>
                  <Segment basic>
                    <Header as="h3">Application Content</Header>
                    <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
              <br />
              <br /> <br />
              <br /> <br />
              <br />
              <br />
              <br /> <br />
              <br /> <br />
              <br />
            </Grid.Column>
          </Grid>
        </Card>
      </div>
    );
  }
}
export default Feed;
