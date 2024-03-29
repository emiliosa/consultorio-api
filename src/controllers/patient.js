'use strict'

const PatientService = require('../services/patient');

exports.getPatients = async (req, res, next) => {
  try {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 100;
    const users = await PatientService.getPatients({}, page, limit);
    return res.status(200).json({ status: 200, data: users });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getPatientById = async (req, res, next) => {
  try {
    const user = await PatientService.getPatientById(req.params.id);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addMedicalHistory = async (req, res, next) => {
  try {
    const user = await PatientService.addMedicalHistory(req.params.id, req.body);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.removeMedicalHistory = async (req, res, next) => {
  try {
    const user = await PatientService.removeMedicalHistory(req.params.id, req.params.medicalHistoryId);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};