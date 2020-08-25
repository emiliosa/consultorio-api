'use strict'

const userService = require('../services/user');

// Async Controller function to get the To do List
exports.getUsers = async (req, res, next) => {
  // Check the existence of the query parameters, If doesn't exists assign a default value
  try {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const users = await userService.getUsers({}, page, limit);
    // Return the Users list with the appropriate HTTP password Code and Message.
    return res.status(200).json({ status: 200, data: users });
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.registerUser = async (req, res, next) => {
  try {
    const role = 'Paciente';
    const user = await userService.createUser({role, ...req.body});
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    console.log(user);
    return res.status(200).json({ status: 200, data: user });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req);
    const user = await userService.login(req.body.email || req.body.username, req.body.password);
    return res.status(200).json({ status: 200, data: user })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};