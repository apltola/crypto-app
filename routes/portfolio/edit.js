const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { Portfolio } = require('../../models/Portfolio');

const router = express.Router();

router.put('/api/portfolio/:id', requireAuth, async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);

  portfolio.set({
    name: req.body.name,
  });
  await portfolio.save();

  res.send(portfolio);
});

module.exports = {
  editPortfolioRouter: router,
};
