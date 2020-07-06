import React from 'react';
import './HomePage.css';
import NewsList from './NewsList/NewsList'
import NewsFiltersBar from './NewsFiltersBar/NewsFiltersBar'
import LanguageContext from '../../../LanguageContext'


class HomePage extends React.Component {
  static contextType = LanguageContext;
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      category: null
    }
  }
componentDidMount() {
  this.getArticles();
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log(this.context);
  if (prevState.category !== this.state.category) {
    this.getArticles();
  }
}

getArticles(){
  console.log(this.context);
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
      <NewsFiltersBar onCategoryChange={this.setCategory} />
      <NewsList articles={results.articles} />
    </div>
    )
  }
}

export default HomePage;
