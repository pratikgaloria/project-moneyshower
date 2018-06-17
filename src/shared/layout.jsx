import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'styles/styles';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

class Layout extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div className={classes.menu}>
        <div className={classes.flex}>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon className={classes.colorWhite}>
                <Icon>dashboard</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography variant="subheading" style={{ color: '#FFFFFF' }}>Dashboard</Typography>}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.colorWhite}>
                <Icon>swap_vertical_circle</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography variant="subheading" style={{ color: '#FFFFFF' }}>Positions</Typography>}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.colorWhite}>
                <Icon>settings_input_component</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography variant="subheading" style={{ color: '#FFFFFF' }}>Bots</Typography>}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.colorWhite}>
                <Icon>book</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography variant="subheading" style={{ color: '#FFFFFF' }}>Orderbook</Typography>}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.colorWhite}>
                <Icon>assessment</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography variant="subheading" style={{ color: '#FFFFFF' }}>Reports</Typography>}
              />
            </ListItem>
          </List>
          <Divider />
        </div>
        <div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon className={classes.colorWhite}>
                <Icon>account_box</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography variant="subheading" style={{ color: '#FFFFFF' }}>Account</Typography>}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.colorWhite}>
                <Icon>help</Icon>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography variant="subheading" style={{ color: '#FFFFFF' }}>Help</Typography>}
              />
            </ListItem>
          </List>
        </div>
      </div>
    );

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
                onClick={this.handleDrawerToggle}
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <Typography variant="title" color="primary" noWrap className={classes.flex}>
              Dashboard
            </Typography>
            <IconButton color="primary">
              <Icon>notifications</Icon>
            </IconButton>
            <IconButton color="primary">
              <Icon>account_circle</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Typography variant="headline" className={classes.logo}>
              <Icon className={classes.logoIcon}>trending_up</Icon>
              <span style={{ textTransform: 'uppercase', fontWeight: 700 }}>Showr</span>
            </Typography>
            {drawer}
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
            <Typography variant="headline" className={classes.logo}>
              <Icon className={classes.logoIcon}>trending_up</Icon>
              <span style={{ textTransform: 'uppercase', fontWeight: 700 }}>Showr</span>
            </Typography>
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
