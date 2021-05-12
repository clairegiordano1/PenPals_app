import React from "react";
import { Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import hamburger from "../../imgs/hamburger.png";
import { getUserInfo } from "../../store/user";
import { connect } from "react-redux";
class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.props.getUserInfo(this.props.sidebarId);
  }
  handleViewFriends = async () => {
    await this.props.getUserInfo(this.props.sidebarId);
  };

  render() {
    return (
      <>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="left"
          icon="labeled"
          onHide={() => this.setState({ visible: false })}
          vertical
          visible={this.state.visible}
          width="thin"
          style={{ position: "fixed" }}
        >
          <Link to={`/feed/${this.props.user.id}`}>
            {" "}
            <Menu.Item as="a">
              <Icon name="home" style={{ color: "#3a8fb0" }} />
              Feed
            </Menu.Item>
          </Link>
          <Link to={`/search/${this.props.user.id}`}>
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
          <Link to={`/messages/${this.props.user.id}`}>
            {" "}
            <Menu.Item as="a">
              <Icon name="wechat" style={{ color: "#0b5978" }} />
              Message
            </Menu.Item>
          </Link>
          <Link to={`/posts/${this.props.user.id}`}>
            {" "}
            <Menu.Item as="a">
              <Icon name="edit" style={{ color: "#54d673" }} />
              Posts
            </Menu.Item>
          </Link>
          <Link to={`/requests/${this.props.user.id}`}>
            {" "}
            <Menu.Item as="a">
              <Icon name="users" style={{ color: "#0b5978" }} />
              Requests
            </Menu.Item>
          </Link>

          <Link to={`/safety/${this.props.user.id}`}>
            {" "}
            <Menu.Item as="a">
              <Icon name="ambulance" style={{ color: "#54d673" }} />
              Safety
            </Menu.Item>
          </Link>
        </Sidebar>
        <Image
          src={hamburger}
          left
          style={{ width: "11%" }}
          onClick={() => this.setState({ visible: !this.state.visible })}
        />
      </>
    );
  }
}
const mapToState = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
  };
};
export default connect(mapToState, mapDispatchToProps)(SideBar);
