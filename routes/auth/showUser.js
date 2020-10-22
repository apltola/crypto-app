const express = require('express');
const { User } = require('../../models/User');

const router = express.Router();

router.get('/api/auth/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send({ errors: [{ msg: 'user not found' }] });
  }

  res.send(user);
});

module.exports = {
  showUserRouter: router,
};
