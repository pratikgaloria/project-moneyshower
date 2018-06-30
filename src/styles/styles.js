import themes from './themes';

const common = theme => ({
  flex: {
    display: 'flex',
  },
  flex1: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
});

const styles = theme => ({
  marginLeft: {
    marginLeft: theme.spacing.unit,
  },
  colorWhite: {
    color: theme.palette.common.white,
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

export { themes, styles, common };
