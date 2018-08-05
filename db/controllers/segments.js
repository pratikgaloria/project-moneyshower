const Segment = require('../models').Segment;
const Equity = require('../models').Equity;

module.exports = {
  create(req, res) {
    return Segment
      .create({
        symbol: req.body.symbol,
        fullName: req.body.fullName,
      })
      .then(segment => res.status(201).send(segment))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Segment
      .findAll({
        include: [{
          model: Equity,
          as: 'equities',
        }],
      })
      .then(segments => res.status(200).send(segments))
      .catch(error => res.status(400).send(error));
  },
};
