import React from 'react';
import AuthForms from '../components/AuthForms';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <AuthForms />
      </main>
    </ThemeProvider>
  );
};

export default Home;

