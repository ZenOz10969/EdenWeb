
import React from 'react';

const BackToTopButton = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={handleBackToTop} className="back-to-top-button">
      Back to Top
    </button>
  );
};

export default BackToTopButton;
