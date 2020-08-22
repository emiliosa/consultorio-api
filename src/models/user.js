'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { Collection } = require('mongoose');

const UserSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  fecha_nacimiento: String,
  dni: Number,
  email: String,
  password: String,
  role: JSON,
  paciente: JSON
});

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Usuario', UserSchema);