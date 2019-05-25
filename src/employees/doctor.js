const Employee = require("./employee");
// const Patient = require("../patient");
class Doctor extends Employee {
  constructor(name, idNumber, speciality) {
    super(name, idNumber);
    this._speciality = speciality;
    this._salary = 90000;
    // Object.assign(this, careForPatient)
  }
  get doctorSalary() {
    return this._salary;
  }
  get speciality() {
    return this._speciality;
  }
  // Create mixin for careForPatient and canDrawBlood
  careForPatient(patientName) {
    return patientName._HEALTH_LEVEL += 10;
  }
}
module.exports = Doctor;
