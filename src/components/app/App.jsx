import React from 'react';
import 'antd/dist/antd.css';
import { Link, Router } from '@reach/router'

import HomePage from '../../pages/Homepage';
import Event from '../../pages/Event';
import Header from '../header/Header';
import { OddsProvider } from '../../contexts/oddsContext';

import './App.css';


function App() {
  return (
    <OddsProvider>
      <div className="page-wrapper">
        <Header />
        <Router>
          <HomePage path="/" />
          <Event path="/event/:eventId" />
        </Router>
      </div>
    </OddsProvider>
  );
}

export default App;
