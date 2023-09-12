import React, {useState} from "react";
import { Link } from "react-router-dom";
import owlsesports from "../images/owls-esports.png";
import TeamsSubMenu from "../TeamsSubMenu/TeamsSubMenu";
import "./SideNavbar.css";

function SideNavbar() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = (open) => {
    setShowSubMenu(open);
  };

  const closeSubMenu = () =>{
    setShowSubMenu(false)
  }

  return (
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
        <li onClick={toggleSubMenu}>
        <button className={`nav-link ${showSubMenu ? 'active' : ''}`}>Teams</button>
        {showSubMenu && <TeamsSubMenu isActive={showSubMenu} toggleSubMenu = {toggleSubMenu} closeSubMenu={closeSubMenu}/>}
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;
