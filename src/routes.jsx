import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from 'store/index';

import { Dashboard } from 'app/dashboard';
import { WatchList } from 'app/watchlist';

import { App } from 'app';

const routes = (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/watchlist" component={WatchList} />
      </Switch>
    </App>
  </Router>
);

export default routes;
