// Require statements at head, handle input and ouput of application.
const input = require("readline-sync");
const chalk = require("chalk");
const Patient = require("../src/patient");
const Employee = require("../src/employee");
const Janitor = require("../src/janitor");
const VampireJanitor = require("../src/vampire-janitor");
const Receptionist = require("../src/receptionist");
const Nurse = require("../src/nurse");
const Doctor = require("../src/doctor");
const Surgeon = require("../src/surgeon");

textColors = [
  (blueText = chalk.blue),
  (redText = chalk.red),
  (greenText = chalk.green)
];
console.log(
  `\nWelcome to High St Hospitals' department of Records and Data.
   \nWe pride ourselves on having a sleek yet functional data management system.`
);

const patients = {};
patients.Room_101 = new Patient("Matt");
patients.Room_102 = new Patient("Ellie");
patients.Room_103 = new Patient("Lauren");

const Staff = {};
Staff.Employee = new Employee("Mack", 000);
Staff.Janitor = new Janitor("Mike", 907, true);
Staff.Vampire_Janitor = new VampireJanitor("Savi", 743, false);
Staff.Receptionist = new Receptionist("Mark", 3765, false);
Staff.Head_Receptionist = new Receptionist("Sally", 8546, true);
Staff.Nurse = new Nurse("Susan", 9752, patients.Room_102._name);
Staff.Floor_Nurse = new Nurse("Mary", 5197, patients.Room_103._name);
Staff.Charge_Nurse = new Nurse("Bonnie", 4913, patients.Room_101._name);
Staff.Doctor = new Doctor("Brutus", 75340, "Cardio");
Staff.Surgeon = new Surgeon("Alexander", 94637, "OBGYN", false);
Staff.Neuro_Surgeon = new Surgeon("Christoph", 98754, "Neurology", true);
// console.table(Staff.Surgeon); prints exclusively Alexanders's table.

const canAdministerCare = [
  Staff.Nurse,
  Staff.Floor_Nurse,
  Staff.Charge_Nurse,
  Staff.Doctor,
  Staff.Surgeon,
  Staff.Neuro_Surgeon
];

const canDrawBlood = [
  Staff.Nurse,
  Staff.Floor_Nurse,
  Staff.Charge_Nurse,
  Staff.Doctor,
  Staff.Surgeon,
  Staff.Neuro_Surgeon
];

const userInput = input.question(`\n
Enter ${greenText("Staff")} to list our current employees.\n 
Enter ${redText("Patients")} to list our current patients.\n`);

switch (userInput) {
  case "Staff":
    console.log(`These are our current full time ${greenText("Staff")}.\n`);
    console.table(Staff);
    break;
  case "Patients":
    console.log(`These are our current ${redText("Patients")}.\n`);
    console.table(patients);
    break;
}
