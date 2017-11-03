# intensityjs　[![Build Status](https://travis-ci.org/k4h4shi/intensityjs.svg?branch=master)](https://travis-ci.org/k4h4shi/intensityjs)
A library for calculate Japanese scale intensity of earth quake.

## Usage
```
const intensityjs = require('intensityjs');

const intensity = intensityjs.calc({
  rate: 0.01,
  data: {
    x: [
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
    y: [
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
    z: [
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
  },
});

console.log(intensity); // => 1.7
```

## License
MIT

## Author
[Kotaro Takahashi@k4h4shi](https://twitter.com/k4h4shi)