const Nurse = require("../src/nurse");

describe("nurse", () => {
  test("should return is a nurse status.", () => {
    const underTest = new Nurse("Jackie");
    const actual = underTest.nurse;
    expect(actual).toBe(`Jackie is a Nurse`);
  });

  test("Should return employee ID number.", () => {
    const underTest = new Nurse("Jackie", 2489);
    const actual = underTest.idNumber;
    expect(actual).toEqual(2489);
  });

  test("Should return Nurse salary.", () => {
    const underTest = new Nurse("Jackie", 2489);
    const actual = underTest.nurseSalary;
    expect(actual).toBe(`Nurses make 50000`);
  });

  test("Should return Nurse's patients.", () => {
    const underTest = new Nurse("Jackie", 2489, 3);
    const actual = underTest.patients;
    expect(actual).toBe(`This Nurse is caring for 3 patients`);
  });
});
