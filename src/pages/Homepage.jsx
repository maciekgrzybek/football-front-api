import React from 'react';

import Header from '../components/header/Header';
import Main from '../components/main/Main';
import EventsListWrapper from '../components/events-list/EventsListWrapper';

function HomePage() {
  return (
    <>
      <Header title="Footbal events" subTitle="Check out the live scores" backIcon={null}/>
      <Main>
        <EventsListWrapper />
      </Main>
    </>
  );
}

export default HomePage;