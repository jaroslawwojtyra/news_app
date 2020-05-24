import './Main.css'
import React from 'react';
import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage'
import HelpPage from './HelpPage'
import {Switch, Route} from "react-router-dom";

const Main = () => (
  <main>

    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
