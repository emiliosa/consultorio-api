'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const NewsSchema = mongoose.Schema({
  // _id: {type: String, required: true},
  titulo: {type: String, required: true},
  header: {type: String, required: true},
  extracto: {type: String, required: true},
  url: {type: String, required: true}
});

NewsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('New', NewsSchema);