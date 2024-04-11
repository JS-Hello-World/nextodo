'use client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ThemeProviderProps extends PropsWithChildren {}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = createTheme({});

  return (
    <MuiThemeProvider theme={theme}>
      { children }
    </MuiThemeProvider>
  );
};
