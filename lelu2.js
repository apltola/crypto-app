const eachDayOfInterval = require('date-fns/eachDayOfInterval');
const isSameDay = require('date-fns/isSameDay');

const interval = eachDayOfInterval({
  start: 1604327820000,
  end: new Date(),
});

const prevArr = [
  {
    date: new Date(),
    symbol: 'btc',
    quantity: 1,
  },
  {
    date: new Date(),
    symbol: 'xtz',
    quantity: 1,
  },
];

const newArr = [
  {
    date: new Date(),
    symbol: 'btc',
    quantity: 1,
  },
  {
    date: new Date(),
    symbol: 'eth',
    quantity: 1,
  },
];

let updatedArr = prevArr;
newArr.forEach((v) => {
  const i = updatedArr.findIndex((p) => p.symbol === v.symbol);
  if (i > -1) {
    const ref = updatedArr[i].quantity;
    updatedArr[i].quantity = ref + v.quantity;
  } else {
    updatedArr.push(v);
  }
});

console.log(updatedArr);
