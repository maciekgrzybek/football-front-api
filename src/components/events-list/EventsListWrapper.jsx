import { useRef } from 'react';
import { Spin } from 'antd';

import EventsList from './EventsList';
import useWebSocket from '../../helpers/useWebSocket';
import sortEvents from '../../helpers/sortEvents';

function EventsListWrapper() {
  const events = useWebSocket({
    type: 'getLiveEvents',
    primaryMarkets: false,
  });

  const renederLists = () => {
    const sortedEvents = sortEvents(events)
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
