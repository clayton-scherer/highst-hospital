const Nurse = require("../src/employees/nurse");
const Patient = require("../src/patient");

describe("nurse", () => {
  test("should return is a nurse status.", () => {
    const underTest = new Nurse("Jackie");
    const actual = underTest.name;
    expect(actual).toBe(`Jackie`);
  });

  test("Should return employee ID number.", () => {
    const underTest = new Nurse("Jackie", 2489);
    const actual = underTest.idNumber;
    expect(actual).toEqual(2489);
  });

  test("Should return Nurse salary.", () => {
    const underTest = new Nurse("Jackie", 2489);
    const actual = underTest.nurseSalary;
    expect(actual).toEqual(50000);
  });

  test("Should return Nurse's patients.", () => {
    const underTest = new Nurse("Jackie", 2489);
    const Mark = new Patient("Mark");
    underTest.patients.push(Mark);
    const actual = underTest.patients;
    expect(actual).toStrictEqual([Mark]);
  });
});
