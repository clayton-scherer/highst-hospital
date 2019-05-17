// Write my class(es), **export!

class patient {
  constructor(BLOOD_LEVEL, HEALTH_LEVEL) {
    this._BLOOD_LEVEL = BLOOD_LEVEL;
    this._HEALTH_LEVEL = HEALTH_LEVEL;
  }
  get BLOOD_LEVEL() {
    return this._BLOOD_LEVEL;
  }
  get HEALTH_LEVEL() {
    return this._HEALTH_LEVEL;
  }
}
module.exports = patient;
