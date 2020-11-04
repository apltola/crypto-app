const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const currentUser = require('./middlewares/currentUser');
const cachetest = require('./middlewares/cachetest');
const { currentUserRouter } = require('./routes/auth/currentUser');
const { signinRouter } = require('./routes/auth/signin');
const { signupRouter } = require('./routes/auth/signup');
const { signoutRouter } = require('./routes/auth/signout');
const { indexPortfolioRouter } = require('./routes/portfolio');
const { createTransactionRouter } = require('./routes/transaction/new');
const { createHoldingRouter } = require('./routes/holding/new');
const { showUserRouter } = require('./routes/auth/showUser');
const { createPortfolioRouter } = require('./routes/portfolio/new');
const { showPortfolioRouter } = require('./routes/portfolio/show');
const { deleteHoldingRouter } = require('./routes/holding/delete');
const { deleteUserRouter } = require('./routes/auth/delete');
const { deletePortfolioRouter } = require('./routes/portfolio/delete');
const { dailyPriceRouter } = require('./routes/cryptoPrice/daily');
const { editPortfolioRouter } = require('./routes/portfolio/edit');

const app = express();
app.use(bodyParser.json());
app.set('trust proxy', true);

app.use(
  cookieSession({
    signed: false,
    secure: process.env.ENVI === 'production',
  })
);

app.use(cachetest);
app.use(currentUser);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(showUserRouter);
app.use(deleteUserRouter);

app.use(indexPortfolioRouter);
app.use(createPortfolioRouter);
app.use(showPortfolioRouter);
app.use(editPortfolioRouter);
app.use(deletePortfolioRouter);
app.use(createTransactionRouter);
app.use(createHoldingRouter);
app.use(deleteHoldingRouter);

app.use(dailyPriceRouter);

app.get('/api/test', (req, res) => {
  res.send(
    `hello hello node.env = ${process.env.NODE_ENV} | environment = ${process.env.ENVI}`
  );
});

module.exports = { app };
