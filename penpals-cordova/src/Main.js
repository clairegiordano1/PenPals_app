import React, { Component } from "react";
import { Route } from "react-router-dom";

//-----IMPORT COMPONENTS-----
import Home from "./components/App Entry/Home";
import Login from "./components/App Entry/Login";
import Signup1 from "./components/App Entry/Signup1";
import Signup2 from "./components/App Entry/Signup2";
import Signup3 from "./components/App Entry/Signup3";
import Profile from "./components/Profile/Profile";
import SearchProfile from "./components/Profile/SearchProfile";
import Requests from "./components/Profile/Requests";
import Chat from "./components/Messenger/Message";
import SearchBar from "./components/Search/SearchBar";
import Post from "./components/Feed/Posts";
import Feed from "./components/Feed/Feed";
import Safety from "./components/Feed/Safety";
import WaitingRoom from "./components/Feed/WaitingRoom";

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup-1" component={Signup1} />
        <Route exact path="/signup-2" component={Signup2} />
        <Route exact path="/signup-3" component={Signup3} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/messages/:id" component={Chat} />
        <Route exact path="/search/:id" component={SearchBar} />
        <Route exact path="/find/:id" component={SearchProfile} />
        <Route exact path="/requests/:id" component={Requests} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/feed/:id" component={Feed} />
        <Route exact path="/safety/:id" component={Safety} />
        <Route exact path="/waiting-room/:id" component={WaitingRoom} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
