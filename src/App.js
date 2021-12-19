import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom'; 
import { spring, AnimatedSwitch } from 'react-router-transition';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BottomLine from './components/BottomLine';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Travel from './pages/Travel';
import _Switch from './pages/Switch';
import logo from './logo.svg';
import './App.css';
import './css/fonts.css';
import { useSelector } from 'react-redux';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  let isHomepage = useSelector((state) => state.config.isHomepage)

  return (
    <BrowserRouter basename='/'>
      <div>
        { !isHomepage ? <Navbar></Navbar> : <></> }
        <Sidebar></Sidebar>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/travel" component={Travel} />
          <Route path="/switch" component={_Switch} />
        </AnimatedSwitch>
        <BottomLine></BottomLine>
      </div>
    </BrowserRouter>
  );
}


export default App;
