import React from 'react';
import classes from './News.module.css';
import NewsCripto from './newsCripto/NewsCripto';

const News = (props) => {
  return (
    <div className={classes.news}>
      <img className={classes.news_img} src="https://as1.ftcdn.net/v2/jpg/02/48/62/66/1000_F_248626651_AVRM7PP6DIAIVxEgxARCwyV4AuQkOjzO.jpg" alt=""/>
      News
      <NewsCripto />
    </div>
  );
}

export default News;