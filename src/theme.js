import { createTheme } from '@mui/material/styles';

// Custom theme with red color palette
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0F1115', // Dark burgundy/maroon for header
      contrastText: '#6EE7FF', // Coral red text on primary
    },
    secondary: {
      main: '#6EE7FF', // Coral red for accents
      contrastText: '#000000', // Black text on secondary
    },
    background: {
      default: '#0F1115', // Very dark gray
      paper: '#1A1D22', // Card background
    },
    text: {
      primary: '#E6E6E6', // White text
      secondary: '#9BA3AF', // Red text for secondary
    },
    custom: {
      darkGray: '#2d2d2d',
      border: '#444',
      borderLight: '#555',
    },
  },
  typography: {
    fontFamily: '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
});

export default theme;
