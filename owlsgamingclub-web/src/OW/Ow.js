import React from 'react';
import OWLogo from "../images/OW Logo.png";
import './OW.css';

function OW() {
  return (
    <div className='overwatch-section'>
      <img src={OWLogo} alt='ow-logo' className='ow-image'/>
      <p className='ow-text'>this is where the overwatch stuff will be</p>
    </div>
  )
}

export default OW
