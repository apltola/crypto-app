module.exports = function (req, res, next) {
  console.log('req.url -> ', req.url);
  if (req.url.includes('.css') || req.url.includes('.js') || req.url === '/') {
    console.log('css or javascript or root');
    res.setHeader('Cache-Control', `max-age=0, no-cache`);
  }

  next();
};
