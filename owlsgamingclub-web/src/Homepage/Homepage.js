import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Homepage.css';
import Slideshow from '../Slideshow/Slideshow';
function Homepage() {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    // Delay the disappearance of the typewriter effect
    const timeout = setTimeout(() => {
      setShowTypewriter(false);
    }, 7000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='homepage-section'>
      {/* <Slideshow/> */}
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
  )
}

export default Homepage
