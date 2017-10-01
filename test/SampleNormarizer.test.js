const assert = require('assert');
const SampleNormarizer = require('../lib/utils/SampleNormarizer.js');

describe('SampleNormarizer', () => {
  it('should return [0, 1, 2, 0] when was given [0, 1, 2]', () => {
    const normarizer = new SampleNormarizer([0, 1, 2]);
    assert(normarizer.normarize(), [0, 1, 2, 0]);
  });

  it('should return [0, 1, 2, 3, 4, 0, 0, 0] when was given [0, 1, 2, 3, 4]', () => {
    const normarizer = new SampleNormarizer([0, 1, 2, 3, 4]);
    assert(normarizer.normarize(), [0, 1, 2, 3, 4, 0, 0, 0]);
  });
});
