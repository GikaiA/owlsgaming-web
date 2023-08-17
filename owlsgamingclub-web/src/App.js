import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideNavbar from './SideNavbar/SideNavbar';
import Homepage from './Homepage/Homepage';
import Games from './Games/Games';
import ColorTransition from './ColorTransition/ColorTransition';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <ColorTransition/>
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
