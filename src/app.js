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
Staff.Janitor = new employeeClasses.Janitor(
  "Mike",
  907,
  "This Janitor is currently sweeping."
);
Staff.VampireJanitor = new employeeClasses.VampireJanitor(
  "Savi",
  743,
  "This Janitor is unoccupied."
);
Staff.Receptionist = new employeeClasses.Receptionist(
  "Mark",
  3765,
  "This Receptionist is unoccupied."
);
Staff.Receptionist2 = new employeeClasses.Receptionist(
  "Sally",
  8546,
  "This Receptionist is currently on a phone call."
);
Staff.Nurse = new employeeClasses.Nurse("Susan", 9752, "Viki");
Staff.Doctor = new employeeClasses.Doctor("Brutus", 75340, "Cardio");
Staff.Surgeon = new employeeClasses.Surgeon(
  "Christoph",
  98754,
  "Neurology",
  `This Surgeon is currently in surgery.`
);
Staff.Surgeon2 = new employeeClasses.Surgeon(
  "Alexander",
  94637,
  "OBGYN",
  `This Surgeon is unoccupied.`
);

// .table(Staff.Surgeon); prints exclusively Christoph's table.
console.table(Staff);

var CanAdministerCare = [
  Staff.Nurse,
  Staff.Doctor,
  Staff.Surgeon,
  Staff.Surgeon2
];
console.table(CanAdministerCare);

var CanDrawBlood = [Staff.Nurse, Staff.Doctor, Staff.Surgeon, Staff.Surgeon2];
console.table(CanDrawBlood);

var Care = {};
Care.Patient1 = new patient("Matt");
Care.Patient2 = new patient("Ellie");
Care.Patient3 = new patient("Lauren");
Care.Patient4 = new patient("Ricky");
Care.Patient5 = new patient("Julian");
console.table(Care);
