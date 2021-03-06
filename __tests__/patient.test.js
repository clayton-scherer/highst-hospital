const Patient = require("../src/patient");

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
});
