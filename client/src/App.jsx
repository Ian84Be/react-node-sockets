import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppContext} from './AppContext';
const moment = require('moment');

function App() {
  const [state] = useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {moment(state.time).format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </p>
      </header>
    </div>
  );
}

export default App;
