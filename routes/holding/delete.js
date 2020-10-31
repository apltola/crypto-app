const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.delete(
  '/api/portfolio/:portfolioId/holding/:symbol/:holdingId',
  requireAuth,
  async (req, res) => {
    const portfolio = await Portfolio.findById(req.params.portfolioId);

    portfolio.set({
      holdings: portfolio.holdings.filter((holding) => {
        return holding.id !== req.params.holdingId;
      }),
      transactions: portfolio.transactions.filter((trs) => {
        return trs.coinSymbol !== req.params.symbol;
      }),
    });
    await portfolio.save();

    res.send(portfolio);
  }
);

module.exports = {
  deleteHoldingRouter: router,
};
