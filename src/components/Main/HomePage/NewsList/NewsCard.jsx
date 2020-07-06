import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => (
  <div className="NewsCard">
    <img src={props.urlToImage} alt="" />
    <div className="NewsConntent">
    <h2>{props.title}</h2>
    <h4>{props.publishedDate}</h4>
    <p>{props.description}</p>
    </div>
    <div className='CardFooter'>
      <a href={props.url} target="_blank" rel="noopener noreferrer">Zobacz więcej</a>
      <p>Autor: {props.author}</p>
      <p>Źródło: {props.sourceName}</p>
    </div>
  </div>
);

export default NewsCard;
