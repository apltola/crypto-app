const express = require('express');

const router = express.Router();

router.get('/api/auth/currentuser', (req, res) => {
  res.send({
    currentUser: req.currentUser || null,
  });
});

module.exports = {
  currentUserRouter: router,
};
