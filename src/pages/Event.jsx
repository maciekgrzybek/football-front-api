import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import EventScore from '../components/event-score/EventScore';
import EventDate from '../components/event-date/EventDate';
import Header from '../components/header/Header';
import MarketsList from '../components/markets-list/MarketsList';
import Main from '../components/main/Main';
import wsClient from '../services/wsClient';
import sortMarkets from '../helpers/sortMarkets';
import filterDisplayable from '../helpers/filterDisplayable';


function Event({ eventId }) {
  const [eventData, setEventData] = useState(null);
  const [markets, setMarkets] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      const event = await wsClient.getEvent(Number(eventId));
      const marketsData = await wsClient.getMarkets(event.data.markets);
      console.log(marketsData)
      setMarkets(marketsData.filter(filterDisplayable).sort(sortMarkets));
      setEventData(event.data);
    };
    fetchData();
  }, [eventId]);

  if (!eventData) {
    return <Spin />;
  }
  return (
    <>
      <Header
        title={<EventScore data={eventData}showScore={false} />}
        subTitle={eventData.linkedEventTypeName ? eventData.linkedEventTypeName : ''}
        extra={<EventDate date={eventData.startTime}/>}
      />
      <Main>
        <>
          {
            markets && <MarketsList markets={markets} />
          }
        </>
      </Main>
    </>
  );
}

export default Event;
