const express = require('express');
const { User } = require('../../models/User');

const router = express.Router();

router.get('/api/auth/currentuser', async (req, res) => {
  if (!req.currentUser) {
    res.send({ currentUser: null });
  }
  console.log('currentUser ->', req.currentUser);
  const user = await User.findById(req.currentUser.id);

  res.send({
    currentUser: user,
  });
});

module.exports = {
  currentUserRouter: router,
};
