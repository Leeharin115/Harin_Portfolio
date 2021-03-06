import { lightTheme, darkTheme } from '../theme/theme';
import { createContext, useState, useContext, useCallback } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem('theme') || 'light';
  const [ThemeMode, setThemeMode] = useState(LocalTheme);
  const themeStyles = ThemeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeStyles}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === 'light') {
      setThemeMode('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setThemeMode('light');
      window.localStorage.setItem('theme', 'light');
    }
  }, [ThemeMode, setThemeMode]);

  return [ThemeMode, toggleTheme];
}
