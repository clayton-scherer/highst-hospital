// Require statements at head, handle input and ouput of application.
const input = require("readline-sync");
const chalk = require("chalk");
const Patient = require("../src/patient");
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

const Mike = new Janitor("Mike", 907, true);
const Savi = new VampireJanitor("Savi", 743, false);
const Mark = new Receptionist("Mark", 3765, false);
const Susan = new Nurse(
  "Susan",
  9752,
  "Matt" + ", " + "Ellie" + ", " + "Lauren"
);
const Brutus = new Doctor("Brutus", 75340, "Cardio");
const Alexander = new Surgeon("Alexander", 94637, "OBGYN", true);

const Patients = [Matt, Ellie, Lauren];

const Staff = [Mike, Savi, Mark, Susan, Brutus, Alexander];

const canAdministerCare = [Susan, Brutus, Alexander];

welcomeMessage();
// setInterval(tick, 5000); call tick every 5 seconds. Also calls after exiting, no bueno...
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
        `\nThank you for choosing High st. Hospital as your provider of superb healthcare!\n`
      );

      break;
    default:
      console.log(`\nPlease enter a vaild search paramater.\n`);
  }
  patientTick();
}

function patientTick() {
  Patients.forEach(patient => {
    patient.tick();
  });
}

function staffQualified() {
  canAdministerCare.forEach(Staff => {
    console.log(`${greenText(Staff.name)}`);
  });
}

// function tick() {
//   Patients.forEach(patientName => {
//     return (patientName._HEALTH_LEVEL += 2), (patientName._BLOOD_LEVEL += 4);
//   });
// }

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
   )} menu to navigate through our records!!!`);
}
