module.exports = class SampleFilter {
  constructor(sampleRate, phasor) {
    this.sampleRate = sampleRate;
    this.phasor = phasor;
  }

  filter() {
    const len = (this.phasor.real.length + this.phasor.imag.length) / 2;

    const freqList = [];
    for (let i = 0; i < len; i += 1) {
      freqList[i] = i / (len * this.sampleRate);
    }

    for (let i = 0; i < (len / 2) + 1; i += 1) {
      const f = freqList[i];
      if (f >= 0.01) {
        const y = f / 10;

        const filter =
            SampleFilter.hicatFilter(y) *
            SampleFilter.lowcatFilter(f) *
            SampleFilter.periodFilter(f);

        this.phasor.real[i] = this.phasor.real[i] * filter;
        this.phasor.imag[i] = this.phasor.imag[i] * filter;

        this.phasor.real[len - i] = this.phasor.real[i];
        this.phasor.imag[len - i] = -this.phasor.imag[i];
      }
    }
    return this.phasor;
  }

  static hicatFilter(y) {
    return 1 / Math.sqrt(1 +
            ((0.694 * y) ** 2) +
            ((0.241 * y) ** 4) +
            ((0.0557 * y) ** 6) +
            ((0.009664 * y) ** 8) +
            ((0.00134 * y) ** 10) +
            ((0.000155 * y) ** 12));
  }

  static lowcatFilter(f) {
    return Math.sqrt(1 - Math.exp(((-(f / 0.5)) ** 3)));
  }

  static periodFilter(f) {
    return Math.sqrt(1 / f);
  }
};
