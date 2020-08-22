const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Estamos en el super servicio que armo Tomas Malio ;)',
}));

const port = parseInt(process.env.PORT, 10) || 8000;

const server = http.createServer(app);
server.listen(port);

module.exports = app;