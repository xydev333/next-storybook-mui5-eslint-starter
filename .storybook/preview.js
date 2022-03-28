import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '../context/theme-context';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

const withThemeProvider = (Story, context) => {
  const { theme } = useTheme();

  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}