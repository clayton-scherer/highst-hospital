const Employee = require("../src/employees/employee");

describe("employee", () => {
  test("should return is an Employee status.", () => {
    const underTest = new Employee("John");
    const actual = underTest.name;
    expect(actual).toBe("John");
  });

  test("Should return employee ID number.", () => {
    const underTest = new Employee("John", 5437);
    const actual = underTest.idNumber;
    expect(actual).toEqual(5437);
  });
});
