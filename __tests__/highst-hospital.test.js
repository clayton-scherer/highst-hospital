// Define my requirements, then describe and write my tests.
const employee = require("../src/hospital-employees");
const patient = require("../src/hospital-patients");

describe("patient", () => {
  test("should return 'is a patient' status", () => {
    const underTest = new patient("Jane", 20, 10);
    const actual = underTest.patient;
    expect(actual).toBe("Jane" + " " + "is a Patient");
  });

  test("should return patient blood level", () => {
    const underTest = new patient(0, 20, 10);
    const actual = underTest.bloodlevel;
    expect(actual).toEqual(20);
  });

  test("should return patient health level", () => {
    const underTest = new patient(0, 20, 10);
    const actual = underTest.healthlevel;
    expect(actual).toEqual(10);
  });
});

describe("employee", () => {
  test("should return 'is an Employee' status", () => {
    const underTest = new employee("John", 2532);
    const actual = underTest.isEmployee;
    expect(actual).toBe("John" + " " + "is an Employee");
  });

  test("Should return employee ID number.", () => {
    const underTest = new employee("Shane", 5437);
    const actual = underTest.idNumber;
    expect(actual).toEqual(5437);
  });
});

describe("doctor", () => {
  test("should return 'is a doctor' status", () => {
    const underTest = new employee("Mike");
    const actual = underTest.isDoctor;
    expect(actual).toBe("Mike" + " " + "is a Doctor");
  });

  test("Should return employee ID number.", () => {
    const underTest = new employee("Mike", 123);
    const actual = underTest.idNumber;
    expect(actual).toEqual(123);
  });

  test("Should return Mikes' salary.", () => {
    const underTest = new employee("Mike", 123, "90,000");
    const actual = underTest.doctorSalary;
    expect(actual).toBe("Doctors make" + " " + "90,000");
  });

  test("Should return Mikes' speciality.", () => {
    const underTest = new employee("Mike", 123, "90,000", "Oncology");
    const actual = underTest.speciality;
    expect(actual).toBe("Oncology");
  });
});
/*
describe("nurse", () => {
  test("should return 'is a nurse' status", () => {
    const underTest = new employee("Jackie");
    const actual = underTest.isNurse;
    expect(actual).toBe("Jackie" + " " + "is a Nurse");
  });

  test("Should return employee ID number.", () => {
    const underTest = new employee("Jackie", 2489);
    const actual = underTest.idNumber;
    expect(actual).toEqual(2489);
  });

  test("Should return Jackies' salary.", () => {
    const underTest = new employee("Jackie", 2489, "50,000");
    const actual = underTest.nurseSalary;
    expect(actual).toBe("Nurses make" + " " + "50,000");
  });

  test("Should return Jackies' patients.", () => {
    const underTest = new employee("Jackie", 2489, "50,000", "Jenn");
    const actual = underTest.hasPatients;
    expect(actual).toBe("Jenn");
  });
});
*/