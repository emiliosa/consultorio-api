'user strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const authCallback = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: 'La peticion no tiene la cabecera de autenticación'
    });
  }

  try {
    const token = req.headers.authorization.replace(/['"]+/g, '');
    const payload = jwt.decode(token, process.env.SECRET_KEY);
    if (payload.exp > moment().unix()) {
      return res.status(401).send({
        message: 'EL token ha expirado'
      });
    }
  } catch (ex) {
    return res.status(404).send({
      message: 'EL token no es valido'
    });
  }
  req.user = payload;
  next();
};

exports.ensureAuth = authCallback;