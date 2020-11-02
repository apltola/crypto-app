const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');
const { User } = require('../../models/User');

const router = express.Router();

router.delete('/api/portfolio/:id', requireAuth, async (req, res) => {
  await Portfolio.findByIdAndDelete(req.params.id);
  const portfolios = await Portfolio.find({ userId: req.currentUser.id });

  res.send(portfolios);
});

module.exports = {
  deletePortfolioRouter: router,
};
