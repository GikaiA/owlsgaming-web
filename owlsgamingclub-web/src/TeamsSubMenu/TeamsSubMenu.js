import React from 'react';
import { Link } from 'react-router-dom';
import './TeamsSubMenu.css';

function TeamsSubMenu({isActive, closeSubMenu}) {
  return(
    <div className='submenu'>
      <div className={`teams-submenu ${isActive ? "active" : ""}`}
      onMouseLeave={closeSubMenu} 
    >
      <ul className='submenu-active'>
        <li>
          <Link to="/teams/league-of-legends">League of Legends</Link>
        </li>
        <li>
          <Link to="/teams/call-of-duty">Call of Duty</Link>
        </li>
        <li>
          <Link to="/teams/overwatch">Overwatch</Link>
        </li>
        <li>
          <Link to="/teams/smash">Smash</Link>
        </li>
        <li>
          <Link to="/teams/valorant">Valorant</Link>
        </li>
        <li>
          <Link to="/teams/rocket-league">Rocket League</Link>
        </li>
        <li>
          <Link to="/teams/csgo">CSGO</Link>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default TeamsSubMenu;
