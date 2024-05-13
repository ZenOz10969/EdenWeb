import React from 'react';

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default HamburgerMenu;
