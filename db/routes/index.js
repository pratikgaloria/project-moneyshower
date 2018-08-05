const segmentsController = require('../controllers').segments;
const equitiesController = require('../controllers').equities;
const watchlistsController = require('../controllers').watchlists;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));

  // segments
  app.get('/api/segments', segmentsController.list);
  app.post('/api/segments', segmentsController.create);
  app.post('/api/segments/:segmentId/equities', equitiesController.create);

  // Equities
  app.get('/api/equities', equitiesController.list);

  // watchlists
  app.get('/api/watchlists', watchlistsController.list);
  app.get('/api/watchlists/:watchlistId', watchlistsController.retrieve);
  app.post('/api/watchlists', watchlistsController.create);

};
