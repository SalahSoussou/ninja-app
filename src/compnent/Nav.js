import React from "react";

const Nav = () => {
  return (
    <nav className="navBar">
      <h1>The dojo blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/new">New Blog</a>
      </div>
    </nav>
  );
};

export default Nav;
