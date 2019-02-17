const berries = Object.entries(require('./images'));

const {
    randomSpan
} = require('../src/components/utils.js');
// const placeholder = "https://via.placeholder.com/500/5c2197/7e57e2?Text=Digital.com"

const points = randomSpan(1, 9);

export class BoardGenerator {
    makeBoard() {

        let board = [];
        let count = 0;

        berries.forEach(berry => {
            
            let {
                1: image,
                0: name
            } = berry;
            
            board.push({
                name,
                image,
                points: points[count],
            });
        });

        return board;
    }
}