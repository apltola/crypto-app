const { validationResult } = require('express-validator');

module.exports = function (req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send('invalid request parameters');
  }

  next();
};
