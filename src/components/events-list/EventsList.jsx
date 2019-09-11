import React from 'react';
import { List } from 'antd';

import EventsListItem from './EventsListItem';

function EventsList({ dataSource, eventType }) {
  const renderEvent = event => <EventsListItem key={event.eventId} data={event} />;
  return (
    <div>
      <h3>{eventType}</h3>
      <List
        dataSource={dataSource}
        renderItem={renderEvent}
      />
    </div>

  );
}

export default EventsList;
