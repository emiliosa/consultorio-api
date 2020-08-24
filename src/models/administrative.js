'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const AdministrativeSchema = mongoose.Schema({
  user: JSON,
});

AdministrativeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Administrative', AdministrativeSchema);