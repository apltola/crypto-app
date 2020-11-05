const eachDayOfInterval = require('date-fns/eachDayOfInterval');
const isSameDay = require('date-fns/isSameDay');

const interval = eachDayOfInterval({
  start: 1604327820000,
  end: new Date(),
});

console.log(interval);
