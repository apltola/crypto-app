const express = require('express');
const axios = require('axios');
const keys = require('../../keys');

const router = express.Router();

router.get('/api/price/current', async (req, res) => {
  const { symbols } = req.query;
  const response = await axios.get(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbols}&tsyms=EUR&api_key=${keys.CRYPTOCOMPARE_KEY}`
  );
  const raw = response.data.RAW;
  const ret = {};

  for (const key in raw) {
    if (raw.hasOwnProperty(key)) {
      const element = raw[key];

      for (const elementKey in element) {
        if (element.hasOwnProperty(elementKey)) {
          const el2 = element[elementKey];
          ret[key.toLowerCase()] = {
            [elementKey.toLowerCase()]: el2.PRICE,
            [`${elementKey.toLowerCase()}_24h_change`]: el2.CHANGEPCT24HOUR,
          };
        }
      }
    }
  }

  res.send(ret);
});

module.exports = {
  currentPriceRouter: router,
};
