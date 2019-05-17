// Write my class(es), **export!

class isPatient {
  constructor(patient, BLOOD_LEVEL, HEALTH_LEVEL) {
    this._patient = patient;
    this._BLOOD_LEVEL = BLOOD_LEVEL;
    this._HEALTH_LEVEL = HEALTH_LEVEL;
  }
  get patient() {
    return "is a Patient";
  }
  get bloodlevel() {
    return this._BLOOD_LEVEL;
  }
  get healthlevel() {
    return this._HEALTH_LEVEL;
  }
}
class isEmployee {
  constructor(employee, idNumber) {
    this._employee = employee;
    this._idNumber = idNumber;
  }
  get employee() {
    return "is an Employee";
  }
  get idNumber() {
    return this._idNumber;
  }
}
module.exports = {
  isPatient: isPatient,
  isEmployee: isEmployee
};
