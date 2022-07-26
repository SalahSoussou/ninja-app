import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <h1>The dojo blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addBlog">New Blog</Link>
      </div>
    </nav>
  );
};

export default Nav;
