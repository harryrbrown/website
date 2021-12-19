import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';
import './mobilemenu.css';

import Cross from './../img/cross.svg';
import Hamburger from './../img/hamburger.svg';
import Social from './../img/social.svg';

export default class Navbar extends React.Component{
  constructor() {
    super();
    this.state = { showMobileMenu: false }
  }

  _showMobileMenu = (bool) => {
    this.setState({
      showMobileMenu: bool
    })
  }


  render(){
      return (
        <div>
          { this.state.showMobileMenu && (
          <div className="mobileMenu">
            <div className="mobileNavCross">
              <img className="hamburger" src={Cross} onClick={this._showMobileMenu.bind(null, false)}/><br/><br/>
            </div>
            <div className="mobileMenuInner">
              <NavLink to="/" onClick={this._showMobileMenu.bind(null, false)}>HOME</NavLink><br></br>
              <NavLink to="/about" onClick={this._showMobileMenu.bind(null, false)}>ABOUT</NavLink><br></br>
              <NavLink to="/work" onClick={this._showMobileMenu.bind(null, false)}>WORK</NavLink><br></br>
              <NavLink to="/contact" onClick={this._showMobileMenu.bind(null, false)}>CONTACT</NavLink><br></br>
            </div>
          </div>
          )}

          <div className="nav">
            <NavLink activeClassName="is-active" to="/" exact>HOME </NavLink>
            <NavLink activeClassName="is-active" to="/about">ABOUT </NavLink>
            <NavLink activeClassName="is-active" to="/work">WORK </NavLink>
            <NavLink activeClassName="is-active" to="/contact">CONTACT </NavLink>
          </div>

          <div className="mobileNav">
            <img className="hamburger" src={Hamburger} onClick={this._showMobileMenu.bind(null, true)}/><br/><br/>
          </div>
        </div>
      );
  }
}