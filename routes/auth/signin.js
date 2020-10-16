const express = require('express');
const { User } = require('../../models/User');
const { body } = require('express-validator');
const validateRequest = require('../../middlewares/validateRequest');
const jwt = require('jsonwebtoken');
const keys = require('../../keys');

const router = express.Router();

router.post(
  '/api/auth/signin',
  [
    body('username')
      .not()
      .isEmpty()
      .isString()
      .withMessage('username must be provided'),
    body('password').not().isEmpty().withMessage('password must be provided'),
  ],
  validateRequest,
  async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ error: 'incorrect username or password' });
    }

    const passwordsMatch = await user.comparePassword(password, user.password);
    if (!passwordsMatch) {
      return res.status(400).send({ error: 'incorrect username or password' });
    }

    // generate jwt
    const userJwt = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      keys.JWT_SECRET
    );

    req.session.jwt = userJwt;
    res.status(200).send(user);
  }
);

module.exports = {
  signinRouter: router,
};
