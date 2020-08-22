'use strict'

const userController = require('../controllers/user');
const api = require('express').Router();
// const authMiddleware = require('../middlewares/authenticated');

// listar usuarios
api.get('/users/', userController.getUsers);

// ver usuario
api.get('/users/:dni', userController.getUserByDni);

// crear usuario
api.post('/users/', userController.createUser);

// actualizar usuario
// api.patch('/users/:dni', userController.updateUser);

// agregar datos a usuario
api.put('/users/:dni', userController.updateUser);


// api.get('/users/:id', authMiddleware.ensureAuth, userController.getUserById);

module.exports = api;