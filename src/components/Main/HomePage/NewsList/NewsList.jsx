import React from 'react';
import './NewsList.css';
import NewsCard from './NewsCard'

const NewsList = (props) => (
  <div id="NewsList">
    {props.articles.map((item) => (
      <NewsCard
        key={item.url+item.publishedAt}
        urlToImage={item.urlToImage}
        title={item.title}
        publishedDate={item.publishedAt}
        description={item.description}
        url={item.url}
        author={item.author}
        sourceName={item.source.name}
        />
    ))}
  </div>
);

export default NewsList;
