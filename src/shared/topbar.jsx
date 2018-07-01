import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const Topbar = () => (
  <div>
    <IconButton>
      <Icon style={{color: '#FFF'}}>notifications</Icon>
    </IconButton>
    <IconButton>
      <Icon style={{color: '#FFF'}}>account_circle</Icon>
    </IconButton>
  </div>
);

export default Topbar;
