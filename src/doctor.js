const Employee = require("../src/employee");
class Doctor extends Employee {
  constructor(name, idNumber, speciality) {
    super(name, idNumber);
    this._speciality = speciality;
    this._salary = 90000;
  }
  get doctor() {
    return `${this._name} is a Doctor`;
  }
  get doctorSalary() {
    return `Doctors make ${this._salary}`;
  }
  get speciality() {
    return this._speciality;
  }
}
module.exports = Doctor;
