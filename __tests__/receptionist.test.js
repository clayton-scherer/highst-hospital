const Receptionist = require("../src/employees/receptionist");

describe("Receptionist", () => {
  test("should return is a Receptionist status.", () => {
    const underTest = new Receptionist("Sally");
    const actual = underTest.name;
    expect(actual).toBe("Sally");
  });

  test("should return Id Number.", () => {
    const underTest = new Receptionist("Sally", 12345);
    const actual = underTest.idNumber;
    expect(actual).toEqual(12345);
  });

  test("Should return Receptionist salary.", () => {
    const underTest = new Receptionist("Sally", 12345);
    const actual = underTest.receptionistSalary;
    expect(actual).toEqual(45000);
  });

  test("Should return if Receptionist is occupied with a phone call.", () => {
    const underTest = new Receptionist("Sally", 12345, true);
    const actual = underTest.phoneCall;
    expect(actual).toBe(true);
  });
});
