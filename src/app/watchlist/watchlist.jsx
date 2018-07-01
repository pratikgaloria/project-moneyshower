import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import app from 'app';

type Props = {
  titleSet: () => void,
};

const mapDispatchToProps = dispatch => ({
  titleSet: () => {
    dispatch(app.actions.titleSet('Watchlist'));
  },
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = () => ({
  root: {
    width: '100%',
  },
});

class WatchList extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    this.props.titleSet();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  props: Props;

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="All" />
          <Tab label="Pharma" />
          <Tab label="Automobile" />
        </Tabs>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer>All</TabContainer>
          <TabContainer>Pharma</TabContainer>
          <TabContainer>Automobile</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

const WatchListWithStyles = withStyles(styles)(WatchList);

export default connect(null, mapDispatchToProps)(WatchListWithStyles);
