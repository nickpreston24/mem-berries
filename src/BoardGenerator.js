const {
    randomSpan
} = require('../src/components/utils.js')
const placeholder = '/img/blackberries/container-of-blackberries.jpg'
const subdir = '/img';
// const placeholder = "https://via.placeholder.com/500/5c2197/7e57e2?Text=Digital.com"
// console.log('placeholder', placeholder)
const berries = require('./data/berries.json');
// console.log('berry data:', berries);

const points = randomSpan(1, 9);
// const ROWS = 3;
// const COLS = 3;

export class BoardGenerator {

    makeBoard() {
        let board = [];
        let count = 0;

        berries.forEach(berry => {
            // console.log('berry: ', element)

            let {
                name,
                image,
                dirname
            } = berry;

            let image_src = subdir + '/' + dirname + '/' + image;
            
            board.push({
                name,
                image: image_src,
                points: points[count],
                // row: i,
                // col: j
            });
        });

        return board;
    }

    // makeBoard() {
    //     let arr = [];
    //     let count = 0;
    //     for (var i = 0; i < ROWS; i++) {
    //         for (var j = 0; j < COLS; j++) {
    //             arr.push({ 
    //                 image: placeholder, 
    //                 points: points[count],
    //                 row: i,
    //                 col: j
    //             });
    //             count++
    //         }
    //     }
    //     return arr;
    // }

}