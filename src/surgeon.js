const Doctor = require("../src/doctor");
class Surgeon extends Doctor {
  constructor(name, idNumber, speciality, operating) {
    super(name, idNumber);
    this._speciality = speciality;
    this._operating = operating;
    this._salary = 120000;
  }
  get surgeon() {
    return this._name;
  }
  get surgeonSalary() {
    return this._salary;
  }
  get speciality() {
    return this._speciality;
  }
  get inSurgery() {
    return this._operating;
  }
}
module.exports = Surgeon;
