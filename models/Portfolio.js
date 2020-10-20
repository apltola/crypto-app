const mongoose = require('mongoose');

const holdingSchema = new mongoose.Schema({
  coin: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

const transactionSchema = new mongoose.Schema({
  type: {
    type: String, //'buy' or 'sell'
    required: true,
  },
  coin: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  boughtWith: {
    type: String,
  },
  soldWith: {
    type: String,
  },
  pricePerCoin: {
    type: Number,
    required: true,
  },
});

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  holdings: [holdingSchema],
  transactions: [transactionSchema],
});

portfolioSchema.methods.calculateHoldings = function () {
  const reducer = (acc, cur, idx, src) => {
    let arr = [];
    if (!Array.isArray(acc)) {
      arr = [
        {
          coin: acc.coin,
          quantity: acc.quantity,
        },
      ];
    } else {
      arr = acc;
    }

    const i = arr.findIndex((el) => el.coin === cur.coin);
    if (i === -1) {
      return [...arr, { coin: cur.coin, quantity: cur.quantity }];
    } else {
      arr[i].quantity = arr[i].quantity + cur.quantity;
      return arr;
    }
  };

  this.set('holdings', this.transactions.reduce(reducer));
};

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = { Portfolio };
