import React, { Component } from 'react';
import Card from '../Card/Card';
import { BoardGenerator } from '../../BoardGenerator';
import './style.css';

const { shuffle } = require('../utils.js');
const MAX_COLUMNS = 3;

export class Board extends Component {

    constructor(props) {        
        super(props);                
        this.generator = props.generator || new BoardGenerator();        
        this.state = {
            score: 0,
            topScore: 0,
            cards: this.generator.makeBoard()
        };

        shuffle(this.state.cards);
    }

    reset() {
        console.log('resetting game!');
        this.setState({score:0, cards: this.generator.makeBoard()})
        shuffle(this.state.cards);
    }

    onClick(index) {        
        
        let current = this.state.cards[index];
        let {points} = current;       
        
        if(current.visited)
        {      
            let newScore = this.state.score;
            if(newScore > this.state.topScore || 0)
                this.setState({topScore: newScore});
            this.setState({score: 0});
            this.reset();
            return;
        }

        current.visited = true;
        
        this.setState(state=>
        {
            const list = state.cards;
            state.score = state.score + points;
            return {list}
        });
        
        shuffle(this.state.cards);
        
        let visited = this.state.cards.filter(c=>c.visited).length;
        console.log('total visited: ', visited)
    }

    renderSquare(index, card) {
        let image = card.image;
        return <Card 
            image={image} 
            value={index} 
            key={index} 
            onClick={()=>this.onClick(index)}>
        </Card>;
    }
    
    render() {
        return (
        <div>
            <h2 className="status">{`Current Score: ${this.state.score}\n Top Score: ${this.state.topScore}`}</h2>
            {this.arrangeTiles()}
        </div>);
    }

    arrangeTiles() {
        const ROWS = Math.floor(this.state.cards.length / MAX_COLUMNS); //todo: figure out a smart way to get the number of rows w/o going over, i.e. 8 means 3 rows just like 9.
        console.log('max rows allowed: ', ROWS);
        return this.state.cards.map((card, index) => {
            return this.renderSquare(index, card);
            // let makeNewRow = index % ROWS + 1;
            // console.info('make new row?', makeNewRow);
            // return (index % ROWS == 0) ?
            //     <div key={index} className="board-row">
            //         {this.renderSquare(index, card)}
            //     </div>
            //     : this.renderSquare(index, card);
        });
    }
}
