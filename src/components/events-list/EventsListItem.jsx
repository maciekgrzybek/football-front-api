import { useState } from 'react';
import { List, Button } from 'antd';
import PropTypes from 'prop-types';

import Modal from '../modal/Modal';
import Outcome from '../outcome/Outcome';
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

  function renderOutcomes() {
    return outcomes.map((item) => {
      return (
        <Outcome key={item.data.outcomeId + item.data.marketId} outcomeData={item.data.price} />
      );
    });
  }

  return (
    <List.Item>
      <p>
        {data.name}
      </p>
      <Button type="primary" onClick={handleMarketButtonClick}>See primary market</Button>
      <Modal visible={modalOpen}>
        {outcomes ? renderOutcomes() : null}
      </Modal>
    </List.Item>
  );
}

EventsListItem.propTypes = {
  data: PropTypes.object,
};

export default EventsListItem;

