// Write my class(es), **export!

class inHospital {
  constructor(patient, employee) {
      this._patient = patient;
      this._employee = employee;
  }
  get patient() {
      return 'is a Patient';
  }
  get employee() {
      return 'is an Employee';
  }
}
module.exports = inHospital;

/*
class employee {
  constructor(occupation) {
    this._occupation = occupation;
  }
  get occupation() {
    return 1;
  }
}
module.exports = employee;*/
