'use strict'

const UserModel = require('../models/user');
const AdministrativeModel = require('../models/administrative');
const ProfessionalModel = require('../models/professional');
const AdminModel = require('../models/admin');
const PatientModel = require('../models/patient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getUsers = async (query, page, limit) => {
  try {
    return await UserModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};

exports.getUserById = async (id) => {
  try {
    return await UserModel.find({ '_id': id });
  } catch (e) {
    throw Error(e);
  };
}

exports.createUser = async (attributes) => {
  try {
    let roleData, roleType = {};

    console.log(attributes);

    const { dni, name, lastname, birthday, email, password, role, studies, speciality } = attributes;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = await UserModel.create({
      name: name,
      lastname: lastname,
      birthday: new Date(birthday),
      dni: dni,
      email: email,
      password: hashedPassword,
      role: role,
    });

    switch (newUser.role.name) {
      case 'Paciente':
        roleType = 'patient';
        roleData = await (new PatientModel({ user: newUser, studies: studies })).save();
        break;
      case 'Profesional':
        roleType = 'professional';
        roleData = await (new ProfessionalModel({ user: newUser, speciality: speciality })).save();
        break;
      case 'Administrativo':
        roleType = 'administrative';
        roleData = await (new AdministrativeModel({ user: newUser })).save();
        break;
      case 'Admin':
        roleType = 'admin';
        roleData = await (new AdminModel({ user: newUser })).save();
        break;
      default:
        throw Error('Role not found');
    };

    const token = jwt.sign({
        id: newUser._id
    }, process.env.SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
    });

    console.log(newUser, roleType, roleData, token);

    return {user: newUser, roleType: roleData, accessToken: token};
  } catch (e) {
    throw Error(e);
  }
}

// TODO mejorar validación cuando un campo es undefined (no alcanza con destructurar attributes)
// https://zellwk.com/blog/express-middlewares/
exports.updateUser = async (id, attributes) => {
  try {
    console.log(attributes);
    const { dni, name, lastname, birthday, email, role } = attributes;

    return UserModel.findOneAndUpdate(
      { _id: id },
      { dni, name, lastname, birthday, email, role },
      { new: true }
    );
  } catch (e) {
    throw Error(e);
  }
}

// debería eliminar el jwt
exports.updateUserPassword = async (id, password) => {
  try {
    return UserModel.findOneAndUpdate(
      { _id: id },
      { password }
    );
  } catch (e) {
    throw Error(e);
  }
};

exports.deleteUser = async (id) => {
  try {
    console.log(id);
    const deleted = await UserModel.findOneAndDelete({ _id: id });
    console.log(deleted);
    return deleted;
  } catch (e) {
    throw Error(e);
  }
}

exports.login = async (email, password) => {
  try {
    const user = await UserModel.findOne({
      email: email
    });

    if (!bcrypt.compareSync(password, user.password)) {
      throw Error("Invalid username/password")
    }

    user.password = undefined;

    const token = jwt.sign({
      id: user._id
    }, process.env.SECRET_KEY, {
      expiresIn: 86400 // expires in 24 hours
    });

    return { user: user, accessToken: token };
  } catch (e) {
    throw Error(e)
  }
};