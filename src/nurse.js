const Employee = require("../src/employee");
class Nurse extends Employee {
  constructor(name, idNumber, patients) {
    super(name, idNumber);
    this._patients = patients;
    this._salary = 50000;
  }
  get nurse() {
    return `${this._name} is a Nurse`;
  }
  get nurseSalary() {
    return `Nurses make ${this._salary}`;
  }
  get patients() {
    return `This Nurse is caring for ${this._patients} patients`;
  }
}
module.exports = Nurse;
