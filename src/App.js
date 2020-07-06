import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {BrowserRouter} from "react-router-dom";
import LanguageContext from "./LanguageContext";

const App = () => {

const [lang, setLang] = useState('pl');

return (
  <div id="App">
    <BrowserRouter>
      <LanguageContext.Provider value={lang}>
        <Header onLangChange={ setLang }/>
        <Main />
      </LanguageContext.Provider>
    </BrowserRouter>
  </div>
  );
};

export default App;
