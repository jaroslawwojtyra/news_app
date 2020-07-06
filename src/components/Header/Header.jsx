import './Header.css'
import React from 'react';
import {Link} from "react-router-dom";
import LangDropdown from './LangDropdown';

const Header = ({ onLangChange }) => (
  <header>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/election">Wiadomości wyborcze</Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
    </ul>
  </nav>
  <div id="LangBar">
    <LangDropdown onLangChange={ onLangChange } />
  </div>
  </header>
);

export default Header;
