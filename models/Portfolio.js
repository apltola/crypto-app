const mongoose = require('mongoose');

const holdingSchema = new mongoose.Schema(
  {
    coinName: {
      type: String,
      required: true,
    },
    coinSymbol: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    imgUrl: {
      type: String,
    },
    //transactedWith: [],
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

const transactionSchema = new mongoose.Schema(
  {
    type: {
      type: String, //'buy' or 'sell'
      required: true,
    },
    coinName: {
      type: String,
      required: true,
    },
    coinSymbol: {
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

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      //ref: 'User',
    },
    name: {
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

/* portfolioSchema.methods.calculateHoldings = async function () {
  const reducer = (acc, cur, idx, src) => {
    let arr = [];
    if (!Array.isArray(acc)) {
      arr = [
        {
          coinName: acc.coinName,
          coinSymbol: acc.coinSymbol,
          quantity: acc.quantity,
        },
      ];
    } else {
      arr = acc;
    }

    const i = arr.findIndex((el) => el.coinSymbol === cur.coinSymbol);
    if (i === -1) {
      return [
        ...arr,
        {
          coinName: cur.coinName,
          coinSymbol: cur.coinSymbol,
          quantity: cur.quantity,
        },
      ];
    } else {
      arr[i].quantity = arr[i].quantity + cur.quantity;

      return arr;
    }
  };

  if (this.transactions.length === 1) {
    this.set('holdings', [
      {
        coinName: this.transactions[0].coinName,
        coinSymbol: this.transactions[0].coinSymbol,
        quantity: this.transactions[0].quantity,
      },
    ]);
  } else {
    this.set('holdings', this.transactions.reduce(reducer));
  }

  await this.save();
}; */

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = { Portfolio };
