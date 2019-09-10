import 'antd/dist/antd.css';

import Header from '../header/Header';
import Main from '../main/Main';
import EventsListWrapper from '../events-list/EventsListWrapper';

import './App.css';


function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Main>
        <EventsListWrapper />
      </Main>
    </div>
  );
}

export default App;
