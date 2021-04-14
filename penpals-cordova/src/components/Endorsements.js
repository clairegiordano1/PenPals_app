// import React from "react";
// import {
//   Form,
//   Checkbox,
//   Input,
//   Card,
//   Button,
//   Select,
//   Image,
//   Icon,
// } from "semantic-ui-react";
// import "../style/Login.css";
// import { connect } from "react-redux";
// import { getAllEndorsements } from "../store/endorsement";
// import { getUsersInfo } from "../store/users";
// import logo from ".././imgs/logo.png";
// import "../style/style.css";
// class Endorsement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: 0,
//     };
//   }

//   componentDidMount = async () => {
//     await this.props.getAllEndorsements();
//     await this.props.getUsersInfo();
//     const path = window.location.pathname.split("/");
//     const id = path[path.length - 1];

//     var endorsed = [];
//     var users = [];
//     var picUrls = [];
//     this.props.endorsements.forEach((endorsement) => {
//       if (endorsement.endorsement_user == id) {
//         endorsed.push(endorsement);
//         users.push(endorsement.userId);
//       }
//     });
//     for (let i = 0; i < users.length; i++) {}
//   };

//   render() {
//     const path = window.location.pathname.split("/");
//     const thisId = path[path.length - 1];
//     var endorsed = [];
//     var users = [];
//     this.props.endorsements.forEach((endorsement) => {
//       if (endorsement.endorsement_user == thisId) {
//         endorsed.push(endorsement);
//         users.push(endorsement.userId);
//       }
//     });
//     console.log(path, "path");
//     return (
//       <Card centered>
//         {endorsed.map((endorsement) => (
//           <div>
//             {/* <div>{endorsement.userId}</div> */}
//             <div>{endorsement}</div>
//           </div>
//         ))}
//       </Card>
//     );
//   }
// }

// const mapToState = (state) => ({
//   endorsements: state.endorsements,
//   users: state.users,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getAllEndorsements: () => dispatch(getAllEndorsements()),
//   getUsersInfo: () => dispatch(getUsersInfo()),
// });

// export default connect(mapToState, mapDispatchToProps)(Endorsement);
