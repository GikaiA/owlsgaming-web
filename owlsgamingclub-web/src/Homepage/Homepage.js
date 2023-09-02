import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Homepage.css';
function Homepage() {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    // Delay the disappearance of the typewriter effect
    const timeout = setTimeout(() => {
      setShowTypewriter(false);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='homepage-section'>
      <p className='homepage-title'>Owls Gaming Club</p>
      <Typewriter className="custom-typewriter" options={{
              strings: ['Competitive', 'Community', 'Innovative'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 1000,
            }}
          />
      <span className='typewriter'></span>
    </div>
  )
}

export default Homepage
