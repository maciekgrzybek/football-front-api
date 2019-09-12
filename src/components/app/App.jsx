import React from 'react';
import 'antd/dist/antd.css';
import { Router } from '@reach/router'

import HomePage from '../../pages/Homepage';
import Event from '../../pages/Event';
import { OddsProvider } from '../../contexts/oddsContext';

import styles from './styles.module.scss';

function App() {
  return (
    <OddsProvider>
      <div className={styles['page-wrapper']}>
        <h1 className={styles['page-header']}>Football betting - live scores</h1>
        <Router>
          <HomePage path="/" />
          <Event path="/event/:eventId" />
        </Router>
      </div>
    </OddsProvider>
  );
}

export default App;
