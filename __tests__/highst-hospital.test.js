// Define my requirements, then describe and write my tests.
// If i can pull class by class from another file.
const employeeClasses = require("../src/hospital-employees");
const patient = require("../src/hospital-patients");

describe("patient", () => {
  test("should return is a patient status.", () => {
    const underTest = new patient("Jane");
    const actual = underTest.patient;
    expect(actual).toBe("Jane is a Patient");
  });

  test("should return patient blood level.", () => {
    const underTest = new patient("Jane");
    const actual = underTest.bloodlevel;
    expect(actual).toEqual(20);
  });

  test("should return patient health level.", () => {
    const underTest = new patient("Jane");
    const actual = underTest.healthlevel;
    expect(actual).toEqual(10);
  });
});

describe("employee", () => {
  test("should return is an Employee status.", () => {
    const underTest = new employeeClasses.Employee("John");
    const actual = underTest.isEmployee;
    expect(actual).toBe("John is an Employee");
  });

  test("Should return employee ID number.", () => {
    const underTest = new employeeClasses.Employee("John", 5437);
    const actual = underTest.idNumber;
    expect(actual).toEqual(5437);
  });
});

describe("Janitor", () => {
  test("should return is a Janitor status.", () => {
    const underTest = new employeeClasses.Janitor("Rick");
    const actual = underTest.isJanitor;
    expect(actual).toBe("Rick is a Janitor");
  });

  test("should return employee Id Number.", () => {
    const underTest = new employeeClasses.Janitor("Rick", 9732);
    const actual = underTest.idNumber;
    expect(actual).toEqual(9732);
  });

  test("Should return Janitor salary.", () => {
    const underTest = new employeeClasses.Janitor("Rick", 9732);
    const actual = underTest.janitorSalary;
    expect(actual).toBe(`Janitors make 40000`);
  });

  test("Should return if Janitor is occupied with sweeping floors.", () => {
    const underTest = new employeeClasses.Janitor("Rick", 9732, false);
    const actual = underTest.janitorCleaning;
    expect(actual).toBe(`This Janitor is unoccupied.`);
  });
});

describe("VampireJanitor", () => {
  test("should return is a VampireJanitor status.", () => {
    const underTest = new employeeClasses.VampireJanitor("James");
    const actual = underTest.isVampireJanitor;
    expect(actual).toBe("James is a VampireJanitor");
  });

  test("should return employee Id Number.", () => {
    const underTest = new employeeClasses.VampireJanitor("James", 6532);
    const actual = underTest.idNumber;
    expect(actual).toEqual(6532);
  });

  test("Should return Janitor salary.", () => {
    const underTest = new employeeClasses.VampireJanitor("James", 6532);
    const actual = underTest.janitorSalary;
    expect(actual).toBe(`Janitors make 40000`);
  });

  test("Should return if Janitor is occupied with sweeping floors.", () => {
    const underTest = new employeeClasses.VampireJanitor("James", 6532, false);
    const actual = underTest.janitorCleaning;
    expect(actual).toBe(`This Janitor is unoccupied.`);
  });
});

describe("Receptionist", () => {
  test("should return is a Receptionist status.", () => {
    const underTest = new employeeClasses.Receptionist("Sally");
    const actual = underTest.isReceptionist;
    expect(actual).toBe("Sally is a Receptionist");
  });

  test("should return Id Number.", () => {
    const underTest = new employeeClasses.Receptionist("Sally", 12345);
    const actual = underTest.idNumber;
    expect(actual).toEqual(12345);
  });

  test("Should return Receptionist salary.", () => {
    const underTest = new employeeClasses.Receptionist("Sally", 12345);
    const actual = underTest.receptionistSalary;
    expect(actual).toBe(`Receptionists make 45000`);
  });

  test("Should return if Receptionist is occupied with a phone call.", () => {
    const underTest = new employeeClasses.Receptionist("Sally", 12345, true);
    const actual = underTest.onPhoneCall;
    expect(actual).toBe(`This Receptionist is currently on a phone call.`);
  });
});

describe("nurse", () => {
  test("should return is a nurse status.", () => {
    const underTest = new employeeClasses.Nurse("Jackie");
    const actual = underTest.isNurse;
    expect(actual).toBe(`Jackie is a Nurse`);
  });

  test("Should return employee ID number.", () => {
    const underTest = new employeeClasses.Nurse("Jackie", 2489);
    const actual = underTest.idNumber;
    expect(actual).toEqual(2489);
  });

  test("Should return Nurse salary.", () => {
    const underTest = new employeeClasses.Nurse("Jackie", 2489);
    const actual = underTest.nurseSalary;
    expect(actual).toBe(`Nurses make 50000`);
  });

  test("Should return Nurse's patients.", () => {
    const underTest = new employeeClasses.Nurse("Jackie", 2489, 3);
    const actual = underTest.hasPatients;
    expect(actual).toBe(`This Nurse is caring for 3 patients`);
  });
});

describe("doctor", () => {
  test("should return is a doctor status.", () => {
    const underTest = new employeeClasses.Doctor("Mike");
    const actual = underTest.isDoctor;
    expect(actual).toBe("Mike is a Doctor");
  });

  test("Should return employee ID number.", () => {
    const underTest = new employeeClasses.Doctor("Mike", 6587);
    const actual = underTest.idNumber;
    expect(actual).toEqual(6587);
  });

  test("Should return doctor salary.", () => {
    const underTest = new employeeClasses.Doctor("Mike", 6587);
    const actual = underTest.doctorSalary;
    expect(actual).toBe(`Doctors make 90000`);
  });

  test("Should return doctor's speciality.", () => {
    const underTest = new employeeClasses.Doctor("Mike", 6587, "Oncology");
    const actual = underTest.speciality;
    expect(actual).toBe("Oncology");
  });
});

describe("surgeon", () => {
  test("should return is a surgeon status.", () => {
    const underTest = new employeeClasses.Surgeon("Mark");
    const actual = underTest.isSurgeon;
    expect(actual).toBe("Mark is a Surgeon");
  });

  test("Should return employee ID number.", () => {
    const underTest = new employeeClasses.Surgeon("Mark", 777);
    const actual = underTest.idNumber;
    expect(actual).toEqual(777);
  });

  test("Should return surgeon salary.", () => {
    const underTest = new employeeClasses.Surgeon("Mark", 777);
    const actual = underTest.surgeonSalary;
    expect(actual).toBe(`Surgeons make 120000`);
  });

  test("Should return Surgeons' speciality.", () => {
    const underTest = new employeeClasses.Surgeon("Mark", 777, "Cardio");
    const actual = underTest.speciality;
    expect(actual).toBe("Cardio");
  });
  test("should return if surgeon is operating.", () => {
    const underTest = new employeeClasses.Surgeon("Mark", 777, "Cardio", false);
    const actual = underTest.inSurgery;
    expect(actual).toBe(`This Surgeon is unoccupied.`);
  });
});
