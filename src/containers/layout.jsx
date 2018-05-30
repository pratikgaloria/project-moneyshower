import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

type Props = {
  children: any
}

const Layout = (props: Props) => (
  <div>
    <CssBaseline />
    {props.children}
  </div>
);

export default Layout;
