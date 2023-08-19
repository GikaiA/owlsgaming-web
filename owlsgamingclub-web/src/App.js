import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideNavbar from './SideNavbar/SideNavbar';
import Homepage from './Homepage/Homepage';
import ColorTransition from './ColorTransition/ColorTransition';
import About from './About/About';
import Teams from './Teams/Teams';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      <ColorTransition/>
        <SideNavbar />
        <div className='content-container'>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Use 'element' */}
          <Route path='/about' element={<About/>} />
          <Route path = '/teams' element={<Teams/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
