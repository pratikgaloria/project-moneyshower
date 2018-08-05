const Watchlist = require('../models').Watchlist;
const Equity = require('../models').Equity;

module.exports = {
  create(req, res) {
    return Watchlist
      .create({
        name: req.body.name,
      })
      .then(watchlist => res.status(201).send(watchlist))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Watchlist
      .findAll({
        include: [{
          model: Equity,
          as: 'equities',
          attributes: ['id', 'symbol'],
          through: { attributes: [] },
        }],
      })
      .then(watchlists => res.status(200).send(watchlists))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Watchlist
      .findById(req.params.watchlistId, {
        include: [{
          model: Equity,
          as: 'equities',
          attributes: ['id', 'symbol'],
          through: { attributes: [] },
        }],
      })
      .then(watchlist => {
        if (!watchlist) {
          return res.status(404).send({
            message: 'Watchlist Not Found',
          });
        }
        return res.status(200).send(watchlist);
      })
      .catch(error => res.status(400).send(error));
  },
};
