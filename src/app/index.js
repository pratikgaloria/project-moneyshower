/**
 * Module: App
 */
import { createReducer } from 'redux-create-reducer';
import { createLifecycleConstants, createLifecycleActions } from 'utils';

const moduleName = 'app';

// Constants
const APP = {
  LIFECYCLE: createLifecycleConstants(moduleName),
};
const constants = { APP };

// Actions
const actions = createLifecycleActions(APP.LIFECYCLE);

// Reducer
const initialState = {
  loaded: false,
  mobileOpen: false,
};

const reducer = createReducer(initialState, {
  [APP.LIFECYCLE.MOUNT]: state => ({
    ...state,
    loaded: true,
  }),

  [APP.LIFECYCLE.UNMOUNT]: state => ({
    ...state,
    loaded: false,
  }),
});

// Selectors
const selectors = {
  base: state => state.view.app,
};

export default {
  actions,
  constants,
  initialState,
  moduleName,
  reducer,
  selectors,
};
