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
import App from './app';

const name = 'app';

// Constants
const APP = {
  LIFECYCLE: createLifecycleConstants(name),
  DRAWER_TOGGLE: createConstant(name, 'DRAWER', 'TOGGLE'),
  TITLE_SET: createConstant(name, 'TITLE', 'SET'),
};
const constants = { APP };

// Actions
const actions = {
  lifecycle: createLifecycleActions(APP.LIFECYCLE),
  drawerToggle: () => createAction(APP.DRAWER_TOGGLE),
  titleSet: title => createAction(APP.TITLE_SET, { title }),
};

// Reducer
const initialState = {
  loaded: false,
  drawerOpen: false,
  title: '',
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

  [APP.DRAWER_TOGGLE]: state => ({
    ...state,
    drawerOpen: !state.drawerOpen,
  }),

  [APP.TITLE_SET]: (state, action) => ({
    ...state,
    title: action.payload.title,
  }),
});

// Selectors
const selectors = {
  base: state => state.view.app,
};

export { App };

export default {
  actions,
  constants,
  initialState,
  name,
  reducer,
  selectors,
};
