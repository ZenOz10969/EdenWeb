// PlayNowButton.js
import React, { useEffect } from 'react';
import './PlayNowButton.css'; // Import the CSS file where you define the animation styles

const PlayNowButton = () => {
  
  useEffect(() => {
    const playNowButton = document.querySelector('.play-now-button');

    const handleMouseEnter = () => {
      playNowButton.classList.add('rotate');
    };

    const handleMouseLeave = () => {
      playNowButton.classList.remove('rotate');
    };

    playNowButton.addEventListener('mouseenter', handleMouseEnter);
    playNowButton.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      playNowButton.removeEventListener('mouseenter', handleMouseEnter);
      playNowButton.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button className="play-now-button">
      <div id="wrapper">
        <div className="gears" id="one-gear">
          <div className="gears-container">
            <div className="gear-rotate"></div>
          </div>
          <div className="message">
          </div>
        </div>
        <div className="gears" id="two-gears">
          <div className="gears-container">
            <div className="gear-rotate"></div>
            <div className="gear-rotate-left"></div>
          </div>
          <div className="message">
          </div>
        </div>
      </div>
      PLAY NOW!
    </button>
  );
}



export default PlayNowButton;
