'use strict'

const userController = require('../controllers/user');
const recipeController = require('../controllers/recipe');
const appointmentController = require('../controllers/appointment');
const api = require('express').Router();
const authMiddleware = require('../middlewares/authorization');

// login
api.post('/login/', userController.login);
// registrar usuario (formulario SignUp)
api.post('/users/register', userController.registerUser);
// listar usuarios
api.get('/users/', authMiddleware.authCallback, userController.getUsers);
// ver usuario
api.get('/users/:id', authMiddleware.authCallback, userController.getUserById);
// crear usuario
api.post('/users/', authMiddleware.authCallback, userController.createUser);
// agregar datos a usuario
api.put('/users/:id', authMiddleware.authCallback, userController.updateUser);
// eliminar usuario
api.delete('/users/:id', authMiddleware.authCallback, userController.deleteUser);

// listar recetas
api.get('/recipes/', authMiddleware.authCallback, recipeController.getRecipes);
// ver receta
api.get('/recipes/:id', authMiddleware.authCallback, recipeController.getRecipeById);
// crear receta
api.post('/recipes/', authMiddleware.authCallback, recipeController.createRecipe);
// agregar datos a receta
api.put('/recipes/:id', authMiddleware.authCallback, recipeController.updateRecipe);
// eliminar receta
api.delete('/recipes/:id', authMiddleware.authCallback, recipeController.deleteRecipe);

// listar turnos
api.get('/appointments/', authMiddleware.authCallback, appointmentController.getAppointments);
// ver turno
api.get('/appointments/:id', authMiddleware.authCallback, appointmentController.getAppointmentById);
// crear turno
api.post('/appointments/', authMiddleware.authCallback, appointmentController.createAppointment);
// agregar datos a turno
api.put('/appointments/:id', authMiddleware.authCallback, appointmentController.updateAppointment);
// eliminar turno
api.delete('/appointments/:id', authMiddleware.authCallback, appointmentController.deleteAppointment);

module.exports = api;