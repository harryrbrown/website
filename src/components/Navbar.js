import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends React.Component{
  render(){
    return (
      <div className="nav">
        <NavLink activeClassName="is-active" to="/" exact>HOME </NavLink>
        <NavLink activeClassName="is-active" to="/about">ABOUT </NavLink>
        <NavLink activeClassName="is-active" to="/work">WORK </NavLink>
        <NavLink activeClassName="is-active" to="/contact">CONTACT </NavLink>
      </div>
    );
  }
}