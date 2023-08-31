import React, { useEffect, useState } from 'react';
import './Homepage.css';
function Homepage() {
  const words = ['Competitive', 'Community', 'Innovative']; // Replace with your words
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (characterIndex < words[wordIndex].length) {
        setDisplayedText(prevText => prevText + words[wordIndex][characterIndex]);
        setCharacterIndex(characterIndex + 1);
      } else {
        setCharacterIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
        setDisplayedText('');
      }
    }, 220); // Typing speed in milliseconds

    return () => clearInterval(typingInterval);
  }, [characterIndex, wordIndex]);

  return (
    <div className='homepage-section'>
      <p className='homepage-title'> Owls Gaming Club</p>
      <p className='animated-text'>{displayedText}</p>
    </div>
  )
}

export default Homepage
