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
  logoText: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  colorWhite: {
    color: theme.palette.common.white,
  },
  flexGrow: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
});

export { themes, styles };
