import 'babel-polyfill';
import { call, fork, all } from 'redux-saga/effects';

import watchlist from '../app/watchlist';

const modules = [watchlist];

function* rootSaga() {
  // Kick off background setup sagas
  yield all(modules.map(module => fork(module.sagas)));
}

export default rootSaga;
