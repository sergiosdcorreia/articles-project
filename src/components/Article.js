import React from 'react';
import { Link } from "react-router-dom";
import ArticleData from '../data/articles.json';
import './Article.css';

function Article(props) {

  let article = ArticleData[props.id];

  return (
    <div className="article">
      <h2 className="article__title">{article.title}</h2>
      <h3 className="article__description">{article.description}</h3>
      <img className="article__image" src={article.image} alt={article.title} />
      <p className="article__body">{article.body}</p>
      <Link to="/" className="article__link">Back</Link>
    </div>
  );
}
  
  export default Article;