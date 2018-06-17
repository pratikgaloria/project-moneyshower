import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/index';
import Dashboard from 'containers/dashboard';
import App from './app';

const routes = (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </App>
  </ConnectedRouter>
);

export default routes;
