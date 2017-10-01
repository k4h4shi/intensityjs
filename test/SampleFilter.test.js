const assert = require('assert');
const SampleFilter = require('../lib/utils/SampleFilter.js');

describe('SampleFilter', () => {
  it('shuld return filtered when was given complex array', () => {
    const expected = {
      real: [0,
        0.09827083423031828,
        0.07266785781374539,
        0.09827083423031828],
      imag: [0, 0, -0, -0],
    };

    const filter = new SampleFilter(0.01, {
      real: [0, 1, 2, 0],
      imag: [0, 0, 0, 0],
    });

    assert(filter.filter(), expected);
  });
});
