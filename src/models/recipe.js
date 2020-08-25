'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');

const RecipeSchema = mongoose.Schema({
  patient: { type: JSON, required: true },
  professional: { type: JSON, required: true },
  description: { type: String, required: true },
  file: { type: JSON, required: true },
  date: { type: Date, required: true },
  createdByUser: { type: JSON, required: true },
});

// RecipeSchema.path('url').validate((val) => {
//   urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
//   return urlRegex.test(val);
// }, 'Invalid URL.');

RecipeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Recipe', RecipeSchema);