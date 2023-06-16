import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#44d62c',
    },
    secondary: {
      main: '#44d62c',
    },
    info: {
      main: '#ffffff',
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#52525b',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#353738',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              color: '#849095'
            },
            '&:hover fieldset': {
              borderColor: '#44d62c',
            },
            '& input': {
              color: '#ffffff',
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-checked': {
            color: '#ff610d',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: 'rgba(255, 97, 13, 0.6)',
            border: '1px solid rgba(255, 97, 13, 0.3)',
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: 'white'
        },
      },
    },

  },
});

export default theme
