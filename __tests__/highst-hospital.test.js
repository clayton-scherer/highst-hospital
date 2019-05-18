// Define my requirements, then describe and write my tests.
const employee = require("../src/hospital-employees");
const patient = require("../src/hospital-patients");

describe("patient", () => {
  test("should return 'is a patient' status", () => {
    const underTest = new patient("Jane", 20, 10);
    const actual = underTest.patient();
    expect(actual).toBe("Jane" + " " + "is a Patient");
  });

  test("should return patient blood level", () => {
    const underTest = new patient(0, 20, 10);
    const actual = underTest.bloodlevel();
    expect(actual).toEqual(20);
  });

  test("should return patient health level", () => {
    const underTest = new patient(0, 20, 10);
    const actual = underTest.healthlevel();
    expect(actual).toEqual(10);
  });
});

describe("employee", () => {
  test("should return 'is an Employee' status", () => {
    const underTest = new employee("John", 2532);
    const actual = underTest.employee;
    expect(actual).toBe("John" + " " + "is an Employee");
  });

  test("Should return employee ID number.", () => {
    const underTest = new employee(0, 5437);
    const actual = underTest.idNumber;
    expect(actual).toBe(5437);
  });
});
