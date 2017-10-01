const assert = require('assert');
const intensityjs = require('../index.js');
const sample = require('./data/sample.js');

describe('intensityjs', () => {
  it('should return 3.5', () => {
    assert.equal(intensityjs.calc(sample), '3.5');
  });

  it('should throw error when samples num is not same', () => {
    const s = {
      rate: 0.01,
      data: {
        x: [0, 1, 2, 3, 4],
        y: [0, 1, 2, 3, 4],
        z: [0, 1, 2, 3, 4],
      },
    };
    const test = function test() { intensityjs.calc(s); };
    assert.throws(test, Error, 'x and y and z should have same length => x.length: 5, y.length: 6, z.length: 5');
  });

  it('should throw error when samples num is less then 30', () => {
    const s = {
      rate: 0.01,
      data: {
        x: [
          0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
          0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
          0, 1, 2, 3, 4, 0, 1, 2, 3],
        y: [
          0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
          0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
          0, 1, 2, 3, 4, 0, 1, 2, 3],
        z: [
          0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
          0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
          0, 1, 2, 3, 4, 0, 1, 2, 3],
      },
    };
    const test = function test() { intensityjs.calc(s); };
    assert.throws(test, Error, 'x and y and z should have length greater then 30 => x.length: 29, y.length: 29, z.length: 29');
  });
});

