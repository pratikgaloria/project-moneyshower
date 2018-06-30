import { combineReducers } from 'redux';

import { createReducers } from 'utils';
import app from 'app';

const views = [
  app,
];

const viewReducers = combineReducers(createReducers(views));

const rootReducer = combineReducers({
  view: viewReducers,
});

export default rootReducer;
