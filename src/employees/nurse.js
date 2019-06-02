const Employee = require("./employee");
const careForPatient = require("../mixins/careForPatients");
const drawBlood = require("../mixins/drawBlood");
class Nurse extends Employee {
  constructor(name, idNumber, patients) {
    super(name, idNumber);
    this._patients = patients;
    this._salary = 50000;
    Object.assign(this, careForPatient);
    Object.assign(this, drawBlood);
  }
  get nurseSalary() {
    return this._salary;
  }
  get patients() {
    return this._patients;
  }
}
module.exports = Nurse;
