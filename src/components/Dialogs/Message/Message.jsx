import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  let path = '/message/' + props.id;
  return (
    <div className={classes.message}>
      <img className={classes.img} src={props.src} alt="" />
      {props.message}
    </div>
  );
}

export default Message;