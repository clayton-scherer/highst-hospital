// Write my employee class,... *export!
// Add RNG to employee constructor.
class Employee {
  constructor(name, idNumber) {
    this._name = name;
    this._idNumber = idNumber;
  }
  get name() {
    return this._name;
  }
  get idNumber() {
    return this._idNumber;
  }
}

// Functions are named the actions you want to accomplish. Method is a function that lives on an object.

module.exports = Employee;
