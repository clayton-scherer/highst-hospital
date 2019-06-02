module.exports = {
  drawBlood(patientName) {
    patientName._BLOOD_LEVEL -= 3;
    if (patientName._BLOOD_LEVEL >= 100) patientName._BLOOD_LEVEL = 100;
  }
};
