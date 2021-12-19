import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom'; 
import { AnimatedSwitch } from 'react-router-transition';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BottomLine from './components/BottomLine';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import _Switch from './pages/Switch';
import logo from './logo.svg';
import './App.css';
import './css/fonts.css';
import { useSelector } from 'react-redux';

function App() {
  let isHomepage = useSelector((state) => state.config.isHomepage)

  return (
    <BrowserRouter basename='/'>
      <div>
        { !isHomepage ? <Navbar></Navbar> : <></> }
        <Sidebar></Sidebar>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/switch" component={_Switch} />
        </AnimatedSwitch>
        <BottomLine></BottomLine>
      </div>
    </BrowserRouter>
  );
}


export default App;
