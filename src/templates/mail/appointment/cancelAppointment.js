'use strict';

exports.getSubject = () => {
  return "Aviso de cancelación de turno";
};
exports.getText = (patientFullname, professionalFullname, date) => {
  return `Hola <b>${patientFullname}</b>,</br></br>

  El turno con el profesional <b>${professionalFullname}</b> el día <b>${date}</b> ha sido cancelado.</br></br>
  
  Si deseas crear un nuevo turno, por favor realizarlo en la autogestión.`
};