import React, { Component } from 'react';
import Navitems from './Navitems';
import HamburgerMenu from './HamburgerMenu';
import Social from './Social';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: '',
      menuOpen: false,
      currentPictureIndex: 0,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  activeitem = (item) => {
    if (this.state.NavItemActive.length > 0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({ NavItemActive: item }, () => {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };

  handleIconClick = (index) => {
    this.setState({ currentPictureIndex: index });
  };

  render() {
    const pictures = [ /* Array of picture URLs */ ];
    return (
      <nav className="navbar">
        <HamburgerMenu toggleMenu={this.toggleMenu} />
        <ul className={`menu ${this.state.menuOpen ? 'open' : ''}`}>
          <Navitems item="White Paper" tolink="/" activenav={this.activeitem} />
          <Navitems item="Announcement" tolink="/Announcement" activenav={this.activeitem} />
          <Navitems item="Gallery" tolink="/Gallery" activenav={this.activeitem} />
          <Navitems item="Store" tolink="/Store" activenav={this.activeitem} />
          <Navitems item="About Us" tolink="/About Us" activenav={this.activeitem} />
          <Navitems item="Blockchain" tolink="/Blockchain" activenav={this.activeitem} />
          <Navitems item="Sign in" tolink="/Sign in" activenav={this.activeitem} />
        </ul>
        <div className="logo-container">
          {/* Display picture with icon */}
          <div className="picture-container">
            <img src={pictures[this.state.currentPictureIndex]} alt="Picture" />
            <div className="icon-container">
              <button onClick={() => this.handleIconClick(0)}>Icon 1</button>
              <button onClick={() => this.handleIconClick(1)}>Icon 2</button>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
