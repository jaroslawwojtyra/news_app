import React from 'react';
import './NewsFiltersBar.css';
import CategoryDropdown from './CategoryDropdown';

const NewsFiltersBar = (props) => (
  <div id="NewsFiltersBar">
    <CategoryDropdown onCategoryChange={props.onCategoryChange} />
  </div>
);

export default NewsFiltersBar;
