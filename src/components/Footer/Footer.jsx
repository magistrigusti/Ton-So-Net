import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className = {classes.footer}> 
      <h4 className = {classes.title}>--- User Content ---</h4>
      <div className = {classes.mail}>magistrigusti@gmail.com</div>
    </div>
  )
}

export default Footer;