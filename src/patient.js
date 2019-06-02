class Patient {
  constructor(name, BLOOD_LEVEL = 20, HEALTH_LEVEL = 10) {
    this._name = name;
    this._BLOOD_LEVEL = BLOOD_LEVEL;
    this._HEALTH_LEVEL = HEALTH_LEVEL;
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
  tick() {
    (this._HEALTH_LEVEL += 4), (this._BLOOD_LEVEL += 4);
    if (this._HEALTH_LEVEL >= 100) this._HEALTH_LEVEL = 100;
    if (this._BLOOD_LEVEL >= 100) this._BLOOD_LEVEL = 100;
  }
}
module.exports = Patient;
