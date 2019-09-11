import React, { useContext } from 'react';
import { Card } from 'antd';

import { OddsContext } from '../../contexts/oddsContext';

function Outcome({ outcomeData }) {
  const [isFractal, setValue] = useContext(OddsContext);
  const { num, den, decimal } = outcomeData.price;
  return (
    <Card>
      <h4>{outcomeData.name}</h4>
      <span>{isFractal ? `${num}/${den}` : decimal}</span>
    </Card>
  );
}

export default Outcome;
