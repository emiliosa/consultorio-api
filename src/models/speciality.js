'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const SpecialitySchema = mongoose.Schema({
  name: JSON,
});

SpecialitySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Speciality', SpecialitySchema);