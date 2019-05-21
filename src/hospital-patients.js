// Write my patient class,...

class Patient {
  constructor(name, bL, hL) {
    this._name = name;
    this._defaultBlood = 20;
    this._BLOOD_LEVEL = bL
    this._defaultHealth = 10;
    this._HEALTH_LEVEL = hL
  }
  get patient() {
    return `${this._name} is a Patient`;
  }
  get bloodlevel() {
    return this._defaultBlood;
  }
  get healthlevel() {
    return this._defaultHealth;
  }
}
module.exports = Patient;
