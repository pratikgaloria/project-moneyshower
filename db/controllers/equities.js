const Equity = require('../models').Equity;
const Segment = require('../models').Segment;
const Watchlist = require('../models').Watchlist;
const Quote = require('../models').Quote;

module.exports = {
  create(req, res) {
    return Equity
      .create({
        symbol: req.body.symbol,
        displayText: req.body.displayText,
        segmentId: req.params.segmentId,
      })
      .then(equity => res.status(201).send(equity))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Equity
      .all()
      .then(equities => res.status(200).send(equities))
      .catch(error => res.status(400).send(error));
  },
};
