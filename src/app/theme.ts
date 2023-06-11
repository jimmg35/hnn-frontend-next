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
              borderColor: '#52525b',
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
            color: '#44d62c',
          },
        },
      },
    },

    // MuiSelect: {
    //   styleOverrides: {
    //     select: {
    //       '&:focus': {
    //         backgroundColor: '#353738',
    //       }
    //     }
    //   }
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       '& fieldset': {
    //         borderColor: '#3f3f46',
    //       },
    //       '&:hover fieldset': {
    //         borderColor: '#44d62c',
    //       },
    //       '& input': {
    //         color: '#ffffff',
    //       },
    //     },

    //   }
    // },


    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },


  },
});

export default theme
