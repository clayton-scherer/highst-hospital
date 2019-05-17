// Define my requirements, then describe and write my tests.
const patient = require("../src/highst-hospital.js");

describe("patient", () => {
  test("should return blood level of patient", () => {
    const underTest = new patient(20, 10);
    const actual = underTest.BLOOD_LEVEL;
    expect(actual).toEqual(20);
  });

  test("should return health value of patient", () => {
    const underTest = new patient(20, 10);
    const actual = underTest.HEALTH_LEVEL;
    expect(actual).toEqual(10);
  });
});
