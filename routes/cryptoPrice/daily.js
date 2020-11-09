const express = require('express');
const axios = require('axios');
const keys = require('../../keys');

const router = express.Router();

router.get('/api/price/daily', async (req, res) => {
  const { symbol, market } = req.query;
  const limit = 365;

  const dailyPrices = await axios.get(
    `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=${market}&limit=${limit}&api_key=${keys.CRYPTOCOMPARE_KEY}`
  );

  const timeSeries = dailyPrices.data.Data.Data;
  let data = [];
  timeSeries.forEach((item) => {
    data.push([item.time, item.open, item.high, item.low, item.close]);
  });

  const response = {
    chart: {
      type: 'Candles',
      data: data,
    },
  };

  res.send(response);
});

module.exports = {
  dailyPriceRouter: router,
};
