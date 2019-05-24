const Employee = require("../src/employee");
const Patient = require("../src/patient");
class Doctor extends Employee {
  constructor(name, idNumber, speciality) {
    super(name, idNumber);
    this._speciality = speciality;
    this._salary = 90000;
  }
  get doctorSalary() {
    return this._salary;
  }
  get speciality() {
    return this._speciality;
  }
  careForPatient(patientName) {
    return (Patient._HEALTH_LEVEL += 10);
  }
}
module.exports = Doctor;
