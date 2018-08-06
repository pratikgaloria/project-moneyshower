import { call, take } from 'redux-saga/effects';
import { handleXhr } from '../../core/api';

import watchlist from '../../core/watchlist';
import self from './';

export function* getWatchlist() {
  const isXhrSuccess = yield call(handleXhr, 'get', watchlist.uri, watchlist.actions);

  if (isXhrSuccess) {
    console.log('succeeded.');
  } else {
    console.log('failed.');
  }
}

export function* sagas() {
  while (true) {
    yield take(self.constants.WATCHLIST.LIFECYCLE.MOUNT);
    yield call(getWatchlist);
  }
}

export default sagas;
