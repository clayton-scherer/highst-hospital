const Doctor = require("../src/employees/doctor");
const Patient = require("../src/patient");
describe("doctor", () => {
  test("should return is a doctor status.", () => {
    const underTest = new Doctor("Mike");
    const actual = underTest.name;
    expect(actual).toBe("Mike");
  });

  test("Should return employee ID number.", () => {
    const underTest = new Doctor("Mike", 6587);
    const actual = underTest.idNumber;
    expect(actual).toEqual(6587);
  });

  test("Should return doctor salary.", () => {
    const underTest = new Doctor("Mike", 6587);
    const actual = underTest.doctorSalary;
    expect(actual).toEqual(90000);
  });

  test("Should return doctor's speciality.", () => {
    const underTest = new Doctor("Mike", 6587, "Oncology");
    const actual = underTest.speciality;
    expect(actual).toBe("Oncology");
  });

  test("Should return patient blood minus 3", () => {
    const underTest = new Doctor("Mike", 6587, "Oncology");
    const Jane = new Patient("Jane");
    const actual = underTest.drawBlood(Jane);
    expect(actual).toBe(17);
  });

  test("Should return patient health plus 6", () => {
    const underTest = new Doctor("Mike", 6587, "Oncology");
    const Jane = new Patient("Jane");
    const actual = underTest.careForPatient(Jane);
    expect(actual).toEqual(16);
  });
});
