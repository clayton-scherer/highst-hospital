// Require statements at head, handle input and ouput of application.
const userInput = require("readline-sync");
const patient = require("../src/hospital-patients");
const employeeClasses = require("../src/hospital-employees");
const chalk = require("chalk");

console.log(
  "\nWelcome the the High St Hospitol Data Records System. \nPlease make a selection from below.",
  "\n1) Staff records",
  "\n2) Current Patients checked in",
  "\n3) Current Staff Assigned to care",
  "\n4) Current Staff Collecting Blood for the Red Cross"
);
const userInput = input.question(
  "\nWhat information would you like to access?"
);

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

var CanAdministerCare = [
  Staff.Nurse,
  Staff.Doctor,
  Staff.Surgeon,
  Staff.Surgeon2
];

var CanDrawBlood = [Staff.Nurse, Staff.Doctor, Staff.Surgeon, Staff.Surgeon2];

var Care = {};
Care.Room_210 = new patient("Matt");
Care.Room_381 = new patient("Ellie");
Care.Room_101 = new patient("Lauren");
Care.Room_215 = new patient("Ricky");
Care.Room_341 = new patient("Julian");

console.table(Staff);
console.table(Care);
console.table(CanAdministerCare);
console.table(CanDrawBlood);
