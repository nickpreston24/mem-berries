const berries = Object.entries(require('./images'));
console.log('all:', berries);

const {
    randomSpan
} = require('../src/components/utils.js');
// const placeholder = "https://via.placeholder.com/500/5c2197/7e57e2?Text=Digital.com"
// const berries = require('./data/berries.json');
// console.log('berry data:', berries);

const points = randomSpan(1, 9);

export class BoardGenerator {
    makeBoard() {

        let board = [];
        let count = 0;

        berries.forEach(berry => {
            // let {
            //     name,
            //     image,
            //     dirname
            // } = berry;
            console.log('berry: ', berry)
            // console.log('image: ', image);
            // // let image_src = subdir + '/' + dirname + '/' + image;
            // // image_src = blueberry;
            let image = berry[1];
            console.log('image full path: ', image);
            board.push({
            	image,
            	points: points[count],
            });
        });

        return board;
    }
}