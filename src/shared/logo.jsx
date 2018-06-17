import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'styles/styles';

import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

class Logo extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Typography variant="headline" className={classes.logo}>
        <Icon className={classes.logoIcon}>trending_up</Icon>
        <span className={classes.logoText}>Showr</span>
      </Typography>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Logo);
