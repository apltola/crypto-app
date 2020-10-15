const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
  res.send('jeejee crypto app testing testing');
});

if (process.env.NODE_ENV === 'production') {
  console.log('production!!');
  const dist = path.resolve(__dirname, 'client', 'dist');
  app.use('/', express.static(dist));
  app.get('*', (req, res) => {
    //res.sendFile(path.resolve(dist, 'index.html'));
    res.sendFile('testi.html');
  });
}

app.listen(3000, () => {
  console.log('server up at 3000');
});
