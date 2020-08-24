'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const AdminSchema = mongoose.Schema({
  user: JSON,
});

AdminSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Admin', AdminSchema);