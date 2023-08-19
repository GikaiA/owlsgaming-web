import React from "react";
import { Link } from "react-router-dom";
import owlsesports from "../images/owls-esports.png"

import "./SideNavbar.css";

function SideNavbar() {
  return (
    <div className="side-nav">
      <div className="logo">
        <img src={owlsesports} alt="owlsesports-logo" width={250} height={250}/>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;
