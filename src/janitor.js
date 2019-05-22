const Employee = require("../src/employee");
class Janitor extends Employee {
  constructor(name, idNumber, cleaning) {
    super(name, idNumber);
    this._cleaning = cleaning;
    this._salary = 40000;
  }
  get janitor() {
    return `${this._name} is a Janitor`;
  }
  get janitorSalary() {
    return `Janitors make ${this._salary}`;
  }
  get janitorCleaning() {
    return this._cleaning;
  }
}
module.exports = Janitor;
