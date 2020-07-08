import React, { useState, useEffect, useCallback, useContext } from 'react';
import './ElectionPage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NewsList from '../HomePage/NewsList/NewsList'
import moment from 'moment'
import LanguageContext from '../../../LanguageContext'
import SortByDropdown from './SortByDropdown'

const ElectionPage = () => {
  const [startDate, setStartDate] = useState(moment().subtract(1, 'months').toDate());
  const [endDate, setEndDate] = useState(moment().toDate());
  const [results, setResults] = useState(null);
  const lang = useContext(LanguageContext);

  const fethArticles = useCallback(() => {
    fetch(`http://localhost:4000/election?language=${lang}&to=${startDate.toISOString()}&from=${endDate.toISOString()}&sortBy=publishedAt`)
      .then((response) => response.json())
      .then((res) => setResults(res));
  }, [startDate, endDate, lang]);

useEffect (() => { fethArticles(); }, [fethArticles]);

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
    <SortByDropdown />
    {results ? (<NewsList articles={results.articles} />) : null }
  </div>
);
};

export default ElectionPage;
