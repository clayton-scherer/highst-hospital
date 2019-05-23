// Write my patient class,...

class Patient {
  constructor(name) {
    this._name = name;
    this._BLOOD_LEVEL = 20;
    this._HEALTH_LEVEL = 10;
  }
  get name() {
    return this._name;
  }
  get bloodlevel() {
    return this._BLOOD_LEVEL;
  }
  get healthlevel() {
    return this._HEALTH_LEVEL;
  }
}
module.exports = Patient;
