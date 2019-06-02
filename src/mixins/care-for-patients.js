module.exports = {
  careForPatient(patientName) {
    patientName._HEALTH_LEVEL += 6;
    if (patientName._HEALTH_LEVEL >= 100) patientName._HEALTH_LEVEL = 100; 
    return patientName._HEALTH_LEVEL
  } 
    
};
