import React, {useState, useEffect} from 'react';
import socketIoClient from 'socket.io-client';
import logo from './logo.svg';
import './App.css';
const moment = require('moment');

function App() {
    const [state, setState] = useState(new Date());
    const api_url = 'http://localhost:5000';

    useEffect(() => {
        const socket = socketIoClient(api_url);
        socket.on('FromAPI', (data) => {
            setState(data);
        })

        return () => socket.disconnect();
    }, [setState]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {moment(state).format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </p>
      </header>
    </div>
  );
}

export default App;
