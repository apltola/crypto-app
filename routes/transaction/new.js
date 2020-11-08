const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');
const isSameDay = require('date-fns/isSameDay');

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

  // compute valuehistory...
  /* let value;
  const transactedWith = boughtWith || soldWith;
  if (transactedWith.toLowerCase() === portfolio.defaultFiat) {
    value = pricePerCoin * quantity;
    value = type === 'buy' ? value : -value;
  }

  const idx = portfolio.valueHistory.findIndex((v) => isSameDay(v[0], date));
  if (idx > -1) {
    const oldValue = portfolio.valueHistory[idx][1];
    portfolio.valueHistory[idx][1] = oldValue + value;
  } else {
    if (portfolio.valueHistory.length === 0) {
      portfolio.valueHistory.push([date, value]);
    } else {
      const lastIdx = portfolio.valueHistory.length - 1;
      const accumulation = portfolio.valueHistory[lastIdx][1];
      portfolio.valueHistory.push([date, accumulation + value]);
    }
  }

  //sort value history from oldest date to newest
  const sorted = portfolio.valueHistory.sort((a, b) => {
    return a[0] - b[0];
  });
  portfolio.valueHistory = sorted; */
  await portfolio.save();
  //portfolio.buildHoldingsHistory();

  res.send(portfolio);
});

module.exports = {
  createTransactionRouter: router,
};
