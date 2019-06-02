const Employee = require("./employee");
const careForPatient = require("../mixins/care-for-patients");
const drawBlood = require("../mixins/draw-blood");
class Nurse extends Employee {
  constructor(name, idNumber, patients = []) {
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
