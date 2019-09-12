import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import EventTitle from '../components/event-title/EventTitle';
import MarketsList from '../components/markets-list/MarketsList';
import wsClient from '../services/wsClient';
import sortMarkets from '../helpers/sortMarkets';
import filterDisplayable from '../helpers/filterDisplayable';

function Event({ eventId }) {
  const [eventData, setEventData] = useState(null);
  const [markets, setMarkets] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const event = await wsClient.getEvent(Number(eventId));
      const marketsData = Promise.all(
        event.data.markets.map((market) => {
          return wsClient.getMarket(market);
        }))
        .then(data => data.filter(filterDisplayable).sort(sortMarkets));
      
      setMarkets(await marketsData);
      setEventData(event.data)
    };
    fetchData();
  }, [eventId]);

  if (!eventData) {
    return <Spin />;
  }
  return (
    <div>
      <EventTitle data={eventData}/>
      {eventData.linkedEventTypeName && (
        <h4>{eventData.linkedEventTypeName}</h4>
      )}
      {eventData.startTime && (
        <h4>{eventData.startTime}</h4>
      )}
      {
        markets && <MarketsList markets={markets} />
      }
    </div>
  );
}

export default Event;
