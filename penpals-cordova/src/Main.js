import React, { Component } from "react";
import { Route } from "react-router-dom";

//-----IMPORT COMPONENTS-----
import Home from "./components/Home";
import Login from "./components/Login";
import Signup1 from "./components/Signup1";
import Signup2 from "./components/Signup2";
import Signup3 from "./components/Signup3";
import Profile from "./components/Profile";
import Chat from "./components/Message";
import SearchBar from "./components/SearchBar";
import SearchProfile from "./components/SearchProfile";
import Requests from "./components/Requests";
import Post from "./components/Posts";
import Feed from "./components/Feed";

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup-1" component={Signup1} />
        <Route exact path="/signup-2" component={Signup2} />
        <Route exact path="/signup-3" component={Signup3} />
        <Route exact path="/profile/:id" component={Profile} />
        {/* <Route exact path="/newsfeed" component={Feed} /> */}
        <Route exact path="/message" component={Chat} />
        <Route exact path="/search/:id" component={SearchBar} />
        <Route exact path="/find/:id" component={SearchProfile} />
        <Route exact path="/requests/:id" component={Requests} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/feed/:id" component={Feed} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
