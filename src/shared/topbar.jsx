import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'styles/styles';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class Topbar extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <IconButton color="primary">
          <Icon>notifications</Icon>
        </IconButton>
        <IconButton color="primary">
          <Icon>account_circle</Icon>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Topbar);
