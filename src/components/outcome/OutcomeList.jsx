import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import Outcome from './Outcome';
import wsClient from '../../services/wsClient';

function OutcomeList({ outcomesIds }) {
  const [outcomes, setOutcomes] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const outcomesData = Promise.all(
        outcomesIds.map((market) => {
          return wsClient.getOutcome(market);
        }))
      
      setOutcomes(await outcomesData);
    };
    fetchData();
  }, [outcomesIds]);

  const renderOutcomes = () => {
    return outcomes.map(item => {
      return (
        <Outcome outcomeData={item.data} />
      )
    })
  }
  if (!outcomes) {
    return <Spin />;
  }
  return (
    renderOutcomes()
  );
}

export default OutcomeList;
