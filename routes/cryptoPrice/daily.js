const express = require('express');
const axios = require('axios');
const KEY = 'LQS7ZT68XMIZEFHS';

const router = express.Router();

router.get('/api/price/daily', async (req, res) => {
  const { symbol, market } = req.query;

  const dailyPrices = await axios.get(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=${market}&apikey=${KEY}`
  );

  const timeSeries = dailyPrices.data['Time Series (Digital Currency Daily)'];
  let data = [];

  for (const key in timeSeries) {
    if (timeSeries.hasOwnProperty(key)) {
      const element = timeSeries[key];
      const time = new Date(key).getTime();
      const open = parseFloat(element['1a. open (EUR)']);
      const high = parseFloat(element['2a. high (EUR)']);
      const low = parseFloat(element['3a. low (EUR)']);
      const close = parseFloat(element['4a. close (EUR)']);
      data.push([time, open, high, low, close]);
    }
  }
  data.reverse();
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
