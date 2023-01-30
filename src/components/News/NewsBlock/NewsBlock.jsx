import React from 'react';
import classes from './NewsBlock.module.css';

const NewsBlock = (props) => {
  
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <img className={classes.img} src={props.src} alt="" />
      </div>
      <div>{props.text}</div>
    </div>
  );
}

export default NewsBlock;