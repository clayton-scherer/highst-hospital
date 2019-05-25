const Employee = require("./employee");
class Nurse extends Employee {
  constructor(name, idNumber, patients) {
    super(name, idNumber);
    this._patients = patients;
    this._salary = 50000;
  }
  get nurseSalary() {
    return this._salary;
  }
  get patients() {
    return this._patients;
  }
}
module.exports = Nurse;
