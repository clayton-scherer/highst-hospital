const Receptionist = require("../src/receptionist");

describe("Receptionist", () => {
  test("should return is a Receptionist status.", () => {
    const underTest = new Receptionist("Sally");
    const actual = underTest.receptionist;
    expect(actual).toBe("Sally is a Receptionist");
  });

  test("should return Id Number.", () => {
    const underTest = new Receptionist("Sally", 12345);
    const actual = underTest.idNumber;
    expect(actual).toEqual(12345);
  });

  test("Should return Receptionist salary.", () => {
    const underTest = new Receptionist("Sally", 12345);
    const actual = underTest.receptionistSalary;
    expect(actual).toBe(`Receptionists make 45000`);
  });

  test("Should return if Receptionist is occupied with a phone call.", () => {
    const underTest = new Receptionist("Sally", 12345, true);
    const actual = underTest.phoneCall;
    expect(actual).toBe(true);
  });
});
