const Surgeon = require("../src/employees/surgeon");

describe("surgeon", () => {
  test("should return is a surgeon status.", () => {
    const underTest = new Surgeon("Mark");
    const actual = underTest.name;
    expect(actual).toBe("Mark");
  });

  test("Should return employee ID number.", () => {
    const underTest = new Surgeon("Mark", 777);
    const actual = underTest.idNumber;
    expect(actual).toEqual(777);
  });

  test("Should return surgeon salary.", () => {
    const underTest = new Surgeon("Mark", 777);
    const actual = underTest.surgeonSalary;
    expect(actual).toEqual(120000);
  });

  test("Should return Surgeons' speciality.", () => {
    const underTest = new Surgeon("Mark", 777, "Cardio");
    const actual = underTest.speciality;
    expect(actual).toBe("Cardio");
  });

  test("should return if surgeon is operating.", () => {
    const underTest = new Surgeon("Mark", 777, "Cardio", false);
    const actual = underTest.inSurgery;
    expect(actual).toBe(false);
  });
});
