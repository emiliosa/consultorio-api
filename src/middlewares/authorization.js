'user strict'

const jwt = require('jsonwebtoken');

exports.authCallback = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: 'La peticion no tiene la cabecera de autenticación'
    });
  }

  const token = req.headers.authorization.split(' ')[1];
  console.log("el token es: ", token);

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    const msg = { auth: false, message: 'Failed to authenticate token.' };

    console.log("token verify: ", err, decoded);

    if (err) {
      res.status(500).send(msg);
    }

    req.user = decoded.user;
    next();
  });
};