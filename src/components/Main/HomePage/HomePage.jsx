import React from 'react';
import './HomePage.css';
import NewsList from './NewsList/NewsList'
import NewsFiltersBar from './NewsFiltersBar/NewsFiltersBar'


class HomePage extends React.Component {
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
  if (prevState.category !== this.state.category) {
    this.getArticles();
    console.log(this.state.category);
  }
}

getArticles(){
  const { category } = this.state;
  const query = category ? `?category=${category}` : '';
  fetch(`http://localhost:4000/articles${query}`)
    .then((response) => response.json())
    .then((results) => this.setState({ results }));
}

setCategory = (category) => this.setState({ category });

render() {
  const { results } = this.state;
  if (!results) return null;
  return (
    <div>
      <NewsFiltersBar onCategoryChange={this.setCategory} />
      <NewsList articles={results.articles} />
    </div>
    )
  }
}

export default HomePage;
