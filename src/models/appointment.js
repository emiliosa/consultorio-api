'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');
const statusEnum = ['Programado', 'Cancelado', 'Ausente', 'Presente'];

const AppointmentSchema = mongoose.Schema({
  patient: { type: JSON, required: true },
  professional: { type: JSON, required: true },
  date: { type: Date, required: true },
  time: {type: JSON, required: true},
  description: { type: String, required: true },
  status: { type: String, enum: statusEnum, default: 'Programado', required: true },
  createdByUser: { type: JSON, required: true },
});

AppointmentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Appointment', AppointmentSchema);
module.exports.statusEnum = statusEnum;