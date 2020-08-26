'use strict'

const PatientModel = require('../models/patient');

exports.getPatients = async (query, page, limit) => {
  try {
    return await PatientModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};