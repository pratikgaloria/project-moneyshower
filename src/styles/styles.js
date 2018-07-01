import themes from './themes';

const common = theme => ({
  colorWhite: {
    color: theme.palette.common.white,
  },
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
  tabsRoot: {
    backgroundColor: '#E9EFE8',
  },
  tabsIndicator: {
    height: '2px',
  },
});

export { themes, styles, common };
