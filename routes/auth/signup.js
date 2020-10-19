const express = require('express');
const { User } = require('../../models/User');
const { body } = require('express-validator');
const validateRequest = require('../../middlewares/validateRequest');
const jwt = require('jsonwebtoken');
const keys = require('../../keys');

const router = express.Router();

router.post(
  '/api/auth/signup',
  [
    body('username')
      .not()
      .isEmpty()
      .isString()
      .withMessage('username must be provided'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be 4 to 20 characters long'),
  ],
  validateRequest,
  async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('username already in use!');
    }

    const user = new User({
      username,
      password,
    });
    await user.save();

    // generate jwt
    const userJwt = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      keys.JWT_SECRET
    );

    req.session.jwt = userJwt;

    res.status(201).send(user);
  }
);

module.exports = {
  signupRouter: router,
};
