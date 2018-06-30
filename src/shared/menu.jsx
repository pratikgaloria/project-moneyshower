import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'styles/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

class Menu extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className={classes.colorWhite}>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Dashboard</Typography>}
            />
          </ListItem>
          <ListItem button component={Link} to="/watchlist">
            <ListItemIcon className={classes.colorWhite}>
              <Icon>visibility</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Watchlist</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.colorWhite}>
              <Icon>swap_vertical_circle</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Positions</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.colorWhite}>
              <Icon>settings_input_component</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Bots</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.colorWhite}>
              <Icon>book</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Orderbook</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.colorWhite}>
              <Icon>assessment</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Reports</Typography>}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className={classes.colorWhite}>
              <Icon>account_box</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Account</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.colorWhite}>
              <Icon>help</Icon>
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography variant="subheading" className={classes.colorWhite}>Help</Typography>}
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Menu);
