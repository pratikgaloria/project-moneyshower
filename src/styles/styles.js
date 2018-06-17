import themes from './themes';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  flex: {
    flex: 1,
  },
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
  },
  marginLeft: {
    marginLeft: theme.spacing.unit,
  },
  toolbar: theme.mixins.toolbar,
  menu: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  drawerPaper: {
    background: 'linear-gradient(135deg, #BD9B3E, #D6C15B)',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  logo: {
    color: '#fff',
    padding: theme.spacing.unit * 2,
  },
  logoIcon: {
    fontSize: '32px',
    fontWeight: 700,
  },
  colorWhite: {
    color: theme.palette.common.white,
  },
});

export { themes, styles };
