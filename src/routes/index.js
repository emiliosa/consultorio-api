'use strict'

const userController = require('../controllers/user');
const recipeController = require('../controllers/recipe');
const appointmentController = require('../controllers/appointment');
const api = require('express').Router();
// const authMiddleware = require('../middlewares/authenticated');

// api.get('/users/:id', authMiddleware.ensureAuth, userController.getUserById);

// login
api.post('/login/', userController.login);
// listar usuarios
api.get('/users/', userController.getUsers);
// ver usuario
api.get('/users/:id', userController.getUserById);
// crear usuario
api.post('/users/', userController.createUser);
// agregar datos a usuario
api.put('/users/:id', userController.updateUser);
// eliminar usuario
api.delete('/users/:id', userController.deleteUser);

// listar recetas
api.get('/recipes/', recipeController.getRecipes);
// ver receta
api.get('/recipes/:id', recipeController.getRecipeById);
// crear receta
api.post('/recipes/', recipeController.createRecipe);
// agregar datos a receta
api.put('/recipes/:id', recipeController.updateRecipe);
// eliminar receta
api.delete('/recipes/:id', recipeController.deleteRecipe);

// listar turnos
api.get('/appointments/', appointmentController.getAppointments);
// ver turno
api.get('/appointments/:id', appointmentController.getAppointmentById);
// crear turno
api.post('/appointments/', appointmentController.createAppointment);
// agregar datos a turno
api.put('/appointments/:id', appointmentController.updateAppointment);
// eliminar turno
api.delete('/appointments/:id', appointmentController.deleteAppointment);

module.exports = api;