module.exports =
  process.env.ENVI === 'production' ? require('./prod') : require('./dev');
