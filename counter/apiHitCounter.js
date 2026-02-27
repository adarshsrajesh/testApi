let apiHitCount = 0;

module.exports = {
  increment() {
    apiHitCount++;
  },
  get() {
    return apiHitCount;
  },
  reset() {
    apiHitCount = 0;
  }
};
