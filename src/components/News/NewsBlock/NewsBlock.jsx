import React from 'react';
import classes from './NewsBlock.module.css';

const NewsBlock = (props) => {
  
  return (
    <div>
      <h3>News title</h3>
      <div>
        <img className={classes.img} src="https://cnews24.ru/uploads/08f/08f8f84ab0ddc6016e441b2ea24896b70e453cab.webp" alt="" />
      </div>
      <div>{props.text}</div>
    </div>
  );
}

export default NewsBlock;