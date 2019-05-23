const Janitor = require("../src/janitor");

describe("Janitor", () => {
  test("should return is a Janitor status.", () => {
    const underTest = new Janitor("Rick");
    const actual = underTest.name;
    expect(actual).toBe("Rick");
  });

  test("should return employee Id Number.", () => {
    const underTest = new Janitor("Rick", 9732);
    const actual = underTest.idNumber;
    expect(actual).toEqual(9732);
  });

  test("Should return Janitor salary.", () => {
    const underTest = new Janitor("Rick", 9732);
    const actual = underTest.janitorSalary;
    expect(actual).toEqual(40000);
  });

  test("Should return if Janitor is occupied with sweeping floors.", () => {
    const underTest = new Janitor("Rick", 9732, false);
    const actual = underTest.janitorCleaning;
    expect(actual).toBe(false);
  });
});
