import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PlayNowButton from './components/PlayNowButton';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Gallery from './components/Gallery'; 
import Social from './components/Social'; 
import BackToTopButton from './components/BackToTopButton'; // Import the BackToTopButton component
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Social />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Gallery />
        <PlayNowButton />
        {/* Place the BackToTopButton component */}
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
