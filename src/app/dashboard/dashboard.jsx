import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { styles } from 'styles/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;

    return <div>This is dashboard</div>;
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
