'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const ProfessionalSchema = mongoose.Schema({
  user: { type: JSON, required: true },
  speciality: { type: JSON, required: true },
});

ProfessionalSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Professional', ProfessionalSchema);