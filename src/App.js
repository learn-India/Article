import React, { Component } from 'react';
import ArticleLink from './components/article-list/ArticleLink'
import {Route} from 'react-router-dom'
import ArticleDeatils from '../src/components/article-content/ArticleDetails'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={ArticleLink} />
        <Route path="/ArticleDeatils/:id" exact component={ArticleDeatils} />
      </div>
    );
  }
}

export default App;
