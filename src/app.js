// Require statements at head, handle input and ouput of application.
const input = require("readline-sync");
const chalk = require("chalk");


textColors = [
  (blueText = chalk.blue),
  (redText = chalk.red),
  (greenText = chalk.green),
  (cyanText = chalk.cyan),
  (underlineText = chalk.underline)
];

const Patients = {};
Patients.Room_101 = new Patient("Matt");
Patients.Room_102 = new Patient("Ellie");
Patients.Room_103 = new Patient("Lauren");

const Staff = {};
Staff.Employee = new Employee("Mack", "trainee");
Staff.Janitor = new Janitor("Mike", 907, true);
Staff.Vampire_Janitor = new VampireJanitor("Savi", 743, false);
Staff.Receptionist = new Receptionist("Mark", 3765, false);
Staff.Head_Receptionist = new Receptionist("Sally", 8546, true);
Staff.Nurse = new Nurse("Susan", 9752, Patients.Room_102._name);
Staff.Floor_Nurse = new Nurse("Mary", 5197, Patients.Room_103._name);
Staff.Charge_Nurse = new Nurse("Bonnie", 4913, Patients.Room_101._name);
Staff.Doctor = new Doctor("Brutus", 75340, "Cardio");
Staff.Surgeon = new Surgeon("Alexander", 94637, "OBGYN", false);
Staff.Neuro_Surgeon = new Surgeon("Christoph", 98754, "Neurology", true);

//console.table(Staff.Surgeon); prints exclusively Alexanders's table.

const canAdministerCare = [
  Staff.Nurse,
  Staff.Floor_Nurse,
  Staff.Doctor,
  Staff.Surgeon
];

console.log(
  `\nWelcome to High St Hospitals' department of Records and Data.\n
   \nWe pride ourselves on having a ${underlineText(
     "sleek"
   )} yet ${underlineText("functional")} data management system.\n
   \nTry out our proprietary ${cyanText(
     "color-coded"
   )} menu to navigate through our records!!!`
);

let loopCondition = true;
// Needs to return to userInput after each case is evaluated... currently infinite loop - see line 84.
while (loopCondition) {
  const userInput = input.question(`\n
Enter ${greenText("Staff")} to list our current employees.\n 
Enter ${greenText("Patients")} to list our current patients.\n
Enter ${blueText("1")} for our Staff qualified to draw blood.\n
Enter ${blueText("2")} for our staff qualified to care for our patients.\n
Enter ${redText("3")} to exit our robust databse.\n`);

  switch (userInput) {
    case "Staff":
      console.log(`\nThese are our current full time ${greenText("Staff")}.\n`);
      console.table(Staff);
      break;
    case "Patients":
      console.log(`\nThese are our current ${greenText("Patients")}.\n`);
      console.table(Patients);
      break;
    case "1":
      // Would like to make this case evaluate canAdministerCare array with a for loop to print out each name for every member in the array.
      console.log(
        `\nWe have ${
          canAdministerCare.length
        } Staff members qualified to draw blood\n`
      );
      break;
    case "2":
      console.log(
        `\nWe have ${
          canAdministerCare.length
        } Staff members qualified in Advanced Lifesaving procedures.\n`
      );
      break;
    case "3":
      console.log(
        `\nThank you for choosing High st. Hospital as your provider of superb healthcare!\n`
      );
      loopCondition = false;
      break;
    default:
      console.log(`\nPlease enter a vaild search paramater.\n`);
  } //holder to prevent infinite while loop?...
}
