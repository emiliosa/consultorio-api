'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const PatientSchema = mongoose.Schema({
  user: { type: JSON, required: true },
  studies: { type: JSON },
});

PatientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Patient', PatientSchema);