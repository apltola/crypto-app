const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');
const { User } = require('../../models/User');

const router = express.Router();

router.post('/api/portfolio/:userId', requireAuth, async (req, res) => {
  const { name } = req.body;
  const portfolio = new Portfolio({
    userId: req.params.userId,
    name,
  });
  await portfolio.save();

  const user = await User.findById(req.params.userId);
  /* console.log(user);
  user.set({
    portfolios: [...user.portfolios, portfolio.id],
  });
  //user.portfolios.push(portfolio.id);
  await user.save(); */

  res.send(user);
});

module.exports = {
  createPortfolioRouter: router,
};
