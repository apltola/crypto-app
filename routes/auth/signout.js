const express = require('express');

const router = express.Router();

router.post('/api/auth/signout', (req, res) => {
  req.session = null;

  res.send({});
});

module.exports = {
  signoutRouter: router,
};
