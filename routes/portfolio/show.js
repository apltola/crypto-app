const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');
const { User } = require('../../models/User');

const router = express.Router();

router.get('/api/portfolio/:id', requireAuth, async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio) {
    return res.status(404).send({ errors: [{ msg: 'portfolio not found' }] });
  }

  res.send(portfolio);
});

module.exports = {
  showPortfolioRouter: router,
};
