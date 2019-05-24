// Define my requirements, then describe and write my tests.
// If i can pull class by class from another file.
const Patient = require("../src/patient");
const Doctor = require("../src/doctor");
const Mike = new Doctor("Mike", 123, "Foot");

describe("patient", () => {
  test("should return is a patient status.", () => {
    const underTest = new Patient("Jane");
    const actual = underTest.name;
    expect(actual).toBe("Jane");
  });

  test("should return patient blood level.", () => {
    const underTest = new Patient("Jane");
    const actual = underTest.bloodlevel;
    expect(actual).toEqual(20);
  });

  test("should return patient health level.", () => {
    const underTest = new Patient("Jane");
    const actual = underTest.healthlevel;
    expect(actual).toEqual(10);
  });

  test("Should return patient health plus 10", () => {
    const underTest = new Patient("Jane");
    const actual = Mike.careForPatient(underTest);
    expect(actual).toEqual(20);
  });
});
