import React from 'react';
import './CategoryDropdown.css';


class CategoryDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }}

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onCategoryChange(value)
};

  render() {
    const { value } = this.state;

    return (
      <>
      <div id="Category">
        <p>Kategoria:</p>
        <select value={value} onChange={this.onValueChange}>
          <option value="business">Biznes</option>
          <option value="entertainment">Rozrywka</option>
          <option value="health">Zdrowie</option>
          <option value="science">Nauka</option>
          <option value="sports">Sport</option>
          <option value="technology">Technologia</option>
        </select>
      </div>
      </>
      )
    }}

export default CategoryDropdown
