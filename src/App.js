import React, { Component } from 'react';
import './App.css';
import { Board } from './components/Board/Board';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Click the Berries!</h1>
        <Board/>
      </div>
    );
  }
}

export default App;