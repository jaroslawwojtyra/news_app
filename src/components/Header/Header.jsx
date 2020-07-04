import './Header.css'
import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
  <header>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/electionpage">Wiadomości wyborcze</Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
    </ul>
  </nav>
  </header>
);

export default Header;
