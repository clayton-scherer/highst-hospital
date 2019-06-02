const Employee = require("./employee");
const careForPatient = require("../mixins/care-for-patients");
const drawBlood = require("../mixins/draw-blood");
class Doctor extends Employee {
  constructor(name, idNumber, speciality) {
    super(name, idNumber);
    this._speciality = speciality;
    this._salary = 90000;
    Object.assign(this, careForPatient);
    Object.assign(this, drawBlood);
  }
  get doctorSalary() {
    return this._salary;
  }
  get speciality() {
    return this._speciality;
  }
}
module.exports = Doctor;
