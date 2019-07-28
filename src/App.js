import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticlesList from './components/ArticlesList';
import Article from'./components/Article';
import ArticleData from './data/articles.json';
import './App.css';

function App() {

  return (
    <Router className="container">
      <Route exact path="/" render={() => (<ArticlesList ArticleData={ArticleData} />)} />
      <Route exact path={`/articles/:id`}  render={(props) => (<Article id={props.match.params.id} />)} />
    </Router>
  );
}

export default App;
