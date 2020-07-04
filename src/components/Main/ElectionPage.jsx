import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ElectionPage = () => {
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

return (
  <div class="ElectionPage">
    <div>
      <label>Data początkowa</label>
      <DatePicker selected={startDate} onChange={setStartDate}/>
    </div>
    <div>
      <label>Data końcowa</label>
      <DatePicker selected={endDate} onChange={setEndDate}/>
    </div>
  </div>
);
};

export default ElectionPage;
