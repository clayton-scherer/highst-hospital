// Write my patient class,...

class Patient {
  constructor(name, bL, hL) {
    this._name = name;
    this._BLOOD_LEVEL = bL;
    this._HEALTH_LEVEL = hL;
  }
  patient() {
    return this._name + " " + "is a Patient";
  }
  bloodlevel() {
    return this._BLOOD_LEVEL;
  }
  healthlevel() {
    return this._HEALTH_LEVEL;
  }
}

// Experimentation with Extends and Super keywords, as well as displaying this into the test...
class Admitted extends Patient {
  constructor(name, bL, hL) {
    super(name, bL, hL);
  }
  nameIs() {
    return `${super.patient()}`;
  }
}

function display(content) {
  console.log(content);
}
const admitted = new Admitted("Mary", 27, 11); // Modifying the bL and hL on line 33 still functions even though a super.bloodlevel and super.healthlevel is never called? - as seen on line 25.
display(
  admitted.nameIs() +
    "\nHer blood level is " +
    admitted.bloodlevel() +
    "\nHer health is currently " +
    admitted.healthlevel()
);
module.exports = Patient;
