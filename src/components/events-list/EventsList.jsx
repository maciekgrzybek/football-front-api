import React from 'react';
import { List } from 'antd';

import EventsListItem from './EventsListItem';

import styles from './styles.module.scss'

function EventsList({ dataSource, eventType }) {
  const renderEvent = event => <EventsListItem key={event.eventId} data={event} />;
  return (
    <div>
      <div className={styles['league-name-wrapper']}>
        <h3 className={styles['league-name']}>
          {eventType === 'Football Live' ? 'Other leagues / tournaments' : eventType}
        </h3>
      </div>
      <List
        className={styles['event-list']}
        dataSource={dataSource}
        bordered={true}
        renderItem={renderEvent}
      />
    </div>

  );
}

export default EventsList;
