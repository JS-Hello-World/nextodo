'use client'

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
