'use strict';

const crypto = require('crypto');

exports.imageFilter = (req, file, cb) => {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

exports.generateRandomToken = async () => {
  const buffer = await new Promise((resolve, reject) => {
    crypto.randomBytes(256, (ex, buffer) => {
      if (ex) {
        reject("error generating token");
      }
      resolve(buffer);
    });
  });
  const token = crypto
    .createHash("sha1")
    .update(buffer)
    .digest("hex");

  console.log("token generado aleatoriamente: ", token);
  return token;
};

exports.getAPIQualifiedName = () => {
  return `http://${process.env.HOST}:${process.env.PORT}/api`;
};