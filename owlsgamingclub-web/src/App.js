import React from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import SideNavbar from './SideNavbar/SideNavbar';
import Homepage from './Homepage/Homepage';
import Games from './Games/Games';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='color-transition'>
      <BrowserRouter>
        <SideNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Use 'element' */}
          <Route path="/games" element={<Games />} /> {/* Use 'element' */}
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
