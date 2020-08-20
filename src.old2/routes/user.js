'use strict'

const express = require('express');
const UserController = require('../controllers/user');
const api = express.Router();
const authMiddleware = require('../middlewares/authenticated');

api.get('/users/', authMiddleware.ensureAuth, UserController.getUsers);
// api.get('/users/:id', authMiddleware.ensureAuth, UserController.getUserById);

module.exports = api;