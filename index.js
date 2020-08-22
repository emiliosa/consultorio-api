// 'use strict'

// console.log(require('dotenv').config());

// const mongoose = require('mongoose');
// const app = require('./src/app');
// const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// if (process.env.NODE_ENV === 'development') {
//   // require('config.js').config();
// }

// // Le indicamos a Mongoose que haremos la conexión con Promesas
// mongoose.Promise = global.Promise;
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     // Cuando se realiza la conexión, lanzamos este mensaje por consola
//     console.log("database up with mogoose with connection string:", connectionString);

//     // CREAR EL SERVIDOR WEB CON NODEJS
//     app.listen(process.env.APP_PORT, process.env.HOST, () => console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`));
//   })
//   // Si no se conecta correctamente escupimos el error
//   .catch(err => console.log(err));





'use strict';

console.log(require('dotenv').config());
const app = require('./src/app');
const mongoose = require('mongoose');
const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;

if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
}

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log("database up with mogoose with connection string:", connectionString);

    // CREAR EL SERVIDOR WEB CON NODEJS
    app.listen(process.env.PORT, process.env.HOST, () => console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`));
  })
  // Si no se conecta correctamente escupimos el error
  .catch(err => console.log(err));




  

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(process.env.PORT, process.env.HOST);
// console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);












// 'use strict';

// console.log(require('dotenv').config());
// const express = require('express');

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(8080, "0.0.0.0");
// console.log(`Running on http://0.0.0.0:8080`);