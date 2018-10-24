const segmentsController = require('../controllers').segments;
const equitiesController = require('../controllers').equities;
const quotesController = require('../controllers').quotes;
const metadataDailyController = require('../controllers').metadataDaily;
const watchlistsController = require('../controllers').watchlists;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));

  // Segments
  app.get('/api/segments', segmentsController.list);
  app.post('/api/segments', segmentsController.create);
  app.post('/api/segments/:segmentId/equities', equitiesController.create);

  // Equities
  app.get('/api/equities', equitiesController.list);

  // Quotes
  app.get('/api/quotes/:equityId', quotesController.retrieve);
  app.get('/api/quotes', quotesController.list);
  app.put('/api/quotes/:equityId', quotesController.update);

  // Metadata Daily
  app.get('/api/metadata/daily/:equityId', metadataDailyController.retrieve);
  app.get('/api/metadata/daily', metadataDailyController.list);

  // Watchlists
  app.get('/api/watchlists', watchlistsController.list);
  app.get('/api/watchlists/:watchlistId', watchlistsController.retrieve);
  app.post('/api/watchlists', watchlistsController.create);
};
