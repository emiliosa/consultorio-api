'use strict'

const UserModel = require('../models/user');
const AdministrativeModel = require('../models/administrative');
const ProfessionalModel = require('../models/professional');
const AdminModel = require('../models/admin');
const PatientModel = require('../models/patient');
const MailService = require('./mail');
const ForgotPasswordTemplate = require('../templates/mail/user/forgotPassword.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Helper = require("../helpers/index.js");

exports.getUsers = async (query, page, limit) => {
  try {
    return await UserModel.paginate(query, { page, limit });
  } catch (e) {
    throw Error(e);
  }
};

exports.getUserById = async (id) => {
  try {
    return await UserModel.findOne({ '_id': id });
  } catch (e) {
    throw Error(e);
  };
}

exports.createUser = async (attributes) => {
  try {
    let roleData, roleType = {};

    console.log(attributes);

    const { dni, name, lastname, birthday, email, password, role, studies, speciality, licenseNumber } = attributes;
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

    switch (newUser.role) {
      case 'Paciente':
        roleType = 'patient';
        roleData = await (new PatientModel({ user: newUser, studies: studies })).save();
        break;
      case 'Profesional':
        roleType = 'professional';
        roleData = await (new ProfessionalModel({ user: newUser, speciality: speciality, licenseNumber: licenseNumber })).save();
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
      user: newUser
    }, process.env.SECRET_KEY, {
      expiresIn: 86400 // expires in 24 hours
    });

    console.log(newUser, roleType, roleData, token);

    return { user: newUser, roleType: roleData, accessToken: token };
  } catch (e) {
    throw Error(e);
  }
}

// TODO mejorar validación cuando un campo es undefined (no alcanza con destructurar attributes)
// https://zellwk.com/blog/express-middlewares/
exports.updateUser = async (id, attributes) => {
  try {
    console.log(attributes);
    const { dni, name, lastname, birthday, email } = attributes;

    return UserModel.findOneAndUpdate(
      { _id: id },
      { dni, name, lastname, birthday, email },
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
    // console.log(id);
    // const deleted = await UserModel.findOneAndDelete({ _id: id });
    // console.log(deleted);
    // return deleted;
    const inactived = await UserModel.findOneAndUpdate({ _id: id }, { status: 'Inactivo' }, { new: true });
    console.log(inactived);
    return inactived;
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
      user: user
    }, process.env.SECRET_KEY, {
      expiresIn: 86400 // expires in 24 hours
    });

    return { user: user, accessToken: token };
  } catch (e) {
    throw Error(e)
  }
};

exports.forgotPassword = async (email) => {
  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      throw Error("Usuario inexistente");
    }

    const token = await Helper.generateRandomToken();
    const link = process.env.CLIENT_URL + "/reset-password/" + token;
    const subject = ForgotPasswordTemplate.getSubject();
    const text = ForgotPasswordTemplate.getText(user.name + " " + user.lastname, link);

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;

    user.save();

    console.log("usuario actualizado para balquear password: ", user);

    MailService.send(user.email, subject, text);

    return user;
  } catch (e) {
    throw Error(e);
  }
};

exports.resetPassword = async (token, password) => {
  try {
    const user = await UserModel.findOne({
      resetPasswordToken: token, 
      resetPasswordExpires: { $gt: Date.now() }
    });

    console.log(user, token, password);

    if (!user) {
      throw Error("Token inválido");
    }

    user.password = bcrypt.hashSync(password, 8);
    user.resetPasswordToken = "";
    user.resetPasswordExpires = 0;

    user.save();

    console.log(user);

    return user;
  } catch (e) {
    throw Error(e);
  }
};