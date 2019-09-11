import React from 'react';
import Main from '../components/main/Main';
import EventsListWrapper from '../components//events-list/EventsListWrapper';

function HomePage() {
  return (
    <Main>
      <EventsListWrapper />
    </Main>
  );
}

export default HomePage;