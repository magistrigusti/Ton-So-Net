import React from 'react';
import { NavLink } from 'react-router-dom';
import Settings from './../Settings/Settings';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav_list}>
        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} to="/profile">Profile</NavLink>
        </li>

        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} to="/dialogs">Messages</NavLink>
        </li>

        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} to="/users">Users</NavLink>
        </li>

        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} to='/news'>News</NavLink>
        </li>

        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} href="/music">Music</NavLink>
        </li>
      </ul>

      <ul className={classes.nav_list}>
        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} href="/settings">
            <Settings />
          </NavLink>
        </li>
      </ul>


    </nav>
  );
}

export default Navbar;