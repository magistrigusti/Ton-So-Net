import React from 'react';
import classes from './Header.module.css';


const Header = () => {
  return (
    <header className = {classes.header}>
        <div className = {classes.img_wrapper}>
          <img className = {classes.header_img} src='https://www.ph4.ru/DL/LOGO/t/tonproject.gif' alt=""></img>
        </div>
        <div className = {classes.header_title}>
          <h2 className = {classes.title}>Ton-So-Net</h2>
        </div>
    </header>
  );
}

export default Header;