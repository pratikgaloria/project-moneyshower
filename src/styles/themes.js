import { createMuiTheme } from '@material-ui/core/styles';

/*
 * Color variables
 */
const colorWhite = '#FFFFFF';
const colorPrimary = '#07617D';
const colorSecondary = '#BD9B3E';
const colorError = '#DA245D';
const colorBackground = '#FAFAFA';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: colorPrimary,
      contrastText: colorWhite,
    },
    secondary: {
      main: colorSecondary,
      contrastText: colorWhite,
    },
    error: {
      main: colorError,
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ].join(','),
    },
    background: {
      default: colorBackground,
    },
  },
  status: {
    danger: colorError,
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
    MuiTypography: {
      title: {
        textTransform: 'uppercase',
      },
    },
    MuiCard: {
      root: {
        borderRadius: '5px',
        borderColor: colorBackground,
      },
    },
    MuiCardHeader: {
      root: {
        backgroundColor: '#A6C675',
      },
      action: {
        marginTop: 'inherit',
        marginRight: 'inherit',
        alignSelf: 'inherit',
      },
    },
    MuiCardContent: {
      root: {
        backgroundColor: '#A6C675',
      },
    },
  },
});

export default theme;
