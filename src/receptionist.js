const Employee = require("../src/employee");
class Receptionist extends Employee {
  constructor(name, idNumber, phoneCall) {
    super(name, idNumber);
    this._phoneCall = phoneCall;
    this._salary = 45000;
  }
  get receptionist() {
    return this._name;
  }
  get receptionistSalary() {
    return this._salary;
  }
  get phoneCall() {
    return this._phoneCall;
  }
}
module.exports = Receptionist;
