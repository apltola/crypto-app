const express = require('express');
const { User } = require('../../models/User');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.delete('/api/auth/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send({ errors: [{ msg: 'user not found' }] });
  }

  await Portfolio.deleteMany({ userId: req.params.id });
  await User.findByIdAndDelete(req.params.id);

  res.send('deleted');
});

module.exports = {
  deleteUserRouter: router,
};
