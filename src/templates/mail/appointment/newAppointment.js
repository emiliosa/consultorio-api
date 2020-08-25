'use strict';

exports.getSubject = () => {
  return "Aviso de nuevo turno";
};
exports.getText = (patientFullname, professionalFullname, date, description) => {
  return `Hola <b>${patientFullname}</b>,</br></br>

  Has creado un turno con el profesional <b>${professionalFullname}</b> el día <b>${date}</b> con motivos:</br></br>
  
  <q>${description}</q>
  
  Te esperamos, si deseas cancelar el turno por favor realizarlo en la autogestión.`
};