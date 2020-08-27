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