import { compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';

// Import all reducers
import reducer from 'reducers';

export const history = createBrowserHistory();

const store =
compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(reducer);

export default store;
