import React, { Component } from 'react';

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = { /** */ }
    }
    // TODO: pass thru props:
    onClick () {
        alert('clicky!')
        console.log('clicky!')
    }
    render() { 
        return ( 
        <div>
            <p>I'm the grid</p>
        </div> );
    }
}
 
// export default Grid;