import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import EventTitle from '../components/event-title/EventTitle';
import Header from '../components/header/Header';
import MarketsList from '../components/markets-list/MarketsList';
import Main from '../components/main/Main';
import wsClient from '../services/wsClient';
import sortMarkets from '../helpers/sortMarkets';
import filterDisplayable from '../helpers/filterDisplayable';
import getDate from '../helpers/getDate';

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
    <>
      <Header title={<EventTitle data={eventData} showScore={false} />} subTitle="Check out the live scores"/>
      <Main>
        <>
          <EventTitle data={eventData} />
          {eventData.linkedEventTypeName && (
            <h4>{eventData.linkedEventTypeName}</h4>
          )}
          {eventData.startTime && (
            <h4>{`${getDate(eventData.startTime).date}, ${getDate(eventData.startTime).time}`}</h4>
          )}
          {
            markets && <MarketsList markets={markets} />
          }
        </>
      </Main>
    </>
  );
}

export default Event;
