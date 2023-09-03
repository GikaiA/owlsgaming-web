import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideNavbar from './SideNavbar/SideNavbar';
import Homepage from './Homepage/Homepage';
import ColorTransition from './ColorTransition/ColorTransition';
import About from './About/About';
import './App.css';
import CoD from './CoD/CoD';
import CSGO from './CSGO/CSGO';
import OW from './OW/Ow';
import Valorant from './Valorant/Valorant';
import RL from './RL/RL';
import LoL from './LoL/LoL';
import TeamsSubMenu from './TeamsSubMenu/TeamsSubMenu';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      {/* <ColorTransition/> */}
        <SideNavbar />
        <div className='content-container'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About/>} />
          <Route path = '/teams' element={<TeamsSubMenu/>}/>
          <Route path = '/teams/call-of-duty' element={<CoD/>}/>
          <Route path='/teams/league-of-legends' element={<LoL/>}/>
          <Route path='/teams/csgo' element={<CSGO/>}/>
          <Route path='/teams/overwatch' element={<OW/>}/>
          <Route path='/teams/valorant' element={<Valorant/>}/>
          <Route path='/teams/rocket-league' element={<RL/>}/>
          
        </Routes>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
