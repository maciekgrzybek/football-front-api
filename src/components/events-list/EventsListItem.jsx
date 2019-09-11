import React, { useState } from 'react';
import { Link } from '@reach/router';
import { List, Button } from 'antd';
import PropTypes from 'prop-types';

import MarketModal from '../market-modal/MarketModal';
import EventTitle from '../event-title/EventTitle';
import wsClient from '../../services/wsClient';


function EventsListItem({ data }) {
  const [market, setMarket] = useState(null);
  const [outcomes, setOutcomes] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  async function fetchMarket() {
    const event = await wsClient.getEvent(data.eventId);
    const marketData = await wsClient.getMarket(event.data.markets[0]);
    const outComesData = Promise.all(
      marketData.data.outcomes.map((outcome) => {
        return wsClient.getOutcome(outcome);
      }));
    setOutcomes(await outComesData);
    setMarket(marketData.data);
  }

  function handleMarketButtonClick() {
    setModalOpen(true);
    fetchMarket();
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  return (
    <List.Item>
      <EventTitle data={data} />
      <Button type="primary" onClick={handleMarketButtonClick}>See primary market</Button>
      <MarketModal
        visible={modalOpen}
        market={market}
        outcomes={outcomes}
        onCancel={handleModalClose}
      />
    </List.Item>
  );
}

EventsListItem.propTypes = {
  data: PropTypes.object,
};

export default EventsListItem;

