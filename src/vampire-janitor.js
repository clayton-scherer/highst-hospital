const Janitor = require("../src/janitor");
class VampireJanitor extends Janitor {
  constructor(name, idNumber, cleaning) {
    super(name, idNumber, cleaning);
  }
  get vampireJanitor() {
    return this._name;
  }
}
module.exports = VampireJanitor;
