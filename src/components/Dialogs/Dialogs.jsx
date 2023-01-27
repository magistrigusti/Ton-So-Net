import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink className = {classes.dialog} to={path}>
      <img className = {classes.img} src={props.src}  alt="" />
      <div className = {classes.name}>{props.name}</div>
    </NavLink>
  );
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {
  return (
    <div className = {classes.dialogs}>
      <div className = {classes.dialogs_items}>
        <DialogItem name="Maria" id="1" src="https://cdn-icons-png.flaticon.com/512/4202/4202832.png" />
        <DialogItem name="Andry" id="2" src="https://cdn-icons-png.flaticon.com/512/4202/4202839.png" />
        <DialogItem name="Dmitrii" id="3" src="https://cdn-icons-png.flaticon.com/512/4202/4202836.png" />
        <DialogItem name="Sasha" id="4" src="https://cdn-icons-png.flaticon.com/512/9416/9416234.png" />
        <DialogItem name="Adi" id="5" src="https://cdn-icons-png.flaticon.com/512/4202/4202840.png" />
        <DialogItem name="Ivan" id="6" src="https://cdn-icons-png.flaticon.com/512/4202/4202831.png" />
      </div>

      <div className={classes.messages}>
        <Message message='Hey' />
        <Message message='i,m fune and you?' />
      </div>
    </div>
  );
}

export default Dialogs;
