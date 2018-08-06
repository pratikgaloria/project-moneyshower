/**
 * Module: App
 */
import { createReducer } from 'redux-create-reducer';
import {
  createConstant,
  createLifecycleConstants,
  createAction,
  createLifecycleActions,
} from 'utils';
import Watchlist from './watchlist';
import sagas from './sagas';

const name = 'watchlist';

// Constants
const WATCHLIST = {
  LIFECYCLE: createLifecycleConstants(name),
};
const constants = { WATCHLIST };

// Actions
const actions = {
  lifecycle: createLifecycleActions(WATCHLIST.LIFECYCLE),
};

// Reducer
const initialState = {
  error: null,
};

const reducer = createReducer(initialState, {
  [WATCHLIST.LIFECYCLE.MOUNT]: state => ({
    ...state,
  }),

  [WATCHLIST.LIFECYCLE.UNMOUNT]: state => ({
    ...state,
  }),
});

// Selectors
const selectors = {
  base: state => state.view.watchlist,
};

export { Watchlist };

export default {
  actions,
  constants,
  initialState,
  name,
  reducer,
  sagas,
  selectors,
};
