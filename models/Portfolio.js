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
  transactedWith: [],
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
  date: {
    type: mongoose.Schema.Types.Date,
  },
});

/* const currencySchema = new mongoose.Schema({

}) */

const portfolioSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

portfolioSchema.methods.calculateHoldings = async function () {
  const reducer = (acc, cur, idx, src) => {
    let arr = [];
    if (!Array.isArray(acc)) {
      arr = [
        {
          coin: acc.coin,
          quantity: acc.quantity,
          transactedWith: [acc.boughtWith || acc.soldWith],
        },
      ];
    } else {
      arr = acc;
    }

    const i = arr.findIndex((el) => el.coin === cur.coin);
    if (i === -1) {
      return [
        ...arr,
        {
          coin: cur.coin,
          quantity: cur.quantity,
          transactedWith: [cur.boughtWith || cur.soldWith],
        },
      ];
    } else {
      arr[i].quantity = arr[i].quantity + cur.quantity;
      if (!arr[i].transactedWith.includes(cur.boughtWith || cur.soldWith)) {
        arr[i].transactedWith = [
          ...arr[i].transactedWith,
          cur.boughtWith || cur.soldWith,
        ];
      }

      return arr;
    }
  };

  if (this.transactions.length === 1) {
    this.set('holdings', [
      {
        coin: this.transactions[0].coin,
        quantity: this.transactions[0].quantity,
        transactedWith: [
          this.transactions[0].boughtWith || this.transactions[0].soldWith,
        ],
      },
    ]);
  } else {
    this.set('holdings', this.transactions.reduce(reducer));
  }

  await this.save();
};

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = { Portfolio };
