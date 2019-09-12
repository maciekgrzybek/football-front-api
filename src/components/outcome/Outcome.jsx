import React, { useContext } from 'react';
import { Card } from 'antd';

import { OddsContext } from '../../contexts/oddsContext';

function Outcome({ outcomeData, className }) {
  const [isFractal] = useContext(OddsContext);
  const { num, den, decimal } = outcomeData.price;
  return (
    <Card className={className}>
      <h4>{outcomeData.name}</h4>
      <span>{isFractal ? `${num}/${den}` : decimal}</span>
    </Card>
  );
}

export default Outcome;
