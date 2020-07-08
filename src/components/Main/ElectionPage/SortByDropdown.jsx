import React, { useState } from 'react';

const sortByOption = [
  { value: 'publishedAt', name: 'Data publikacji'},
  { value: 'popularity', name: 'Popularność'},
  { value: 'relevancy', name: 'Zgodność'},
]

// const [sortBy, setSortBy] = useState(sortByOption[0].value)

const SortByDropdown = () => {
  return (
  <div>
    <label>Sortuj po: </label>
    <select>
      {sortByOption.map(({ value, name }) =>
        <option key={value} value={value}>{name}</option>
      )}
    </select>
  </div>
);
};

export default SortByDropdown
