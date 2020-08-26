'use strict'

const ProfessionalModel = require('../models/professional');

exports.getProfessionals = async (query, page, limit) => {
  try {
    return await ProfessionalModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};