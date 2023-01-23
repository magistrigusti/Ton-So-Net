import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className = {classes.navbar}>
        <ul className = {classes.nav_list}>
          <li className = {classes.nav_item}>
            <NavLink to="/profile" className = {classes.nav_link}>Profile</NavLink>
          </li>

          <li className = {classes.nav_item}>
            <a className = {classes.nav_link} href="/dialogs">Messages</a>
          </li>

          <li className = {classes.nav_item}>
            <a className = {classes.nav_link} href='/news'>News</a>
          </li>

          <li className = {classes.nav_item}>
            <a className = {classes.nav_link} href="$#">Music</a> 
          </li>
        </ul>

        <ul className = {classes.nav_list}>
          <li className = {classes.nav_item}>
            <a className = {classes.nav_link} href="$#">Settings</a>
          </li>
        </ul>
        
        
      </nav>
  );
}

export default Navbar;