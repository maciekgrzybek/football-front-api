import 'antd/dist/antd.css';

import Header from '../header/Header';
import Main from '../main/Main';
import EventsList from '../events-list/EventsList';

import './App.css';


function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Main>
        <EventsList />
      </Main>
    </div>
  );
}

export default App;
