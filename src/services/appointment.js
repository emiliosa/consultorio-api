'use strict'

const AppointmentModel = require('../models/appointment');
const PatientModel = require('../models/patient');
const ProfessionalModel = require('../models/professional');
const mailService = require('./mail');
const moment = require('moment');
const newAppointmentTemplate = require('../templates/mail/appointment/newAppointment.js');
const updateAppointmentTemplate = require('../templates/mail/appointment/updateAppointment.js');

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

    const subject = newAppointmentTemplate.getSubject();
    const text = newAppointmentTemplate.getText(
      patient.user.name + " " + patient.user.lastname,
      professional.user.name + " " + professional.user.lastname,
      moment(newAppointment.date).format("DD/MM/YYYY HH:mm"),
      newAppointment.description
    );

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
    const appointment = await AppointmentModel.findOne({ _id: id });
    const patientFullname = appointment.patient.user.name + " " + appointment.patient.user.lastname;
    const professionalFullname = appointment.professional.user.name + " " + appointment.professional.user.lastname;
    const newAttributes = {};

    if (date !== undefined && date !== appointment.date) {
      newAttributes.date = date;
    }

    if (status !== undefined && status !== appointment.status) {
      newAttributes.status = status;
    }

    const subject = updateAppointmentTemplate.getSubject();
    const text = updateAppointmentTemplate.getText(
      patientFullname,
      professionalFullname,
      appointment.description,
      newAttributes.date !== undefined ? moment(newAttributes.date).format("DD/MM/YYYY HH:mm") : undefined,
      newAttributes.status !== undefined ? newAttributes.status : undefined
    );

    mailService.send(appointment.patient.user.email, subject, text);

    console.log(text, newAttributes);

    return await appointment.update(newAttributes, { new: true });
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