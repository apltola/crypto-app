const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.delete(
  '/api/portfolio/:portfolioId/holding/:holdingId',
  requireAuth,
  async (req, res) => {
    const portfolio = await Portfolio.findById(req.params.portfolioId);

    portfolio.set({
      holdings: portfolio.holdings.filter(holding => {
        return holding.id !== req.params.holdingId
      }),
    });
    await portfolio.save();

    res.send(portfolio);
  }
);

module.exports = {
  deleteHoldingRouter: router,
};
