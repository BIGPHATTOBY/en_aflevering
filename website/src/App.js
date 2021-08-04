import React, { Component } from 'react';
import Countdown from './countdown.js';
import Top from './top.js';
//import logo from './logo.svg';


class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <Top />
        <Countdown date={`${year}-05-20T10:00:00`} />
      </div>
    );
  }
}

export default App;
