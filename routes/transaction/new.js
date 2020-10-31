const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.post('/api/transaction', requireAuth, async (req, res) => {
  //console.log('req.body -> ', req.body);
  const {
    portfolioId,
    type,
    coinName,
    coinSymbol,
    quantity,
    boughtWith,
    soldWith,
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
        coinName,
        coinSymbol,
        quantity: boughtWith ? quantity : -quantity,
        boughtWith,
        soldWith,
        pricePerCoin,
        date: date,
      },
    ],
  });
  const holding = portfolio.holdings.find((el) => el.coinSymbol === coinSymbol);
  if (boughtWith) {
    holding.quantity =
      parseFloat(holding.quantity) + parseFloat(req.body.quantity);
  } else {
    holding.quantity =
      parseFloat(holding.quantity) - parseFloat(req.body.quantity);
  }
  await portfolio.save();

  res.send(portfolio);
});

module.exports = {
  createTransactionRouter: router,
};
