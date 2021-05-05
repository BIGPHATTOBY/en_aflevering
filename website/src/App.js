import React, { Component } from 'react';
import Countdown from './countdown.js';
//import logo from './logo.svg';


class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <h2>en_aflevering PoC</h2>
        </div>
        <Countdown date={`${year}-05-06T10:00:00`} />
      </div>
    );
  }
}

export default App;
