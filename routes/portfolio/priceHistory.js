const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');
var isSameDay = require('date-fns/isSameDay');

const router = express.Router();

router.get('/api/portfolio/:id/pricehistory', requireAuth, async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);

  const sortedTransactions = portfolio.transactions.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  let data = [];
  sortedTransactions.forEach((tr, i) => {
    if (i === 0) {
      data.push({
        date: tr.date,
        holdings: [
          {
            coinName: tr.coinName,
            coinSymbol: tr.coinSymbol,
            quantity: tr.quantity,
          },
        ],
      });
    } else {
      const prev = sortedTransactions[i - 1];
      if (isSameDay(prev.date, tr.date)) {
        // lisää objectiin uus coin tai lisää quantityyn

        const foundIdx = prev.holdings.findIndex(
          (h) => h.coinSymbol === tr.coinSymbol
        );

        // jos crypto löytyy jo, lisää quantity
        if (foundIdx > -1) {
          const addition = tr.type === 'buy' ? tr.quantity : -tr.quantity;
          const oldQuant =
            sortedTransactions[i - 1].holdings[foundIdx].quantity;

          sortedTransactions[i - 1].holdings[foundIdx].quantity =
            oldQuant + addition;
        } else {
          // ei löydy, lisää uus alkio
          sortedTransactions[i - 1].holdings.push({
            coinName: tr.coinName,
            coinSymbol: tr.coinSymbol,
            quantity: tr.quantity,
          });
        }
      } else {
        data.push({
          date: tr.date,
          holdings: [
            {
              coinName: tr.coinName,
              coinSymbol: tr.coinSymbol,
              quantity: tr.quantity,
            },
          ],
        });
      }
    }
  });

  res.send('jeejee');
});

module.exports = {
  pfPriceHistoryRouter: router,
};

//5fa2b41e5e63bd638e4e1364
