const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const keys = require('./keys');
const { app } = require('./app');

const connectToDb = async () => {
  try {
    await mongoose.connect(keys.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('🥭 Connected to M0ngo');
  } catch (error) {
    console.log('Mongo connect failed...', error);
    throw new Error('db connection failed');
  }
};

if (process.env.ENVI === 'production') {
  const dist = path.resolve(__dirname, 'client', 'dist');
  app.use('/', express.static(dist));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dist, 'index.html'));
  });
}

app.listen(3000, () => {
  console.log('🌐 Server up at 3000');
});

connectToDb();
