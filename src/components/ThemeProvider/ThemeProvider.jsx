// 주석
'use client'

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

export const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            minWidth: 0,
            padding: 0,
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider
      theme={theme}
    >
      { children }
    </MuiThemeProvider>
  );
}
