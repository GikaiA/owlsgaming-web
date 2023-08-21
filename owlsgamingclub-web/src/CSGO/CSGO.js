import React from 'react';
import CSGOLogo from '../images/CSGO Logo.png';
import './CSGO.css';

function CSGO() {
  return (
    <div className='csgo-section'>
      <img src={CSGOLogo} alt='csgo-logo' className='csgo-image'/>
      <p className='csgo-text'> this is where the csgo text is going</p>
    </div>
  )
}

export default CSGO
