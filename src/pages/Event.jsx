import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import wsClient from '../services/wsClient';

function Event({ eventId }) {
  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    wsClient.getEvent(eventId).then(data => setEventData(data));
  }, [eventId]);

  if (!eventData) {
    return <Spin />;
  }
  return (
    <div>Event page: {eventId}</div>
  );
}

export default Event;
