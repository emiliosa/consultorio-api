'use strict'

const PatientModel = require('../models/patient');

exports.getPatients = async (query, page, limit) => {
  try {
    return await PatientModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};

exports.getPatientById = async (id) => {
  try {
    return await PatientModel.findOne({_id: id});
  } catch (e) {
    throw Error(e);
  }
};

exports.addMedicalHistory = async (id, data) => {
  try {
    const { type, desc, severity, date, treatment, status } = data;

    console.log(data, type, desc, severity, date, treatment, status);

    if (!type || !desc || !severity || ! date || ! treatment || !status) {
      throw Error("Antecedentes incompletos");
    }

    const patient = await PatientModel.findOne({_id: id});

    if (!patient) {
      throw Error("Paciente inexistente");
    }

    console.log("paciente: ", patient);

    patient.medicalHistory.push({ type, desc, severity, date, treatment, status });

    patient.save();

    return patient;

    // const medicalHistory = {data, ...patient.medicalHistory};

    // return await patient.update({_id: id}, {medicalHistory: medicalHistory}, {new: true});

    console.log("historia medica: ", patient);

    return patient;
  } catch (e) {
    throw Error(e);
  }
};