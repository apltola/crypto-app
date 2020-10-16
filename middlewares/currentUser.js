const jwt = require('jsonwebtoken');
const keys = require('../keys');

module.exports = function (req, res, next) {
  if (!req.session) {
    return next();
  }

  if (!req.session.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, keys.JWT_SECRET);
    console.log('jwt payload -> ', payload);

    req.currentUser = payload;
  } catch (error) {
    console.log('jwt verify failed');
  }

  next();
};
