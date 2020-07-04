import './Main.css'
import React from 'react';
import HomePage from './HomePage/HomePage'
import ElectionPage from './ElectionPage'
import HelpPage from './HelpPage'
import {Switch, Route} from "react-router-dom";

const Main = () => (
  <main>

    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/election">
        <ElectionPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
