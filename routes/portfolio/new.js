const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');
const { User } = require('../../models/User');

const router = express.Router();

router.post('/api/portfolio/user/:userId', requireAuth, async (req, res) => {
  const { name } = req.body;
  const portfolio = new Portfolio({
    userId: req.params.userId,
    name,
  });
  await portfolio.save();

  const user = await User.findById(req.params.userId);

  res.send(user);
});

module.exports = {
  createPortfolioRouter: router,
};
