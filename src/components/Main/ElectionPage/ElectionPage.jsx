import React, { useState, useEffect, useCallback, useContext } from 'react';
import './ElectionPage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NewsList from '../HomePage/NewsList/NewsList'
import moment from 'moment'
import LanguageContext from '../../../LanguageContext'

const sortByOption = [
{ key: 1, value: 'publishedAt', name: 'Data publikacji'},
{ key: 2, value: 'popularity', name: 'Popularność'},
{ key: 3, value: 'relevancy', name: 'Zgodność'},]



const ElectionPage = () => {
  const [startDate, setStartDate] = useState(moment().subtract(1, 'months').toDate());
  const [endDate, setEndDate] = useState(moment().toDate());
  const [results, setResults] = useState(null);
  const [sortBy, setSortBy] = useState(sortByOption[0].value)
  const lang = useContext(LanguageContext);

  const fethArticles = useCallback(() => {
    fetch(`http://localhost:4000/election?language=${lang}&to=${startDate.toISOString()}&from=${endDate.toISOString()}&sortBy=${sortBy}`)
      .then((response) => response.json())
      .then((res) => setResults(res));
  }, [startDate, endDate, lang, sortBy]);

useEffect (() => { fethArticles(); }, [fethArticles]);

const onValueChange = (e) => {
  const value = e.target.value;
  setSortBy(value);
}

return (
  <div className="ElectionPage">
    <div>
      <label>Data początkowa: </label>
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        dateFormat="dd-MM-yyyy"
        maxDate={ new Date() }
/>
    </div>
    <div>
      <label>Data końcowa: </label>
      <DatePicker
        selected={endDate}
        onChange={setEndDate}
        dateFormat="dd-MM-yyyy"
        maxDate={ new Date() }
        />
    </div>
    <div>
      <label>Sortuj po: </label>
      <select value = { sortByOption.name } onChange={ onValueChange }>
        {sortByOption.map(({ key, value, name } ) =>
          <option key={key} value={value}>{name}</option>
        )}
      </select>
    </div>
    {results ? (<NewsList articles={results.articles} />) : null }
  </div>
);
};

export default ElectionPage;
