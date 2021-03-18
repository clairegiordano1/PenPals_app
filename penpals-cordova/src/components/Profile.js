import React, { Component } from "react";
import { getUserInfo, updateUser } from "../store/user";
import { connect } from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getUserInfo(this.props.user.id);
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <img
              src={this.props.user.imgUrl}
              style={{
                width: 220,
                borderRadius: "42.7%",
                position: "absolute",
                top: 200,
                alignSelf: "center",
              }}
            />
            <h1>User Profile</h1>
          </div>
        </div>
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
export default connect(mapToState, mapDispatchToProps)(Profile);
