import { createTheme } from '@mui/material/styles';

// Theme Configuration
const Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#ff9800', // Orange
    },
    background: {
      default: '#f5f5f5', // Light Grey
    },
    text: {
      primary: '#333333', // Dark Grey
      secondary: '#666666', // Mid Grey
    },
    error: {
      main: '#d32f2f', // Red
    },
  },
  typography: {
    fontFamily: ['Raleway, Arial, sans-serif'].join(','),
    h1: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Raleway',
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.3rem',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Raleway',
      fontSize: '1.2rem',
    },
    body2: {
      fontFamily: 'Raleway',
      fontSize: '0.875rem',
    },
  },
});

export default Theme;
