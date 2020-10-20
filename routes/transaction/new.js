const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.post('/api/transaction', requireAuth, async (req, res) => {
  const { portfolioId } = req.body;
  const portfolio = await Portfolio.findById(portfolioId);
  if (!portfolio) {
    return res.status(404).send('portfolio not found');
  }

  portfolio.set({
    transactions: [
      ...portfolio.transactions,
      {
        type: 'buy',
        coin: 'XTZ',
        quantity: (1.565656565656565).toFixed(8),
        boughtWith: 'EUR',
        pricePerCoin: 10000,
      },
    ],
  });
  await portfolio.save();
  portfolio.calculateHoldings();

  res.send(portfolio);
});

module.exports = {
  createTransactionRouter: router,
};

/* 

*/
