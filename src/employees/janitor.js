const Employee = require("./employee");
class Janitor extends Employee {
  constructor(name, idNumber, cleaning) {
    super(name, idNumber);
    this._cleaning = cleaning;
    this._salary = 40000;
  }
  get janitorSalary() {
    return this._salary;
  }
  get janitorCleaning() {
    return this._cleaning;
  }
}
module.exports = Janitor;
