import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styles } from 'styles/styles';
import theme from 'styles/themes';

import { loadApp } from 'actions/app';
import Layout from 'shared/layout';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  props: Props;

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Layout />
          <main className={classes.main}>
            <div className={classes.toolbar} />
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

type Props = {
  dispatch: () => void,
  children: PropTypes.node,
}

const mapStateToProperties = state => ({
  loaded: state.app.loaded,
});

const AppWithStyles = withStyles(styles, { withTheme: true })(App);

export default connect(mapStateToProperties)(AppWithStyles);
