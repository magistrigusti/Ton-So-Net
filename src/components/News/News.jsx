import React from 'react';
import NewsBlock from './NewsBlock/NewsBlock';

const News = (props) => {
  let newsElement = props.state.newsData.map(news => <NewsBlock id={news.id} title={news.title}  text={news.text} src={news.src} />);

  
  return(
    <div>
      {newsElement}
    </div>
  );
}

export default News;