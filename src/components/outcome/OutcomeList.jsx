import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import Outcome from './Outcome';
import wsClient from '../../services/wsClient';

import styles from './styles.module.scss';

function OutcomeList({ outcomesIds, fullScreen = false }) {
  const [outcomes, setOutcomes] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const outcomesData = await wsClient.getOutcomes(outcomesIds);
      setOutcomes(outcomesData);
    };
    fetchData();
  }, [outcomesIds]);

  const outcomeClass = fullScreen
    ? `${styles['outcome-card']} ${styles['outcome-card-full-screen']}`
    : styles['outcome-card'];

  const renderOutcomes = () => {
    return outcomes.map(item => {
      return (
        <Outcome key={item.data.outcomeId} outcomeData={item.data} className={outcomeClass} />
      )
    })
  }
  if (!outcomes) {
    return <Spin />;
  }
  return (
    <div className={`${styles['outcome-row']}`}>
      {renderOutcomes()}
    </div>
  );
}

export default OutcomeList;
