import React from 'react';
import { Link } from 'react-router-dom';
import './TeamsSubMenu.css';

function TeamsSubMenu({isActive}) {
  return (
    <div className={`submenu ${isActive ? 'active': ''}`}>
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
  );
}

export default TeamsSubMenu;
