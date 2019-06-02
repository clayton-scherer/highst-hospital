const Doctor = require("../employees/doctor");
const careForPatient = require("../mixins/care-for-patients");
const drawBlood = require("../mixins/draw-blood");
class Surgeon extends Doctor {
  constructor(name, idNumber, speciality, operating) {
    super(name, idNumber);
    this._speciality = speciality;
    this._operating = operating;
    this._salary = 120000;
    Object.assign(this, careForPatient);
    Object.assign(this, drawBlood);
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
