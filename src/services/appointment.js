'use strict'

const AppointmentModel = require('../models/appointment');
const PatientModel = require('../models/patient');
const ProfessionalModel = require('../models/professional');
const mailService = require('./mail');
const moment = require('moment');

exports.getAppointments = async (query, page, limit) => {
  try {
    return await AppointmentModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};

exports.getAppointmentById = async (id) => {
  try {
    return await AppointmentModel.find({ _id: id });
  } catch (e) {
    throw Error(e);
  };
}

// TODO mejorar templates de envío de mails, usar .pug
exports.createAppointment = async (attributes) => {
  try {
    console.log(attributes);

    const { patientId, professionalId, description, date } = attributes;
    const patient = await PatientModel.findOne({ _id: patientId });
    const professional = await ProfessionalModel.findOne({ _id: professionalId });

    const newAppointment = await AppointmentModel.create({
      patient: patient,
      professional: professional,
      date: new Date(date),
      description: description,
      status: 'Pendiente',
      createdByUser: {}
    });

    console.log(newAppointment);

    const subject = "Aviso de nuevo turno";
    const text = `Hola ${patient.user.name} ${patient.user.lastname},
    Has creado un turno con el profesional ${professional.user.name} ${professional.user.lastname} el día ${newAppointment.date},
    con motivo: ${newAppointment.description}.
    
    Te esperamos, si deseas cancelar el turno por favor realizarlo en la autogestión.`;

    mailService.send(patient.user.email, subject, text);

    return newAppointment;
  } catch (e) {
    throw Error(e);
  }
}

// TODO mejorar validación cuando un campo es undefined (no alcanza con destructurar attributes)
exports.updateAppointment = async (id, attributes) => {
  try {
    console.log(attributes);
    const { date, status } = attributes;

    return user.findOneAndUpdate(
      { _id: id },
      { date: new Date(date), status: status },
      { new: true }
    );
  } catch (e) {
    throw Error(e);
  }
}

exports.deleteAppointment = async (id) => {
  try {
    console.log(id);
    const deleted = await AppointmentModel.findOneAndDelete({ _id: id });
    console.log(deleted);
    return deleted;
  } catch (e) {
    throw Error(e);
  }
}