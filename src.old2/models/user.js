'use strict'

const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-pagination')

const UserSchema = mongoose.Schema({
  name: String,
  surname: String,
  nick: String,
  email: String,
  password: String,
  role: String,
  image: String
});

UserSchema.plugin(mongoosePagination);

module.exports = mongoose.model('User', UserSchema);