// Write my employee class,... *export!

// Add RNG to employee constructor.
class Employee {
  constructor(name, idNumber) {
    this._name = name;
    this._idNumber = idNumber;
  }
  get isEmployee() {
    return `${this._name} is an Employee`;
  }
  get idNumber() {
    return this._idNumber;
  }
}

class Janitor extends Employee {
  constructor(name, idNumber, cleaning) {
    super(name, idNumber);
    this._cleaning = cleaning;
    this._salary = 40000;
  }
  get isJanitor() {
    return `${this._name} is a Janitor`;
  }
  get janitorSalary() {
    return `Janitors make ${this._salary}`;
  }
  get janitorCleaning() {
    if (this._cleaning === true) {
      return `This Janitor is currently sweeping.`;
    } else {
      return `This Janitor is unoccupied.`;
    }
  }
}

class Receptionist extends Employee {
  constructor(name, idNumber, isOccupied) {
    super(name, idNumber);
    this._isOccupied = isOccupied;
    this._salary = 45000;
  }
  get isReceptionist() {
    return `${this._name} is a Receptionist`;
  }
  get receptionistSalary() {
    return `Receptionists make ${this._salary}`;
  }
  get onPhoneCall() {
    if (this._isOccupied === true) {
      return `This Receptionist is currently on a phone call.`;
    } else {
      return `This Receptionist is unoccupied.`;
    }
  }
}

class Nurse extends Employee {
  constructor(name, idNumber, patients) {
    super(name, idNumber);
    this._patients = patients;
    this._salary = 50000;
  }
  get isNurse() {
    return `${this._name} is a Nurse`;
  }
  get nurseSalary() {
    return `Nurses make ${this._salary}`;
  }
  get hasPatients() {
    return this._patients;
  }
}

class Doctor extends Employee {
  constructor(name, idNumber, speciality) {
    super(name, idNumber);
    this._speciality = speciality;
    this._salary = 90000;
  }
  get isDoctor() {
    return `${this._name} is a Doctor`;
  }
  get doctorSalary() {
    return `Doctors make ${this._salary}`;
  }
  get speciality() {
    return this._speciality;
  }
}

class Surgeon extends Doctor {
  constructor(name, idNumber, speciality, isOperating) {
    super(name, idNumber);
    this._speciality = speciality;
    this._isOperating = isOperating;
    this._salary = 120000;
  }
  get isSurgeon() {
    return `${this._name} is a Surgeon`;
  }
  get surgeonSalary() {
    return `Surgeons make ${this._salary}`;
  }
  get speciality() {
    return this._speciality;
  }
  get inSurgery() {
    return this._isOperating;
  }
}

var Jeff = new Employee("Jeff", 6768);

// Functions are named the actions you want to accomplish. Method is a function that lives on an object.
function changeiD(employee, number) {
  employee._idNumber = number;
}
changeiD(Jeff, 123);

// var Jack = new Employee('Jack', 9837);
// var Jill = new Employee('Jill', 2305);
console.log(Jeff);
module.exports = {
  Employee: Employee,
  Janitor: Janitor,
  Receptionist: Receptionist,
  Nurse: Nurse,
  Doctor: Doctor,
  Surgeon: Surgeon
};
