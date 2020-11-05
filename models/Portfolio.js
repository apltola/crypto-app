const mongoose = require('mongoose');
const eachDayOfInterval = require('date-fns/eachDayOfInterval');
const isSameDay = require('date-fns/isSameDay');
const { tr } = require('date-fns/locale');

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
      type: Number,
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
    holdingsHistory: [],
    defaultFiat: {
      type: String,
      default: 'eur',
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

portfolioSchema.methods.buildHoldingsHistory = async function () {
  const sortedTransactions = this.transactions.sort((a, b) => {
    return a.date - b.date;
  });

  const interval = eachDayOfInterval({
    start: sortedTransactions[0].date,
    end: new Date().getTime(),
  });
  console.log('interval -> ', interval);

  let history = [];
  interval.forEach((intervalDate, intervalIdx) => {
    const trsForDate = this.transactions.filter((tr) =>
      isSameDay(tr.date, intervalDate)
    );

    history.push({
      date: intervalDate,
      holdings: [],
    });

    if (trsForDate.length > 0) {
      trsForDate.forEach((tr, transIdex) => {
        let quant = tr.quantity;
        const i = history[intervalIdx].holdings.findIndex(
          (h) => h.symbol === tr.coinSymbol
        );
        if (i === -1) {
          history[intervalIdx].holdings.push({
            symbol: tr.coinSymbol,
            quantity: quant,
          });
        } else {
          const ref = history[intervalIdx].holdings[i].quantity;
          history[intervalIdx].holdings[i].quantity = ref + quant;
        }
      });
    }

    if (intervalIdx > 0) {
      history[intervalIdx - 1].holdings.forEach((h) => {
        const i = history[intervalIdx].holdings.findIndex(
          (jee) => jee.symbol === h.symbol
        );
        if (i > -1) {
          const ref = history[intervalIdx].holdings[i].quantity;
          history[intervalIdx].holdings[i].quantity = ref + h.quantity;
        } else {
          history[intervalIdx].holdings.push({
            symbol: h.symbol,
            quantity: h.quantity,
          });
        }
      });
    }
  });
  this.holdingsHistory = history;
  await this.save();
};

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = { Portfolio };
