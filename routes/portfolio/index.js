const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.get('/api/portfolio', requireAuth, async (req, res) => {
  const portfolios = await Portfolio.find({ userId: req.currentUser.id });
  res.send(portfolios);
});

module.exports = {
  indexPortfolioRouter: router,
};
