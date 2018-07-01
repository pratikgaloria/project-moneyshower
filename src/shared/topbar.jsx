import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const Topbar = () => (
  <div>
    <IconButton>
      <Icon>notifications</Icon>
    </IconButton>
    <IconButton>
      <Icon>account_circle</Icon>
    </IconButton>
  </div>
);

export default Topbar;
