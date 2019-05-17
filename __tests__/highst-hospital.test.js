// Define my requirements, then describe and write my tests.
const Hospital = require("../src/highst-hospital.js");
const patient = new Hospital.isPatient(0, 20, 10);
const employee = new Hospital.isEmployee(0, (getRandomNumber(321, 123)));
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

describe("patient", () => {
  test("should return 'is a patient' status", () => {
    const underTest = patient;
    const actual = underTest.patient;
    expect(typeof actual).toBe("string");
  });

  test("should return patient blood level", () => {
    const underTest = patient;
    const actual = underTest.bloodlevel;
    expect(actual).toEqual(20);
  });

  test("should return patient health level", () => {
    const underTest = patient;
    const actual = underTest.healthlevel;
    expect(actual).toEqual(10);
  });
});

describe("employee", () => {
  test("should return 'is an Employee' status", () => {
    const underTest = employee;
    const actual = underTest.employee;
    expect(typeof actual).toBe("string");
  });

  test("Should return employee ID number.", () => {
    const underTest = employee;
    const actual = underTest.idNumber;
    expect(typeof actual).toBe("number");
    console.log(underTest.idNumber);
  });
});
