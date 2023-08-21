import React from 'react';
import LOL from "../images/LOL logo.png";
import './LoL.css';

function LoL() {
  return (
    <div className='LOL-section'>
    <img src={LOL} alt='LOL-image' className='LOL-image'/>
    <p className='LOL-text'> this is where the League of Legends text is going</p>
    </div>
  )
}

export default LoL
