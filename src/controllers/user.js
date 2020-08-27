'use strict'

const UserService = require('../services/user');

exports.getUsers = async (req, res, next) => {
  try {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const users = await UserService.getUsers({}, page, limit);
    return res.status(200).json({ status: 200, data: users });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.registerUser = async (req, res, next) => {
  try {
    const role = 'Paciente';
    const user = await UserService.createUser({role, ...req.body});
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await UserService.createUser(req.body);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req);
    const user = await UserService.login(req.body.email || req.body.username, req.body.password);
    return res.status(200).json({ status: 200, data: user })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const user = await UserService.forgotPassword(req.body.email);
    return res.status(200).json({ status: 200, data: user })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const user = await UserService.resetPassword(req.params.token, req.body.password);
    return res.status(200).json({ status: 200, data: user })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};