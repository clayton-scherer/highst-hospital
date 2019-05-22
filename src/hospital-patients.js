// Write my patient class,...
// Make bL and hL constants outside of class Patient.
class Patient {
  constructor(name, bL, hL) {
    this._name = name;
    this._BLOOD_LEVEL = 20;
    this._HEALTH_LEVEL = 10;
  }
  get patient() {
    return `${this._name} is a Patient`;
  }
  get bloodlevel() {
    return this._BLOOD_LEVEL;
  }
  get healthlevel() {
    return this._HEALTH_LEVEL;
  }
}
module.exports = Patient;
