module.exports = class SampleNormarizer {
  constructor(sample) {
    this.sample = sample;
  }

  normarize() {
    const actualLen = this.sample.length;
    const requiredLen = (function calcRatherBigExpOf(n, limit) {
      let expOfTwo = n;

      while (expOfTwo <= limit) expOfTwo *= n;

      return expOfTwo;
    }(2, actualLen));
    const padding = new Array(requiredLen - actualLen).fill(0);
    const normarized = this.sample.concat(padding);
    return normarized;
  }
};
