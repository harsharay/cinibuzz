import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-root">
      <div className="nav-title">
        <a href='/'>Cinibuzz</a>
      </div>
      <div className="nav-sections">
        <a href='/'>Movies</a>
        <p>TV shows</p>
        <p>Kids</p>
      </div>
    </div>
  );
};

export default Nav;
