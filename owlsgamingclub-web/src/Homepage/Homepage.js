import React from 'react';
import Typewriter from 'typewriter-effect';
import './Homepage.css';
import ColorTransition from '../ColorTransition/ColorTransition';

function Homepage() {

  return (
    <div className={`homepage-section fade-in`}>
    <div className='homepage-section'>
      <ColorTransition/>
      <p className='homepage-title'>Owls Gaming Club</p>
      <Typewriter className="custom-typewriter" options={{
              strings: ['Competitive', 'Community', 'Innovative'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 500,
            }}
          />
      <span className='typewriter'></span>
    </div>
    </div>
  )
}

export default Homepage
