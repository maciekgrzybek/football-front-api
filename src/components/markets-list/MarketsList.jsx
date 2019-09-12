import React from 'react';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';

import OutcomeList from '../outcome/OutcomeList';
import MarketHeader from './MarketHeader';

const { Panel } = Collapse;

function MarketsList({ markets }) {
  const renderMarkets = () => {
    return markets
      .map(market => {
        return (
          <Panel key={market.data.marketId} header={<MarketHeader name={market.data.name}/>}>
            <OutcomeList outcomesIds={market.data.outcomes} fullScreen/>
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

MarketsList.propTypes = {
  markets: PropTypes.array,
};

export default MarketsList;