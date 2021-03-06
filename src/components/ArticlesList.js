import React from 'react';
import { Link } from "react-router-dom";
import './ArticleList.css';

function ArticlesList(props) {

  const { ArticleData } = props;

  const articlesListMap = ArticleData.map(({ id, title, description }) => {
    return (
      <div key={id} className="article-list">
        <div className="inner-container">
          <div className="article-list__text">
            <h2 className="article-list__title">{title}</h2>
            <h3 className="article-list__description">{description}</h3>
          </div>
          <Link to={`/articles/${id}`} className="article-list__link">Read more</Link>
        </div>
      </div>
    )
  });

  return (
    <div className="container">
      {articlesListMap}
    </div>
  )
};

export default ArticlesList;
