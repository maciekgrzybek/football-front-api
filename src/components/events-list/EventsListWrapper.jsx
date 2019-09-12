import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import EventsList from './EventsList';
import sortEvents from '../../helpers/sortEvents';
import wsClient from '../../services/wsClient';
import filterDisplayable from '../../helpers/filterDisplayable';

function EventsListWrapper() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const data = await wsClient.getEvents();
      setEvents(data.data.filter(filterDisplayable));
    };
    fetchData();
  }, []);

  const renederLists = () => {
    const sortedEvents = sortEvents(events);
    return Object.keys(sortedEvents).map((event) => {
      return (
        <EventsList eventType={event} key={event} dataSource={sortedEvents[event]} />
      );
    });
  };

  if (!events) {
    return <Spin />;
  }
  return renederLists();
}

export default EventsListWrapper;
