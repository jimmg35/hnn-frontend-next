import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#242627',
    },
    secondary: {
      main: '#44d62c',
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#3f3f46',
        },
      },
    },
  },
});

export default theme
