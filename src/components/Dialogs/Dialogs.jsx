import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className = {classes.dialogs}>
      <div className = {classes.dialogs_items}>
        <div className = {classes.dialog}>
          <img className = {classes.img} src="https://cdn-icons-png.flaticon.com/512/4202/4202832.png" alt="" />
          <div className = {classes.name}>Maria</div>
        </div>

        <div className = {classes.dialog}>
          <img className = {classes.img} src="https://cdn-icons-png.flaticon.com/512/4202/4202839.png" alt="" />
          <div className = {classes.name}>Andry</div>
        </div>

        <div className = {classes.dialog}>
          <img className = {classes.img} src="https://cdn-icons-png.flaticon.com/512/4202/4202836.png" alt="" />
          <div className = {classes.name}>Dmitrii</div>
        </div>

        <div className = {classes.dialog}>
          <img className = {classes.img} src="https://cdn-icons-png.flaticon.com/512/9416/9416234.png" alt="" />
          <div className = {classes.name}>Sasha</div>
        </div>

        <div className = {classes.dialog}>
          <img className = {classes.img} src="https://cdn-icons-png.flaticon.com/512/4202/4202840.png" alt="" />
          <div className = {classes.name}>Adi</div>
        </div>

        <div className = {classes.dialog}>
          <img className = {classes.img} src="https://cdn-icons-png.flaticon.com/512/4202/4202831.png" alt=""/>
          <div className = {classes.name}>Ivan</div>
        </div>
      </div>

      <div className = {classes.messages}>
        <div className = {classes.message}>Hey</div>
        <div className = {classes.message}>How are you?</div>
        <div className = {classes.message}>My name is Dima</div>
      </div>
    </div>
  );
}

export default Dialogs;