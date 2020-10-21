const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.get('/api/portfolio', requireAuth, async (req, res) => {
  const portfolios = await Portfolio.find({ userId: req.currentUser.id });
  res.send(portfolios);
});

// for testing purposes
router.post('/api/portfolio/reset/:id', requireAuth, async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  portfolio.set({
    holdings: [],
    transactions: [],
  });
  await portfolio.save();
  res.send(portfolio);
});

// for testing purposes
router.delete('/api/portfolio', requireAuth, async (req, res) => {
  await Portfolio.deleteMany({});
  const portfolios = await Portfolio.find({});
  res.send(portfolios);
});

module.exports = {
  indexPortfolioRouter: router,
};
