# intensityjs
A library for calculate Japanese scale intensity of earth quake.

## Usage
```
const intensityjs = require('intensityjs');

const i = intensityjs.calc(0.01, {
    x: [0, 1, 2],
    y: [0, 1, 3],
    z: [0, 1, 5]
});

console.log(i);
```