'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const { ObjectId } = require('mongoose');
const statusEnum = ['Activo', 'Inactivo'];

// validations
const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const undefinedNotAllowed = (attribute) => {
  return attribute !== undefined;
};

// attributes
const UserSchema = mongoose.Schema({
  // _id: ObjectId,
  name: { type: String, required: true, validate: [undefinedNotAllowed, 'Undefined value not allowed'] },
  lastname: { type: String, required: true },
  birthday: { type: Date, required: true },
  dni: { type: Number, required: true },
  email: { type: String, unique: true, required: true, validate: [validateEmail, 'Syntax is not valid'] },
  password: { type: String, required: true },
  role: { type: JSON, required: true },
  status: { type: String, enum: statusEnum, default: 'Activo', required: true },
  resetPasswordToken: { type: String, default: "" },
  resetPasswordExpires: { type: Number, default: 0 },
  patient: { type: JSON, default: {} },
  professional: { type: JSON, default: {} },
  administrative: { type: JSON, default: {} },
  amin: { type: JSON, default: {} },
});

// plugins
UserSchema.plugin(mongoosePaginate);

// hooks
// UserSchema.pre('validate', function (next) {
// console.log("acá estoy: ", this);
// next();
// const cleanAttributes = (attributes) => {
//   for (let attr in attributes) {
//     if(attributes[attr] === undefined) {
//       delete attributes[attr];
//     }
//   }

//   return attributes;
// };
// });

module.exports = mongoose.model('User', UserSchema);