import React from 'react';
import './HomePage.css';
import NewsList from './NewsList/NewsList'
import NewsFiltersBar from './NewsFiltersBar/NewsFiltersBar'
import LanguageContext from '../../../LanguageContext'
import { Pagination } from 'semantic-ui-react'

class HomePage extends React.Component {
  static contextType = LanguageContext;
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      category: null,
      lang: 'pl'
    }
  }
componentDidMount() {
  this.getArticles();
  this.setState({ lang: this.context });
};

componentDidUpdate(prevProps, prevState, snapshot) {
  if
  (prevState.category !== this.state.category ||
    prevState.lang !== this.state.lang) {
    this.getArticles();
  }
  if (prevState.lang !== this.context) this.setState({ lang: this.context });
}

getArticles(){
  const { category } = this.state;
  const query = category ? `&category=${category}` : '';
  fetch(`http://localhost:4000/articles?country=${this.context}${query}`)
    .then((response) => response.json())
    .then((results) => this.setState({ results }));
}

setCategory = (category) => this.setState({ category });

render() {
  const { results } = this.state;
  if (!results) return null;
  return (
    <div id="HomePage">
      {results && results.totalResults ? (
        <Pagination
          defaultActivePage={1}
          totalPages={ Math.ceil(results.totalResults / 20) }
          />) : null }
      <NewsFiltersBar onCategoryChange={this.setCategory} />
      <NewsList articles={results.articles} />
    </div>
    )
  }
}

export default HomePage;
