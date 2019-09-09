import { Spin, List } from 'antd';

import EventsListItem from './EventsListItem';
import useWebSocket from '../../helpers/useWebSocket';

function EventsList() {
  const events = useWebSocket({
    type: 'getLiveEvents',
    primaryMarkets: false,
  });
  const renderEvent = event => <EventsListItem key={event.eventId} data={event} />;

  if (!events) {
    return <Spin />;
  }
  return (
    <List
      dataSource={events.data}
      renderItem={renderEvent}
    />
  );
}

export default EventsList;
