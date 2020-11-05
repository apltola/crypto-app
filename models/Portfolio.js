const mongoose = require('mongoose');
const eachDayOfInterval = require('date-fns/eachDayOfInterval');
const isSameDay = require('date-fns/isSameDay');

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
    //hae päivän transaktio(t)
    const trsForDate = this.transactions.filter((tr) =>
      isSameDay(tr.date, intervalDate)
    );
    console.log(
      'intervalIdx -> ',
      intervalIdx,
      'trsForDate.length ',
      trsForDate.length
    );
    if (trsForDate.length > 0) {
      trsForDate.forEach((tr, transIdx) => {
        // yhen päivän transaktiot pitää kaikki työntää samaan alkioon
        let quant = tr.type === 'buy' ? tr.quantity : -tr.quantity;
        const lastIdx = history.length - 1;
        let holdingIdx = -1;
        let prevQuant = 0;
        if (lastIdx >= 0) {
          holdingIdx = history[lastIdx].holdings.findIndex(
            (h) => h.symbol === tr.coinSymbol
          );
        }
        if (holdingIdx > -1) {
          prevQuant = history[lastIdx].holdings[holdingIdx].quantity;
        }

        if (transIdx === 0) {
          history.push({
            date: intervalDate,
            holdings: [
              {
                symbol: tr.coinSymbol,
                quantity: prevQuant + quant,
              },
            ],
          });
        } else {
          // onks coin jo alkiossa?
          const i = history[intervalIdx].holdings.findIndex(
            (h) => h.symbol === tr.coinSymbol
          );
          if (i > -1) {
            const oldQuant = history[intervalIdx].holdings[i].quantity;
            history[intervalIdx].holdings[i].quantity = oldQuant + quant;
          } else {
            history[intervalIdx].holdings.push({
              symbol: tr.coinSymbol,
              quantity: quant,
            });
          }
        }
      });
    } else {
      console.log('trsForDate.length = 0');
      if (intervalIdx === 0) {
        //intervallin eka päivä mutta ei transaktioit (ei pitäis olla tääl)
        console.log("shouldn't be here...");
        history.push({
          date: intervalDate,
          holdings: [],
        });
      } else {
        const lastIdx = history.length - 1;
        history.push({
          date: intervalDate,
          holdings: history[lastIdx].holdings,
        });
      }
    }
  });

  this.holdingsHistory = history;
  await this.save();
};

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
