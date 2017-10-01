const SampleNormalizer = require('./utils/SampleNormarizer');
const PhasorFilter = require('./utils/SampleFilter');
const fftjs = require('fftjs');

const filterSampleData = function filterSampleData(sampleRate, sampleData) {
  const normalized = new SampleNormalizer(sampleData).normarize();
  const phasors = fftjs.fft(normalized);
  const filtered = new PhasorFilter(sampleRate, phasors).filter();
  const result = fftjs.ifft(filtered).real;
  return result;
};

const composeVector = function composeVector(x, y, z) {
  const vectors = [];

  const len = (x.length + y.length + z.length) / 3;
  for (let i = 0; i < len; i += 1) {
    vectors.push(Math.abs(Math.sqrt((x[i] ** 2) + (y[i] ** 2) + (z[i] ** 2))));
  }
  return vectors;
};

const calcMaxAccel = function calcMaxAccel(sampleRate, vectors) {
  const aLine = 0.3;

  const aIndex = (aLine / sampleRate) - 1;

  return vectors.sort((a, b) => b - a)[aIndex];
};

const calcIntensity = function calcIntensity(maxAccel) {
  return Math.floor(((2 * Math.log10(maxAccel)) + 0.94) * (10 ** 1)) / (10 ** 1);
};

const checkIsDataValid = function checkIsDataValid(data) {
  if (!data) {
    throw new Error(`sample.data should not null or undefined => data: ${data}`);
  }
  if (!data.x || !data.y || !data.z) {
    throw new Error(`x and y and z should not null or undefined => x: ${data.x}, y: ${data.y}, ${data.z}`);
  }

  const sampleTotalLength = data.x.length + data.y.length + data.z.length;

  if (sampleTotalLength % 3 !== 0) {
    throw new Error(`x and y and z should have same length => x.length: ${data.x.length}, y.length: ${data.y.length}, z.length: ${data.z.length}`);
  }

  if (sampleTotalLength / 3 < 30) {
    throw new Error(`x and y and z should have length greater then 30 => x.length: ${data.x.length}, y.length: ${data.y.length}, z.length: ${data.z.length}`);
  }
};

module.exports = {
  calc({ rate, data }) {
    checkIsDataValid(data);

    return (function calc() {
      const filter = function filter(sample) {
        return filterSampleData(rate, sample);
      };
      const vectors = composeVector(filter(data.x), filter(data.y), filter(data.z));
      const maxAccel = calcMaxAccel(rate, vectors);
      const intensity = calcIntensity(maxAccel);
      return intensity;
    }());
  },
};
