module.exports = function (req, res, next) {
  if (!req.currentUser) {
    return res.status(401).send({ error: 'not authorized' });
  }

  next();
};
