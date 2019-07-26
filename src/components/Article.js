import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import ArticleData from '../data/articles.json';
import './Article.css';

function Article() {

    return (
      <div className="article">
        <h2 className="article__title">{ArticleData[1].title}</h2>
        <h3 className="article__description">{ArticleData[1].description}</h3>
        <img className="article__image" src={ArticleData[1].image} alt={ArticleData[1].title} />
        <p className="article__body">{ArticleData[1].body}</p>
        <Link to="/" className="article__link">Back</Link>
      </div>
    );
  }
  
  export default Article;