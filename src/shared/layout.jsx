import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { common } from 'styles/styles';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Logo from './logo';
import Menu from './menu';
import Topbar from './topbar';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  appBarBackground: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      background: 'linear-gradient(135deg, #BD9B3E, #D6C15B)',
      color: theme.palette.secondary.contrastText,
    },
  },
  titleColor: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.secondary.contrastText,
    },
  },
  drawerPaper: {
    background: 'linear-gradient(0deg, #BD9B3E, #D6C15B)',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  ...common(theme),
});

type Props = {
  title: 'Dashboard',
  drawerOpen: false,
  drawerToggle: () => void,
  classes: {},
};

class Layout extends React.PureComponent {
  props: Props;

  render() {
    const {
      title, classes, drawerOpen, drawerToggle,
    } = this.props;

    return (
      <div>
        <AppBar
          className={classes.appBar}
          elevation={0}
          classes={{
            colorPrimary: classes.appBarBackground,
          }}
        >
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={drawerToggle}
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <Typography variant="title" noWrap className={classnames(classes.titleColor, classes.flexGrow)}>
              {title}
            </Typography>
            <Topbar />
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={drawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Logo />
            <Menu />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Logo />
            <Menu />
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
