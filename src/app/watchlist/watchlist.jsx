import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { styles } from 'styles/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import app from 'app';

type Props = {
  titleSet: () => void,
};

const mapDispatchToProps = dispatch => ({
  titleSet: () => {
    dispatch(app.actions.titleSet('Watchlist'));
  },
});

function TabContainer({ children }) {
  return (
    <div style={{ padding: '16px 0' }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

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

  props: Props;

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.flex}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          fullWidth
          classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator,
          }}
        >
          <Tab label="All" />
          <Tab label="Pharma" />
          <Tab label="Automobile" />
        </Tabs>
          {
            value === 0 &&
            <TabContainer>
              <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Typography variant="button" className={classes.flex}>Axisbank</Typography>
                    <div style={{display: 'flex', alignItems: 'center', padding: 0, textAlign: 'right'}}>
                      <Typography variant="body2">478.3</Typography>
                      <Icon style={{fontSize: 18}}>arrow_drop_up</Icon>
                      <Typography classes={{root: classes.changes}}>32.1 (1.04%)</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails />
              </ExpansionPanel>
            </TabContainer>
          }{
            value === 1 &&
            <TabContainer>Pharma</TabContainer>
          }{
            value === 2 &&
            <TabContainer>Automobile</TabContainer>
          }
      </div>
    );
  }
}

const WatchListWithStyles = withStyles(styles)(WatchList);

export default connect(null, mapDispatchToProps)(WatchListWithStyles);
