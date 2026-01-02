import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'citygo-theme';

const getSystemTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const getInitialTheme = (urlTheme: Theme | null): Theme => {
  // URL parameter has highest priority
  if (urlTheme) return urlTheme;
  
  // Then localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
  }
  
  // Then system preference
  return getSystemTheme();
};

export const useTheme = () => {
  const location = useLocation();
  const [theme, setThemeState] = useState<Theme>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Get URL theme parameter
  const getUrlTheme = useCallback((): Theme | null => {
    const searchParams = new URLSearchParams(location.search);
    const urlTheme = searchParams.get('theme');
    if (urlTheme === 'light' || urlTheme === 'dark') return urlTheme;
    return null;
  }, [location.search]);

  // Initialize theme on mount
  useEffect(() => {
    const urlTheme = getUrlTheme();
    const initialTheme = getInitialTheme(urlTheme);
    setThemeState(initialTheme);
    setIsInitialized(true);
  }, [getUrlTheme]);

  // Apply theme to document
  useEffect(() => {
    if (!isInitialized) return;
    
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, isInitialized]);

  // Listen for URL parameter changes
  useEffect(() => {
    const urlTheme = getUrlTheme();
    if (urlTheme && urlTheme !== theme) {
      setThemeState(urlTheme);
    }
  }, [location.search, getUrlTheme, theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const urlTheme = getUrlTheme();
    if (urlTheme) return; // URL param overrides
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return; // localStorage overrides
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [getUrlTheme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};
