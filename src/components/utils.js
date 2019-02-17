const randomInt = (min, max, inclusive = true) => Math.floor(Math.random() * (max - min + 1 + (inclusive ? 1 : 0))) + min;

const randomSpan = (start, stop, step = 1) => Array(Math.ceil((1 + stop - start) / step)).fill(start).map((x, y) => randomInt(start, stop - start) * step);

const fillRandom = (min, max, size = max - min + 1) => Array(size).fill(min).map(_ => randomInt(min, max - min));

const shuffle = (array) => {
    if (!Array.isArray(array)) throw Error('not an array!');
    let m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

module.exports = {
    randomInt,
    randomSpan,
    fillRandom,
    shuffle
}