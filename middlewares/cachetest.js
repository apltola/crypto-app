module.exports = function (req, res, next) {
  if (req.url.includes('.css') || req.url.includes('.js') || req.url === '/') {
    res.setHeader('Cache-Control', `no-store`);
  }

  next();
};
