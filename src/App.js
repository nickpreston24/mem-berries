import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
// import Grid from './components/Grid/Grid';
// import Grid from './components';

const placeholder = "https://via.placeholder.com/500/5c2197/7e57e2?Text=Digital.com"

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards:Array(9).fill(null),
        }
    }
    renderSquare(i){
        return <Card image={placeholder} value={i}></Card>
    }
    
    render() {
        // const status = 'Next player: X';
    
        return (
          <div>
            {/* <div className="status">{status}</div> */}
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Start</h1>
        <p>lorem ipsum</p>
        <Board/>
        {/* <Grid></Grid> */}
      </div>
    );
  }
}

export default App;