import './Main.css'
import React from 'react';
import HomePage from './HomePage/HomePage'
import ElectionPage from './ElectionPage/ElectionPage'
import HelpPage from './HelpPage/HelpPage'
import {Switch, Route} from "react-router-dom";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/election">
        <ElectionPage />
      </Route>
      <Route exact path="/help">
        <HelpPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
