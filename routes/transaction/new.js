const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.post('/api/transaction', requireAuth, async (req, res) => {
  console.log('req.body -> ', req.body);
  const {
    portfolioId,
    type,
    coin,
    quantity,
    boughtWith,
    pricePerCoin,
    date,
  } = req.body;

  const portfolio = await Portfolio.findById(portfolioId);
  if (!portfolio) {
    return res.status(404).send('portfolio not found');
  }

  portfolio.set({
    transactions: [
      ...portfolio.transactions,
      {
        type,
        coin,
        quantity: quantity > 0 ? quantity.toFixed(8) : -quantity.toFixed(8),
        //quantity: quantity > 0 ? quantity : -quantity,
        boughtWith,
        pricePerCoin,
        date: date,
      },
    ],
  });
  await portfolio.save();
  await portfolio.calculateHoldings();

  res.send(portfolio);
});

module.exports = {
  createTransactionRouter: router,
};

/* 

*/
