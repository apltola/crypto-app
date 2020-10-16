const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const { currentUserRouter } = require('./routes/auth/currentUser');
const { signinRouter } = require('./routes/auth/signin');
const { signupRouter } = require('./routes/auth/signup');
const { signoutRouter } = require('./routes/auth/signout');
const currentUser = require('./middlewares/currentUser');

const app = express();
app.use(bodyParser.json());
app.set('trust proxy', true);

app.use(
  cookieSession({
    signed: false,
    secure: process.env.ENVI === 'prouction',
  })
);

app.use(currentUser);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.get('/api/test', (req, res) => {
  res.send(
    `hello hello hello node.env = ${process.env.NODE_ENV} | environment = ${process.env.ENVI}`
  );
});

module.exports = { app };