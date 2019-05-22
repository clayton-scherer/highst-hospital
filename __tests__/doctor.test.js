const Doctor = require("../src/doctor");
describe("doctor", () => {
  test("should return is a doctor status.", () => {
    const underTest = new Doctor("Mike");
    const actual = underTest.doctor;
    expect(actual).toBe("Mike is a Doctor");
  });

  test("Should return employee ID number.", () => {
    const underTest = new Doctor("Mike", 6587);
    const actual = underTest.idNumber;
    expect(actual).toEqual(6587);
  });

  test("Should return doctor salary.", () => {
    const underTest = new Doctor("Mike", 6587);
    const actual = underTest.doctorSalary;
    expect(actual).toBe(`Doctors make 90000`);
  });

  test("Should return doctor's speciality.", () => {
    const underTest = new Doctor("Mike", 6587, "Oncology");
    const actual = underTest.speciality;
    expect(actual).toBe("Oncology");
  });
});
