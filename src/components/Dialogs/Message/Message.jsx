import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  return (
    <div className={classes.message}>
      <img className={classes.img} src={props.src} />
      {props.message}</div>
  );
}

export default Message;