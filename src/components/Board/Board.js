import React, { Component } from 'react';
import Card from '../Card/Card';
import { BoardGenerator } from '../../BoardGenerator';
const {shuffle} = require('../utils.js');

const MAX_COLUMNS = 3;

export class Board extends Component {

    constructor(props) {        
        super(props);
        let generator = props.generator || new BoardGenerator();
        this.state = {
            generator,
            score: 0,
            cards: generator.makeBoard()
        };
    }

    onClick(index) {        
        
        let current = this.state.cards[index];
        let {points, image} = current;       
        
        if(current.visited)
        {
            // alert('GAME OVER');
            this.setState({score : 0})
        }

        current.visited = true;
        
        this.setState(state=>
        {
            const list = state.cards;                       
            list[index] = current;            
            return {list}
        });
            
        this.setState({
            score: this.state.score + points,
            cards: shuffle(this.state.cards)
        })
            
        console.log('updated state: ', this.state.cards);        
        console.log('total visited: ', this.state.cards.filter(c=>c.visited).length)
    }

    renderSquare(index, card) {
        let image = card.image;
        console.log('i:', index)
        return <Card 
            image={image} 
            value={index} 
            key={index} 
            onClick={()=>this.onClick(index)}>
        </Card>;
    }

    render() {
        
        const status = `Current score: ${this.state.score}`;
        
        return (
        <div>
            <div className="status">{status}</div>
            {this.arrangeTiles()}
        </div>);
    }

    arrangeTiles() {
        const ROWS = Math.floor(this.state.cards.length / MAX_COLUMNS); //todo: figure out a smart way to get the number of rows w/o going over, i.e. 8 means 3 rows just like 9.
        console.log('max rows allowed: ', ROWS);
        return this.state.cards.map((card, index) => {
            let makeNewRow = index % ROWS + 1;
            console.info('make new row?', makeNewRow);
            return (makeNewRow === ROWS) ?
                <div key={index} className="board-row">
                    {this.renderSquare(index, card)}
                </div>
                : this.renderSquare(index, card);
        });
    }
}
