import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import Outcome from './Outcome';
import wsClient from '../../services/wsClient';
import filterDisplayable from '../../helpers/filterDisplayable';

import styles from './styles.module.scss';

function OutcomeList({ outcomesIds, fullScreen = false }) {
  const [outcomes, setOutcomes] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const outcomesData = await wsClient.getOutcomes(outcomesIds);
      setOutcomes(outcomesData.filter(filterDisplayable));
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
    return <Spin size="large"/>;
  }
  return (
    <div className={`${styles['outcome-row']}`}>
      {renderOutcomes()}
    </div>
  );
}

OutcomeList.propTypes = {
  outcomesIds: PropTypes.array,
  fullScreen: PropTypes.bool,
};

export default OutcomeList;
