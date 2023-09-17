import React, {useState} from "react";
import { Link } from "react-router-dom";
import owlsesports from "../images/owls-esports.png";
import TeamsSubMenu from "../TeamsSubMenu/TeamsSubMenu";
import "./SideNavbar.css";

function SideNavbar() {
  
  return (
    <div className={`side-nav fade-in`}>
    <div className="side-nav">
      <div className="logo">
        <img src={owlsesports} alt="owlsesports-logo" width={250} height={250} />
      </div>
      <ul className="sidenav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
        <button className='nav-link'>Teams</button>
        { <TeamsSubMenu/>}
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default SideNavbar;
