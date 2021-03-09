import React, { Component } from "react";
import { Route } from "react-router-dom";

//-----IMPORT COMPONENTS-----
import Home from "./components/Home";
import Login from "./components/Login";
import Signup1 from "./components/Signup1";
import Signup2 from "./components/Signup2";
import Signup3 from "./components/Signup3";
import Profile from "./components/Profile";
export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup-1" component={Signup1} />
        <Route exact path="/signup-2" component={Signup2} />
        <Route exact path="/signup-3" component={Signup3} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
