'use strict'

const userService = require('../services/user');

// Async Controller function to get the To do List
exports.getUsers = async function (req, res, next) {
  // Check the existence of the query parameters, If doesn't exists assign a default value
  try {
      const page = req.query.page ? req.query.page : 1
      const limit = req.query.limit ? req.query.limit : 10;
      const users = await userService.getUsers({}, page, limit);
      // Return the Users list with the appropriate HTTP password Code and Message.
      return res.status(200).json({status: 200, data: users, message: "Succesfully Users Recieved"});
  } catch (e) {
      //Return an Error Response Message with Code and the Error Message.
      return res.status(400).json({status: 400, message: e.message});
  }
};

// Async Controller function to get the To do List
exports.getUserByDni = async function (req, res, next) {
  try {
      const user = await userService.getUserByDni(req.params.dni);
      console.log(user);
      return res.status(200).json({status: 200, data: user, message: "Succesfully Users Recieved"});
  } catch (e) {
      //Return an Error Response Message with Code and the Error Message.
      return res.status(400).json({status: 400, message: e.message});
  }
};

// Async Controller function to get the To do List
exports.createUser = async function (req, res, next) {
  try {
      const user = await userService.createUser(req.body);
      console.log(user);
      return res.status(200).json({status: 200, data: user, message: "Succesfully Users Recieved"});
  } catch (e) {
      //Return an Error Response Message with Code and the Error Message.
      return res.status(400).json({status: 400, message: e.message});
  }
};

// Async Controller function to get the To do List
exports.updateUser = async function (req, res, next) {
  try {
      const user = await userService.updateUser(req.params.dni, req.body);
      console.log(user);
      return res.status(200).json({status: 200, data: user, message: "Succesfully Users Recieved"});
  } catch (e) {
      //Return an Error Response Message with Code and the Error Message.
      return res.status(400).json({status: 400, message: e.message});
  }
};