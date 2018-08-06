/**
 * Module for fetching and storing cluster/config related API calls.
 */
import { createReducer } from 'redux-create-reducer';

import { createXhrConstants, createXhrActions } from '../../utils';

const moduleName = 'core';
const name = 'watchlist';

/**
 * Constants
 */
const WATCHLIST = {
  XHR: createXhrConstants(moduleName, name),
};
const constants = { WATCHLIST };

/**
 * Actions
 */
const actions = createXhrActions(WATCHLIST.XHR);

/**
 * Reducer
 */
const initialState = {
  error: null,
};

const baseReducer = {
  [WATCHLIST.XHR.SUCCESS]: (state, action) => ({
    ...state,
    ...action.response,
    error: null,
  }),

  [WATCHLIST.XHR.FAILURE]: (state, action) => ({
    ...state,
    ...action.error,
  }),
};
const reducer = createReducer(initialState, baseReducer);

/**
 * Selectors
 */
const selectors = {
  base: state => state.core.watchlist,
  error: state => state.core.watchlist.error,
};

/**
 * Uris
 */
const uri = '/watchlists';

export default {
  actions,
  baseReducer,
  constants,
  initialState,
  name,
  reducer,
  selectors,
  uri,
};
