import React, { useState, useEffect } from 'react';
import './ElectionPage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NewsList from '../HomePage/NewsList/NewsList'
import moment from 'moment'


const ElectionPage = () => {
  const [endDate, setEndDate] = useState(moment().subtract(1, 'months').toDate());
  const [startDate, setStartDate] = useState(moment().toDate());
  const [results, setResults] = useState(null);
  const fethArticles = () => {
    fetch(`http://localhost:4000/election?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`)
      .then((response) => response.json())
      .then((res) => setResults(res));
  }

useEffect (() => { fethArticles(); }, []);
useEffect (() => { fethArticles(); }, [startDate, endDate]);

console.log(startDate);

return (
  <div className="ElectionPage">
    <div>
      <label>Data początkowa: </label>
      <DatePicker selected={startDate} onChange={setStartDate} dateFormat="dd-MM-yyyy"/>
    </div>
    <div>
      <label>Data końcowa: </label>
      <DatePicker selected={endDate} onChange={setEndDate} dateFormat="dd-MM-yyyy"/>
    </div>
    {results ? (<NewsList articles={results.articles} />) : null }
  </div>
);
};

export default ElectionPage;
