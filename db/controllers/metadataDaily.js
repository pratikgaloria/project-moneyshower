import keyBy from 'lodash/keyBy';

const MetadataDaily = require('../models').MetadataDaily;
const Equity = require('../models').Equity;

module.exports = {
  list(req, res) {
    return MetadataDaily
      .findAll({
        include: [{
          model: Equity,
          as: 'equities',
          attributes: ['symbol'],
        }],
      })
      .then(metadata => res.status(200).send(metadata))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return MetadataDaily
      .findAll({
        include: [{
          model: Equity,
          as: 'equities',
          attributes: ['symbol'],
          where: { id: req.params.equityId },
        }],
      })
      .then((metadata) => {
        if (!metadata) {
          return res.status(404).send({
            message: 'Metadata Not Found',
          });
        }
        return res.status(200).send(keyBy(metadata, 'span'));
      })
      .catch(error => res.status(400).send(error));
  },
};
