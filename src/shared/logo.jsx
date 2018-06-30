import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  logo: {
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing.unit * 2,
  },
  logoIcon: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  logoText: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
});

type Props = {
  classes: {},
};

class Logo extends React.PureComponent {
  props: Props;

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

export default withStyles(styles)(Logo);
