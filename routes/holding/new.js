const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.post(
  '/api/portfolio/:portfolioId/holding',
  requireAuth,
  async (req, res) => {
    console.log('portfolio -> ', req.params.portfolioId);
    const portfolio = await Portfolio.findById(req.params.portfolioId);
    portfolio.set({
      holdings: [...portfolio.holdings, req.body],
    });
    await portfolio.save();

    res.send(portfolio);
  }
);

module.exports = {
  createHoldingRouter: router,
};
