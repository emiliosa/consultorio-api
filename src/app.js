'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes/index');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

//cargar middlewares

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// definir directorio público
app.use(express.static(__dirname + '/public'));

// enable files upload
app.use(fileUpload({ createParentPath: true }));

// enable morgan
app.use(morgan('dev'));

// cors
app.use(cors({origin: true, credentials: true}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// app routes
app.use('/api', routes);

module.exports = app;