// Slideshow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import codphoto from "../images/codphoto.jpg";
import valphoto from '../images/valphoto.jpg';
import smashphoto from '../images/smashphoto.jpg';

function Slideshow({ autoplay, duration }) {
    const images = [codphoto, valphoto, smashphoto]; // list of photos
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, duration);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, duration, images.length]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Slideshow" />
    </div>
  );
}

export default Slideshow;
