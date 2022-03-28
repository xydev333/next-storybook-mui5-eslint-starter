import { createTheme } from '@mui/material/styles';
import React from 'react';

export const themes = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: {
        light: '#39DBE0',
        main: '#27BFC6',
        dark: '#1F8F94',
        disabled: '#E0E0E0',
      },
      secondary: {
        light: '#FFB22C',
        main: '#FF9122',
        dark: '#B36618',
      },
      warning: {
        light: '#FFED8E',
        main: '#EAC608',
        dark: '#CB9200',
      },
      info: {
        light: '#BFDBFE',
        main: '#60A5FA',
        dark: '#2563EB',
      },
      success: {
        light: '#86EFAC',
        main: '#22C55E',
        dark: '#15803D',
      },
      error: {
        light: '#FECACA',
        main: '#F87171',
        dark: '#DC2626',
      },
      typography: {
        primary: '#202020',
        secondary: '#6B7280',
        disabled: '#D1D5DB',
        altPrimary: '#FFFFFF',
      },
      action: {
        active: '#27BFC6',
        hover: '#1F8F94',
        selected: '#EEF6FF',
        disabled: '#E0E0E0',
        disabledBackground: '#FFFFFF',
        tertiaryHoverFill: '#DBEAFE',
        tertiaryHoverStroke: '#BFDBFE',
      },
      background: {
        default: '#F3F4F6',
        paper: '#FFFFFF',
      },
      divider: '#E5E7EB',
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#39DBE0',
        main: '#27BFC6',
        dark: '#1F8F94',
        disabled: '#E0E0E0',
      },
      secondary: {
        light: '#FFB22C',
        main: '#FF9122',
        dark: '#B36618',
      },
      warning: {
        light: '#FFED8E',
        main: '#EAC608',
        dark: '#CB9200',
      },
      info: {
        light: '#BFDBFE',
        main: '#60A5FA',
        dark: '#2563EB',
      },
      success: {
        light: '#86EFAC',
        main: '#22C55E',
        dark: '#15803D',
      },
      error: {
        light: '#FECACA',
        main: '#F87171',
        dark: '#DC2626',
      },
      typography: {
        primary: '#F2F8F8',
        secondary: '#879192',
        disabled: '#3C4040',
        altPrimary: '#020202',
      },
      action: {
        active: '#27BFC6',
        hover: '#1F8F94',
        selected: '#181919',
        disabled: '#3C4040',
        disabledBackground: '#000000',
        tertiaryHoverFill: '#0A4B4E',
        tertiaryHoverStroke: '#14767A',
      },
      background: {
        default: '#191B1E',
        paper: '#000000',
      },
      divider: '#373A3C',
    },
  }),
};

const themeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export function ProvideTheme({ children }) {
  const theme = useProvideTheme();
  return <themeContext.Provider value={theme}>{children}</themeContext.Provider>;
}

function useProvideTheme() {
  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () => {
    if (theme === themes.light) setTheme(themes.dark);
    else setTheme(themes.light);
  };

  return {
    theme,
    toggleTheme,
  };
}

export const useTheme = () => {
  return React.useContext(themeContext);
};
