const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('jeejee crypto_app');
});

app.listen(3000, () => {
  console.log('server up at 3000');
});
