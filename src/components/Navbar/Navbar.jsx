import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className = {classes.navbar}>
        <ul className = {classes.nav_list}>
          <li className = {classes.nav_item}>
            <NavLink className = {classes.nav_link} to="/profile">Profile</NavLink>
          </li>

          <li className = {classes.nav_item}>
            <NavLink className = {classes.nav_link} to="/dialogs">Messages</NavLink>
          </li>

          <li className = {classes.nav_item}>
            <NavLink className = {classes.nav_link} to='/news'>News</NavLink>
          </li>

          <li className = {classes.nav_item}>
            <NavLink className = {classes.nav_link} href="/music">Music</NavLink> 
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