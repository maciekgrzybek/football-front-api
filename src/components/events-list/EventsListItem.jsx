import { useState } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

import { MarketPopover } from '../common';
import wsClient from '../../services/wsClient';


function EventsListItem({ data }) {
  const [market, setMarket] = useState(null);
  const [outcomes, setOutcomes] = useState(null);

  async function fetchMarket() {
    const event = await wsClient.getEvent(data.eventId);
    const marketData = await wsClient.getMarket(event.data.markets[0]);
    const outComesData = Promise.all(marketData.data.outcomes.map(async (outcome) => {
      return wsClient.getOutcome(outcome);
    }));
    setMarket(marketData.data);
    setOutcomes(await outComesData);
  }

  return (
    <List.Item>
      <p>
        {data.name}
      </p>
      <button onClick={fetchMarket}>fetch</button>
      <MarketPopover />
    </List.Item>
  );
}

EventsListItem.propTypes = {
  data: PropTypes.object,
};

export default EventsListItem;
