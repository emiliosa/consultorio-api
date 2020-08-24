'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const routes = require('./routes/index');

//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(cors())
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

//   next();
// });

// Cargamos las rutas
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;