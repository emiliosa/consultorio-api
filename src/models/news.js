'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const NewsSchema = mongoose.Schema({
  fromDate: {type: Date, required: true},
  toDate: {type: Date, required: true},
  description: {type: String, required: true},
  url: {type: URL, required: true},
  createdBy: {type: JSON, required: true},
});

NewsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('New', NewsSchema);