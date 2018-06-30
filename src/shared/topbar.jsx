import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const Topbar = () => (
  <div>
    <IconButton color="primary">
      <Icon>notifications</Icon>
    </IconButton>
    <IconButton color="primary">
      <Icon>account_circle</Icon>
    </IconButton>
  </div>
);

export default Topbar;
