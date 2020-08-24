'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const AppointmentSchema = mongoose.Schema({
  patient: { type: JSON, required: true },
  professional: { type: JSON, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  createdByUser: { type: JSON, required: true },
});

AppointmentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Appointment', AppointmentSchema);