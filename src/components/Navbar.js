import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

import Hamburger from './../img/hamburger.svg';
import Social from './../img/social.svg';

export default class Navbar extends React.Component{
  render(){
      return (
        <div>
          <div className="nav">
            <NavLink activeClassName="is-active" to="/" exact>HOME </NavLink>
            <NavLink activeClassName="is-active" to="/about">ABOUT </NavLink>
            <NavLink activeClassName="is-active" to="/work">WORK </NavLink>
            <NavLink activeClassName="is-active" to="/contact">CONTACT </NavLink>
          </div>

          <div className="mobileNav">
            <img className="hamburger" src={Hamburger} /><br/><br/>
            <img className="hamburger" src={Social} />
          </div>
        </div>
      );
  }
}