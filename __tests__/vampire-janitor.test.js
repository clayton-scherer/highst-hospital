const VampireJanitor = require("../src/vampire-janitor");

describe("VampireJanitor", () => {
  test("should return is a VampireJanitor status.", () => {
    const underTest = new VampireJanitor("James");
    const actual = underTest.vampireJanitor;
    expect(actual).toBe("James is a VampireJanitor");
  });

  test("should return employee Id Number.", () => {
    const underTest = new VampireJanitor("James", 6532);
    const actual = underTest.idNumber;
    expect(actual).toEqual(6532);
  });

  test("Should return Janitor salary.", () => {
    const underTest = new VampireJanitor("James", 6532);
    const actual = underTest.janitorSalary;
    expect(actual).toBe(`Janitors make 40000`);
  });

  test("Should return if Janitor is occupied with sweeping floors.", () => {
    const underTest = new VampireJanitor("James", 6532, true);
    const actual = underTest.janitorCleaning;
    expect(actual).toBe(true);
  });
});
