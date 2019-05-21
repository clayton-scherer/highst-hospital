// Require statements at head, handle input and ouput of application.
const userInput = require("readline-sync");
const patient = require("../src/hospital-patients");
const employeeClasses = require("../src/hospital-employees");
const chalk = require("chalk");

textColors = [
  (blueText = chalk.blue),
  (redText = chalk.red),
  (greenText = chalk.green)
];

var Staff = {};
Staff.Janitor = new employeeClasses.Janitor("Mike", 907, true);
Staff.VampireJanitor = new employeeClasses.VampireJanitor("Savi", 743, false);
Staff.Receptionist = new employeeClasses.Receptionist("Mark", 3765, false);
Staff.Receptionist2 = new employeeClasses.Receptionist("Sally", 8546, true);
Staff.Nurse = new employeeClasses.Nurse("Susan", 9752, "Viki");
Staff.Doctor = new employeeClasses.Doctor("Brutus", 75340, "Cardio");
Staff.Surgeon = new employeeClasses.Surgeon(
  "Christoph",
  98754,
  "Neurology",
  true
);
Staff.Surgeon2 = new employeeClasses.Surgeon(
  "Alexander",
  94637,
  "OBGYN",
  false
);

// .table(Staff.Surgeon); prints exclusively Christoph's table.
console.table(Staff);
