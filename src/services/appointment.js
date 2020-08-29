'use strict'

const AppointmentModel = require('../models/appointment');
const PatientModel = require('../models/patient');
const ProfessionalModel = require('../models/professional');
const ObjectId = require('mongoose').Types.ObjectId;
const MailService = require('./mail');
const moment = require('moment');
const NewAppointmentTemplate = require('../templates/mail/appointment/newAppointment.js');
const UpdateAppointmentTemplate = require('../templates/mail/appointment/updateAppointment.js');
const fileSystem = require('fs');
const path = require('path');

exports.getAppointments = async (filters, page, limit) => {
  try {
    let query = {};
    let { patient, professional, date } = filters;

    if (patient) {
      if (patient.userId) {
        query = {
          "patient.user._id": ObjectId(patient.userId)
        };
      }

      if (patient.patientId) {
        query = {
          "patient._id": ObjectId(patient.patientId)
        };
      }
    }

    if (professional) {
      if (professional.userId) {
        query = {
          "professional.user._id": ObjectId(professional.userId)
        };
      }

      if (professional.professionalId) {
        query = {
          "professional._id": ObjectId(professional.professionalId)
        };
      }
    }

    if (date) {
      let from = {};
      let to = {};

      if (date === 'today') {
        from = moment.utc().format('YYYY-MM-DD 00:00:00');
        to = moment.utc().format('YYYY-MM-DD 23:59:59');
      } else {

        from = moment.utc(new Date(date)).format('YYYY-MM-DD 00:00:00');
        to = moment.utc(new Date(date)).format('YYYY-MM-DD 23:59:59');

        console.log("date: ", date, "new date: ", new Date(date), "from: ", from, "tp: ", to);

      }

      query = {
        date: {
          "$gte": from,
          "$lte": to,
        },
        status: {
          "$ne": "Cancelado"
        },
        ...query
      };
    }

    console.log(query);

    return await AppointmentModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};

exports.getAppointmentById = async (id) => {
  try {
    const appointment = await AppointmentModel.findOne({ _id: id });
    const { files } = appointment;

    return appointment;
  } catch (e) {
    throw Error(e);
  };
}

// TODO mejorar templates de envío de mails, usar .pug
exports.createAppointment = async (attributes, user) => {
  try {
    console.log(attributes);
    let errors = [];
    const { patientId, professionalId, description, date, time } = attributes;
    const { id, value } = time || {};
    const patient = await PatientModel.findOne({ _id: patientId });
    const professional = await ProfessionalModel.findOne({ _id: professionalId });

    if (!patient) {
      errors.push("Patient does not exists");
    }

    if (!professional) {
      errors.push("Professional does not exists");
    }

    if (!description) {
      errors.push("Description is required");
    }

    if (!date) {
      errors.push("Date is required");
    }

    if (!id || !value) {
      errors.push("Appointment time {id, value} is required");
    }

    if (errors.length > 0) {
      throw Error(errors.join(', '));
    }

    const newDate = new Date(date);
    newDate.setHours(time.value.split(':')[0]);
    newDate.setMinutes(time.value.split(':')[1]);
    newDate.setSeconds(0);

    const newAppointment = await AppointmentModel.create({
      patient: patient,
      professional: professional,
      date: newDate,
      time: { id, value },
      description: description,
      createdByUser: user
    });

    console.log(newAppointment);

    const subject = NewAppointmentTemplate.getSubject();
    const text = NewAppointmentTemplate.getText(
      patient.user.name + " " + patient.user.lastname,
      professional.user.name + " " + professional.user.lastname,
      moment.utc(newAppointment.date).format("DD/MM/YYYY") + " " + newAppointment.time.value,
      newAppointment.description
    );

    MailService.send(patient.user.email, subject, text);

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

    console.log("date: ", date);

    if (date !== undefined && date !== appointment.date) {
      newAttributes.date = date;
    }

    if (status !== undefined && status !== appointment.status) {
      newAttributes.status = status;
    }

    const subject = UpdateAppointmentTemplate.getSubject();
    const text = UpdateAppointmentTemplate.getText(
      patientFullname,
      professionalFullname,
      appointment.description,
      newAttributes.date !== undefined ? moment.utc(newAttributes.date).format("DD/MM/YYYY") + " " + newAppointment.time.value : undefined,
      newAttributes.status !== undefined ? newAttributes.status : undefined
    );

    MailService.send(appointment.patient.user.email, subject, text);

    console.log(text, newAttributes);

    return await appointment.update(newAttributes, { new: true });
  } catch (e) {
    throw Error(e);
  }
}

exports.deleteAppointment = async (id) => {
  try {
    console.log(id);
    // const deleted = await AppointmentModel.findOneAndDelete({ _id: id });
    const canceled = await AppointmentModel.findOneAndUpdate({ _id: id }, { status: 'Cancelado' }, { new: true });
    console.log(canceled);
    return canceled;
  } catch (e) {
    throw Error(e);
  }
}