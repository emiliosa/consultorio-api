'use strict';

exports.getSubject = () => {
  return "Blanqueo de password";
};
exports.getText = (patientFullname, link) => {
  return `Hola <b>${patientFullname}</b>,</br></br>

  Has solicitado blanquear tu password, por favor clickea en el siguiente link: </br></br>

  <a href="${link}" target="_blank">${link}</a></br></br>
  
  Si no has solicitado este blanqueo, por favor descarta este mail y contactense con nosotros.`
};