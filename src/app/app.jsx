import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { common, themes } from 'styles/styles';

import Layout from 'shared/layout';
import app from './';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  ...common(theme),
});

type Props = {
  mount: () => void,
  drawerOpen: false,
  drawerToggle: () => void,
  classes: {},
  children: PropTypes.node,
};

const mapStateToProps = state => ({
  ...app.selectors.base(state),
});

const mapDispatchToProps = dispatch => ({
  mount: () => {
    dispatch(app.actions.lifecycle.mount());
  },
  drawerToggle: () => {
    dispatch(app.actions.drawerToggle());
  },
});

class App extends React.Component {
  componentDidMount() {
    this.props.mount();
  }

  props: Props;

  render() {
    const { classes, drawerOpen, drawerToggle } = this.props;

    return (
      <MuiThemeProvider theme={themes}>
        <CssBaseline />
        <div className={classes.root}>
          <Layout drawerOpen={drawerOpen} drawerToggle={drawerToggle} />
          <main className={classes.main}>
            <div className={classes.toolbar} />
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

const AppWithStyles = withStyles(styles)(App);

export default connect(mapStateToProps, mapDispatchToProps)(AppWithStyles);
