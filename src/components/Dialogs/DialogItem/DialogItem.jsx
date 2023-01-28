import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div>
      <NavLink className={classes.dialog} to={path}>
        <img className={classes.img} src={props.src} alt="" />
        <div className={classes.name}>{props.name}</div>
      </NavLink>
    </div>
  );
}

export default DialogItem;
