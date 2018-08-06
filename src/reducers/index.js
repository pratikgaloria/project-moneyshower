import { combineReducers } from 'redux';

import { createReducers } from 'utils';
import app from 'app';
import watchlist from 'app/watchlist';

import watchlistCore from 'core/watchlist';

const views = [
  app,
  watchlist,
];

const cores = [
  watchlistCore,
];

const viewReducers = combineReducers(createReducers(views));
const coreReducers = combineReducers(createReducers(cores));

const rootReducer = combineReducers({
  core: coreReducers,
  view: viewReducers,
});

export default rootReducer;
