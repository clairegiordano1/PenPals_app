import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <Link to="/users">Users</Link>
      <p> GHi</p>
    </div>
  );
};

export default Navbar;
