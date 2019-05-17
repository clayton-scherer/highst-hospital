// Define my requirements, then describe and write my tests.
const Hospital = require("../src/highst-hospital.js");

describe("patient", () => {
  test("should return 'is a patient'.", () => {
    const underTest = new Hospital();
    const actual = underTest.patient;
    expect(actual).toBe('is a Patient');
  });
});

describe("employee", () => {
  test("should return 'is an Employee'.", () => {
    const underTest = new Hospital();
    const actual = underTest.employee;
    expect(actual).toEqual('is an Employee');
  });
});
