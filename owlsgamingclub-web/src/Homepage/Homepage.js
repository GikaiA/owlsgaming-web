import React from 'react';
import Typewriter from 'typewriter-effect';
// import BackgroundSlider from 'react-background-slider';
import './Homepage.css';
import ColorTransition from '../ColorTransition/ColorTransition';

function Homepage() {
 
  // const images = [
  //   '../images/codphoto.jpg',
  //   '../images/leaguephoto.jpg',
  //   '../images/smashphoto.jpg',
  //   '../images/valphoto.jpg',
  //   '../images/owphoto.jpg'
  // ];

  return (
    <div className='homepage-section'>
      <ColorTransition/>
      {/* <BackgroundSlider images={images} duration={5} transition={2}/> */}
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
