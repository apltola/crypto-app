const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');
const isSameDay = require('date-fns/isSameDay');
const format = require('date-fns/format');
const baseUrl = 'https://min-api.cryptocompare.com/data/v2/histoday';
const key = 'a26f87cf257c60bb469cb878499a30995db5c007b7773d42a2ce49206fe49c27';
const axios = require('axios');
const router = express.Router();

router.get('/api/portfolio/:id/valuehistory', requireAuth, async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);

  await portfolio.buildHoldingsHistory();

  let coins = [];
  portfolio.holdingsHistory.forEach((item) => {
    item.holdings.forEach((holding) => {
      if (!coins.includes(holding.symbol)) {
        coins.push(holding.symbol);
      }
    });
  });

  const getCryptoPriceData = async (limit) => {
    const promises = [];

    const doFetch = (coin) => {
      return new Promise((resolve, reject) => {
        return resolve(
          axios.get(
            `${baseUrl}?fsym=${coin}&tsym=eur&limit=${limit}&api_key=${key}`
          )
        );
      });
    };

    coins.forEach((coin) => {
      promises.push(doFetch(coin));
    });

    const priceData = [];
    return Promise.all(promises).then((res) => {
      res.forEach((r, idx) => {
        priceData.push({
          coin: coins[idx],
          timefrom: r.data.Data.TimeFrom,
          timeto: r.data.Data.TimeTo,
          data: r.data.Data.Data,
        });
      });
      return priceData;
    });
  };

  const priceData = await getCryptoPriceData(portfolio.holdingsHistory.length);

  const valueHistory = [];
  const categories = [];
  const data = [];
  portfolio.holdingsHistory.forEach((historyItem, historyIdx) => {
    // joka päivälle pitää laskee cryptoilta valuet ja ynnätä ne
    let valueSum = 0;

    historyItem.holdings.forEach((holding) => {
      const priceObj = priceData.find((v) => v.coin === holding.symbol);
      const cryptoPrice = priceObj.data.find((v) =>
        isSameDay(v.time * 1000, historyItem.date)
      );
      const close = cryptoPrice.close;
      const value = close * holding.quantity;
      valueSum = valueSum + value;
    });

    valueHistory.push([
      new Date(historyItem.date).getTime(),
      valueSum.toFixed(0),
    ]);
    //categories.push(new Date(historyItem.date));
    //categories.push(format(historyItem.date, 'MMM dd'));
    //data.push(valueSum.toFixed(0));
  });

  //res.send({ categories, data });
  res.send({ data: valueHistory, name: portfolio.name });
});

module.exports = {
  pfValueHistoryRouter: router,
};

//5fa2b41e5e63bd638e4e1364
