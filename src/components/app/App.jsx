import React from 'react';
import 'antd/dist/antd.css';

import Header from '../header/Header';
import Main from '../main/Main';
import EventsListWrapper from '../events-list/EventsListWrapper';
import { OddsProvider } from '../../contexts/oddsContext';

import './App.css';


function App() {
  return (
    <OddsProvider>
      <div className="page-wrapper">
        <Header />
        <Main>
          <EventsListWrapper />
        </Main>
      </div>
    </OddsProvider>
  );
}

export default App;
