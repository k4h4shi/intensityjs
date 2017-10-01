# intensityjs
A library for calculate Japanese scale intensity of earth quake.

## Usage
```
const intensityjs = require('intensityjs');

const intensity = intensityjs.calc(
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

console.log(intensity);
```