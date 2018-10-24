
const Quote = require('../models').Quote;
const Equity = require('../models').Equity;

module.exports = {
  list(req, res) {
    return Quote
      .findAll({
        include: [{
          model: Equity,
          as: 'equities',
          attributes: ['id', 'symbol'],
        }],
      })
      .then(quotes => res.status(200).send(quotes))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Quote
      .findOne({
        include: [{
          model: Equity,
          as: 'equities',
          attributes: ['symbol'],
          where: { id: req.params.equityId },
        }],
      })
      .then((quote) => {
        if (!quote) {
          return res.status(404).send({
            message: 'Quote Not Found',
          });
        }
        return res.status(200).send(quote);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    const timestamp = new Date();

    return Quote
      .findOne({
        include: [{
          model: Equity,
          as: 'equities',
          attributes: ['symbol'],
          where: { id: req.params.equityId },
        }],
      })
      .then((quote) => {
        if (!quote) {
          return res.status(404).send({
            message: 'Quote Not Found',
          });
        }

        const newLtp = Number.parseFloat(quote.ltp) + (Math.random() * (-2.00 - 2.00)) + 2.00;
        return quote
          .update({
            timestamp,
            updatedAt: timestamp,
            ltp: newLtp.toFixed(2),
          })
          .then(() => res.status(200).send(quote))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
