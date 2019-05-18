// Write my employee class,... *export!

// Add RNG to employee constructor.
class Employee {
  constructor(name, idNumber) {
    this._name = name;
    this._idNumber = idNumber;
  }
  get isEmployee() {
    return this._name + " " + "is an Employee";
  }
  get idNumber() {
    return this._idNumber;
  }
}
class Doctor extends Employee {
  constructor(name, idNumber, salary, speciality) {
    super(name, idNumber);
    this._salary = salary;
    this._speciality = speciality;
  }
  get isDoctor() {
    return this._name + " " + "is a Doctor";
  }
  get doctorSalary() {
    return "Doctors make" + " " + this._salary;
  }
  get speciality() {
    return this._speciality;
  }
}
/*
class Nurse extends Employee {
  constructor(name, idNumber, salary, patients) {
    super(name, idNumber, salary);
    this._patients = patients;
  }
  get isNurse() {
    return this._name + " " + "is a Nurse";
  }
  get nurseSalary() {
    return "Nurses make" + " " + this._salary;
  }
  get hasPatients() {
    return this._patients;
  }
}


/*
var Jeff = new Employee('Jeff', 6768);
var Jack = new Employee('Jack', 9837);
var Jill = new Employee('Jill', 2305);


console.log(Jeff, Jack, Jill);
*/
module.exports = Employee;
module.exports = Doctor;
//module.exports = Nurse;
