import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsBlock from './NewsBlock/NewsBlock';

const News = (props) => {
  let newsElement = props.state.newsData.map(news => <NewsBlock id={news.id}  text={news.text} />);

  
  return(
    <div>
      <NavLink>
        {newsElement}
      </NavLink>
      {newsElement}
    </div>
  );
}

export default News;