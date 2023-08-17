import React from "react";
import { Link } from "react-router-dom";
import "./SideNavbar.css";

function SideNavbar() {
  return (
    <div className="side-nav">
      <div className="side-nav-container">
        {/* <Link to="/" className="navbar-titles">
          Home
        </Link> */}
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;
