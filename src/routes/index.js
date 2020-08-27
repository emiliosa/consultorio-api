'use strict'

const UserController = require('../controllers/user');
const RecipeController = require('../controllers/recipe');
const AppointmentController = require('../controllers/appointment');
const PatientController = require('../controllers/patient');
const ProfessionalController = require('../controllers/professional');
const api = require('express').Router();
const authMiddleware = require('../middlewares/authorization');

// login
api.post('/login/', UserController.login);
// registrar usuario (formulario SignUp)
api.post('/users/register', UserController.registerUser);
// listar usuarios
api.get('/users/', authMiddleware.authCallback, UserController.getUsers);
// ver usuario
api.get('/users/:id', authMiddleware.authCallback, UserController.getUserById);
// crear usuario
api.post('/users/', authMiddleware.authCallback, UserController.createUser);
// agregar datos a usuario
api.put('/users/:id', authMiddleware.authCallback, UserController.updateUser);
// eliminar usuario
api.delete('/users/:id', authMiddleware.authCallback, UserController.deleteUser);
// enviar mail regenerar password
api.post('/forgot-password', /*authMiddleware.authCallback,*/ UserController.forgotPassword);
// resetear passowrd
api.post('/reset-password/:token', /*authMiddleware.authCallback,*/ UserController.resetPassword);

// listar recetas
api.get('/recipes/', authMiddleware.authCallback, RecipeController.getRecipes);
// ver receta
api.get('/recipes/:id', authMiddleware.authCallback, RecipeController.getRecipeById);
// crear receta
api.post('/recipes/', authMiddleware.authCallback, RecipeController.createRecipe);
// agregar datos a receta
api.put('/recipes/:id', authMiddleware.authCallback, RecipeController.updateRecipe);
// descargar imagenes de recetas
api.get('/recipes/download/:id/:filename', /*authMiddleware.authCallback,*/ RecipeController.downloadFiles);
// eliminar receta
api.delete('/recipes/:id', authMiddleware.authCallback, RecipeController.deleteRecipe);

// listar turnos
api.get('/appointments/', authMiddleware.authCallback, AppointmentController.getAppointments);
// ver turno
api.get('/appointments/:id', authMiddleware.authCallback, AppointmentController.getAppointmentById);
// crear turno
api.post('/appointments/', authMiddleware.authCallback, AppointmentController.createAppointment);
// agregar datos a turno
api.put('/appointments/:id', authMiddleware.authCallback, AppointmentController.updateAppointment);
// eliminar turno
api.delete('/appointments/:id', authMiddleware.authCallback, AppointmentController.deleteAppointment);

// listar pacientes
api.get('/patients/', authMiddleware.authCallback, PatientController.getPatients);
// listar profesionales
api.get('/professionals/', authMiddleware.authCallback, ProfessionalController.getProfessionals);

module.exports = api;