import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import '../styles/globals.css';

import { useTheme } from '../context/theme-context';

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
