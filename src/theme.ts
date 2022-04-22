import "@fontsource/cooper-hewitt";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7d858c',
      main: '#9cc0d3a6',
      dark: '#263238',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#1769aa',
      main: '#4dabf5',
      dark: '#2196f3',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: '"Cooper Hewitt", sans- serif',
    h2: {
      fontWeight: 200,
    }
  }
});

export default theme;