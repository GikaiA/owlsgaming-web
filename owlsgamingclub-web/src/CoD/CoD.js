import React from 'react';
import COD from '../images/COD Logo.png';
import './CoD.css';

function CoD() {
  return (
    <div className='cod-section'>
      <img src={COD} alt='cod-image' className='cod-image'/>
      <p className='cod-text'>
        this is where the COD text is supposed to be.
      </p>
    </div>
  )
}

export default CoD
