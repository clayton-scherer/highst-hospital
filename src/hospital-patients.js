// Write my patient class,...

class Patient {
  constructor(name, bL, hL) {
    this._name = name;
    this._BLOOD_LEVEL = bL;
    this._HEALTH_LEVEL = hL;
  }
  get patient() {
    return this._name + " " + "is a Patient";
  }
  get bloodlevel() {
    return this._BLOOD_LEVEL;
  }
  get healthlevel() {
    return this._HEALTH_LEVEL;
  }
}

// Experimentation with Extends and Super keywords, as well as displaying this into the test...
/*
class Admitted extends Patient {
  constructor(name, bL, hL) {
    super(name, bL, hL);
  }
}
*/
var Susan = new Patient("Susan", 20, 10); // Modifying the bL and hL on line 33 still functions even though a super.bloodlevel and super.healthlevel is never called? - as seen on line 25.

var Jenn = new Patient("Jenn", 20, 10);

var Simon = new Patient("Simon", 20, 10)

console.log(Susan, Jenn, Simon);



module.exports = Patient;
