'use strict';

exports.getSubject = () => {
  return "Aviso de actualización de turno";
};
exports.getText = (patientFullname, professionalFullname, description, newDate, newStatus) => {
  return `Hola <b>${patientFullname}</b>,</br></br>

  El turno turno con el profesional <b>${professionalFullname}</b> con motivos:</br></br>
  
  <q>${description}</q></br></br>
  
  ha sido modificado:</br></br>
  
  ${newDate !== undefined ? `La nueva fecha es <b>${newDate}</b>` : ''}</br>
  ${newStatus !== undefined ? `El estado del turno es <b>${newStatus}</b>`: ''}</br></br>
  
  Te esperamos, si deseas cancelar el turno por favor realizarlo en la autogestión.`
};