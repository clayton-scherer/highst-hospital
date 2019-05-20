// Define my requirements, then describe and write my tests.
// If i can pull class by class from another file.
const employeeClasses = require("../src/hospital-employees");
const patient = require("../src/hospital-patients");

describe("patient", () => {
  test("should return 'is a patient' status", () => {
    const underTest = new patient("Jane");
    const actual = underTest.patient;
    expect(actual).toBe("Jane is a Patient");
  });

  test("should return patient blood level", () => {
    const underTest = new patient("Jane");
    const actual = underTest.bloodlevel;
    expect(actual).toEqual(20);
  });

  test("should return patient health level", () => {
    const underTest = new patient("Jane");
    const actual = underTest.healthlevel;
    expect(actual).toEqual(10);
  });
});

describe("employee", () => {
  test("should return 'is an Employee' status", () => {
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

describe("doctor", () => {
  test("should return 'is a doctor' status", () => {
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
    const underTest = new employeeClasses.Doctor("Mike", 123);
    const actual = underTest.doctorSalary;
    expect(actual).toBe(`Doctors make 90000`);
  });

  test("Should return doctor's speciality.", () => {
    const underTest = new employeeClasses.Doctor("Mike", 123, "Oncology");
    const actual = underTest.speciality;
    expect(actual).toBe("Oncology");
  });
});

describe("surgeon", () => {
  test("should return 'is a surgeon' status", () => {
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
  test('should return boolean for "if operating".', () => {
    const underTest = new employeeClasses.Surgeon("Mark", 777, "Cardio", false);
    const actual = underTest.isOperating;
    expect(actual).toBe(false);
  });
});

describe("nurse", () => {
  test("should return 'is a nurse' status", () => {
    const underTest = new employeeClasses.Nurse("Jackie");
    const actual = underTest.isNurse;
    expect(actual).toBe(`Jackie is a Nurse`);
  });

  test("Should return employee ID number.", () => {
    const underTest = new employeeClasses.Nurse("Jackie", 2489);
    const actual = underTest.idNumber;
    expect(actual).toEqual(2489);
  });

  test("Should return Jackies' salary.", () => {
    const underTest = new employeeClasses.Nurse("Jackie", 2489);
    const actual = underTest.nurseSalary;
    expect(actual).toBe(`Nurses make 50000`);
  });

  test("Should return Jackies' patients.", () => {
    const underTest = new employeeClasses.Nurse("Jackie", 2489, 3);
    const actual = underTest.hasPatients;
    expect(actual).toEqual(3);
  });
});
