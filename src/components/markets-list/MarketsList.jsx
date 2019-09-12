import React, { useContext } from 'react';
import { Collapse, Button } from 'antd';

import OutcomeList from '../outcome/OutcomeList';
import { OddsContext } from '../../contexts/oddsContext';
const { Panel } = Collapse;

function MarketsList({ markets }) {
  const [isFractal, setOddsType] = useContext(OddsContext);

  const Header = ({name}) => {
    return (
      <div>
        <h4>{name}</h4>
        <Button onClick={(e) => {
          e.stopPropagation();
          setOddsType(!isFractal)
        }}>Change odds type</Button>
      </div>

    )
  }
  const renderMarkets = () => {
    return markets
      .map(market => {
        return (
          <Panel key={market.data.marketId} header={<Header name={market.data.name}/>}>
            <OutcomeList outcomesIds={market.data.outcomes} />
          </Panel>
        )
      })
  }
  const getMarketIds = (markets) => markets.slice(0, 10).map(item => item.data.marketId);
  return (
    <Collapse defaultActiveKey={getMarketIds(markets)}>
      {renderMarkets()}
    </Collapse>
  );
}

export default MarketsList;