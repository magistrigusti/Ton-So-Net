import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className = {classes.header}>
        <img className = {classes.header_img} src='https://images.static-collegedunia.com/public/college_data/images/company_image/1577428702logo.png' alt=""></img>
        <div className = {classes.header_title}>
          <h2 className = {classes.title}>Ton-So-Net</h2>
        </div>
    </header>
  );
}

export default Header;