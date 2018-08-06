import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

// Import all reducers
import saga from 'sagas';
import reducer from 'reducers';

export const history = createBrowserHistory();

let enhancers;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (__DEV__) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancers = composeEnhancers(applyMiddleware(...middlewares));
} else {
  enhancers = applyMiddleware(...middlewares);
}

const store = createStore(reducer, enhancers);

sagaMiddleware.run(saga);

export default store;
