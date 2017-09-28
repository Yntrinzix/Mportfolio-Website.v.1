import React, { Component } from 'react';
import './0-css/styles.css';
import Header from './Header/0_Header';
import Content from './Content/0_Content';
import Screen from './Screen/0_Screen';

class App extends Component {
  render() {
    return (
      <div>
        <Screen/>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
