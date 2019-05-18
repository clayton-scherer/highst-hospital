// Write my employee class,... *export!

// Add RNG to employee constructor.
class Employee {
  constructor(name, idNumber) {
    this._name = name;
    this._idNumber = idNumber;
  }
  get employee() {
    return this._name + " " + "is an Employee";
  }
  get idNumber() {
    return this._idNumber;
  }
}
module.exports = Employee;
