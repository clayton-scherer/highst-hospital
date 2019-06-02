// Hospital App
// Requirements
const input = require("readline-sync");
const chalk = require("chalk");
const Patient = require("../src/patient");
const Janitor = require("./employees/janitor");
const VampireJanitor = require("./employees/vampire-janitor");
const Receptionist = require("./employees/receptionist");
const Nurse = require("./employees/nurse");
const Doctor = require("../src/employees/doctor");
const Surgeon = require("./employees/surgeon");

// Chalk Colors
textColors = [
  (blueText = chalk.blue),
  (redText = chalk.red),
  (greenText = chalk.green),
  (cyanText = chalk.cyan),
  (underlineText = chalk.underline)
];
// Initalizing Patients
const Matt = new Patient("Matt");
const Ellie = new Patient("Ellie");
const Lauren = new Patient("Lauren");
// Initalizing Staff Members
const Mike = new Janitor("Mike", 907, true);
const Savi = new VampireJanitor("Savi", 743, false);
const Mark = new Receptionist("Mark", 3765, false);
const Susan = new Nurse("Susan", 9752);
const Brutus = new Doctor("Brutus", 75340, "Cardio");
const Alexander = new Surgeon("Alexander", 94637, "OBGYN", true);
// Adding 3 Patients to Nurse Susan.
Susan.patients.push(Matt);
Susan.patients.push(Ellie);
Susan.patients.push(Lauren);
//Organazing Staff Members
const Staff = [];
Staff.Janitor = Mike;
Staff.VampireJanitor = Savi;
Staff.Receptionist = Mark;
Staff.Nurse = Susan;
Staff.Doctor = Brutus;
Staff.Surgeon = Alexander;
const canAdministerCare = [Susan, Brutus, Alexander];

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
      console.table(Susan.patients);
      console.log(`\nThese are our current ${greenText("Patients")}.\n`);
      console.log(
        `${greenText(Susan.name)} is currently looking after these patients.`
      );
      break;
    case "1":
      console.log(
        `\nThese ${greenText("Staff")} members are qualified to draw blood.\n`
      );
      staffQualified();
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
        `\n ${greenText(
          "Ellie"
        )} is about to go into surgery.\n\n Her ${redText(
          "health level"
        )} is currently ${Ellie.healthlevel}.\n\n Her ${redText(
          "blood level"
        )} is currently ${Ellie.bloodlevel}.`
      );
      Brutus.careForPatient(Ellie);
      Brutus.drawBlood(Ellie);
      console.log(
        `\n Our Doctor ${greenText(
          "Brutus"
        )} just assisted in an operation on ${greenText(
          "Ellie"
        )}!\n\n Unfortunately there were some complications..\n\n Her ${redText(
          "health level"
        )} is now ${Ellie.healthlevel}.\n\n Her ${redText(
          "blood level"
        )} is now ${Ellie.bloodlevel}!!!`
      );
      break;
    case "4":
      loopCondition = false;
      console.log(
        `\nThank you for choosing High st. Hospital as your provider of ${cyanText(
          "superb healthcare!"
        )}\n`
      );

      break;
    default:
      console.log(`\nPlease enter a vaild search paramater.\n`);
  }
  patientTick();
}

function patientTick() {
  Susan.patients.forEach(patient => {
    patient.tick();
  });
}

function staffQualified() {
  canAdministerCare.forEach(Staff => {
    console.log(`${greenText(Staff.name)}`);
  });
}

function mainMenu() {
  return input.question(`\n
Enter ${greenText("staff")} to list our current employees.\n 
Enter ${greenText("patients")} to list our current patients.\n
Enter ${blueText("'1'")} for our Staff qualified to draw blood.\n
Enter ${blueText("'2'")} for our staff qualified to care for our patients.\n
Enter ${blueText("'3'")} to witness our Doctor's expertise!\n
Enter ${redText("'4'")} to exit our robust databse.\n\n >> :  `);
}

function welcomeMessage() {
  console.log(`\nWelcome to High St Hospitals' department of Records and Data.\n
   \nWe pride ourselves on having a ${underlineText(
     "sleek"
   )} yet ${underlineText("functional")} data management system.\n
   \nTry out our proprietary ${cyanText(
     "color-coded"
   )} menu to navigate through our system!!!`);
}
