const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set('trust proxy', true);

app.get('/api/test', (req, res) => {
  res.send(
    `node.env = ${process.env.NODE_ENV} | environment = ${process.env.ENVI}`
  );
});

module.exports = { app };
