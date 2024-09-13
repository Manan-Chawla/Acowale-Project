
import React from 'react';

const NewsCard = ({ article }) => {
    console.log('Article data:', article); 
  return (
    <div className="news-card">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsCard;
