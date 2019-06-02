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
module.exports = Employee;
