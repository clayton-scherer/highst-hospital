// Require statements at head, handle input and ouput of application.
const input = require("readline-sync");
const chalk = require("chalk");
const Patient = require("../src/patient");
const Employee = require("./employees/employee");
const Janitor = require("./employees/janitor");
const VampireJanitor = require("./employees/vampire-janitor");
const Receptionist = require("./employees/receptionist");
const Nurse = require("./employees/nurse");
const Doctor = require("../src/employees/doctor");
const Surgeon = require("./employees/surgeon");

textColors = [
  (blueText = chalk.blue),
  (redText = chalk.red),
  (greenText = chalk.green),
  (cyanText = chalk.cyan),
  (underlineText = chalk.underline)
];

const Matt = new Patient("Matt");
const Ellie = new Patient("Ellie");
const Lauren = new Patient("Lauren");
const Mack = new Employee("Mack", "trainee");
const Mike = new Janitor("Mike", 907, true);
const Savi = new VampireJanitor("Savi", 743, false);
const Mark = new Receptionist("Mark", 3765, false);
const Susan = new Nurse("Susan",9752,"Matt" + ", " + "Ellie" + ", " + "Lauren"
);
const Brutus = new Doctor("Brutus", 75340, "Cardio");
const Alexander = new Surgeon("Alexander", 94637, "OBGYN", true);

const Patients = [Matt, Ellie, Lauren];

const Staff = [Mike, Savi, Mark, Susan, Brutus, Alexander];

const canAdministerCare = [Susan.name, Brutus.name, Alexander.name];

welcomeMessage();

let loopCondition = true;

while (loopCondition) {
  const userInput = mainMenu();

  switch (userInput) {
    case "staff":
      console.table(Staff);
      console.log(`\nThese are our current full time ${greenText("Staff")}.`);
      break;
    case "patients":
      console.table(Patients);
      console.log(`\nThese are our current ${greenText("Patients")}.\n`);
      console.log(
        `${greenText(Susan.name)} is currently looking after these patients.`
      );
      break;
    case "1":
      console.log(
        `\nThese ${greenText("Staff")} members are qualified to draw blood\n`
      );
      console.table(canAdministerCare);
      break;
    case "2":
      console.log(
        `\nWe have ${canAdministerCare.length} ${greenText(
          "Staff"
        )} members certified in Advanced Lifesaving procedures.`
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

function mainMenu() {
  return input.question(`\n
Enter ${greenText("staff")} to list our current employees.\n 
Enter ${greenText("patients")} to list our current patients.\n
Enter ${blueText("'1'")} for our Staff qualified to draw blood.\n
Enter ${blueText("'2'")} for our staff qualified to care for our patients.\n
Enter ${redText("'3'")} to exit our robust databse.\n\n >> :  `);
}

function welcomeMessage() {
  console.log(`\nWelcome to High St Hospitals' department of Records and Data.\n
   \nWe pride ourselves on having a ${underlineText(
     "sleek"
   )} yet ${underlineText("functional")} data management system.\n
   \nTry out our proprietary ${cyanText(
     "color-coded"
   )} menu to navigate through our records!!!`);
}
