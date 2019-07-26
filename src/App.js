import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import ArticlesList from './components/ArticlesList';
import Article from'./components/Article';
import ArticleData from './data/articles.json';
import './App.css';

function App() {

  return (
    <Router className="container">
      <Route exact path="/" component={ArticlesList} />
      <Route exact path={`/articles/:id`}  render={() => (<Article id={ArticleData.id} />)} />
    </Router>
  );
}

export default App;
