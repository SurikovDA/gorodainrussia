import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export type Theme = 'light' | 'dark' | 'site';

const STORAGE_KEY = 'citygo-theme';

const getSystemTheme = (): 'light' | 'dark' => {
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
    if (stored === 'light' || stored === 'dark' || stored === 'site') return stored;
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
    if (urlTheme === 'light' || urlTheme === 'dark' || urlTheme === 'site') return urlTheme;
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
    
    // Remove all theme classes
    root.classList.remove('dark', 'light', 'site');
    
    // Add appropriate class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'site') {
      root.classList.add('site');
    } else {
      root.classList.add('light');
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
    // Cycle through themes: light -> dark -> site -> light
    const themeOrder: Theme[] = ['light', 'dark', 'site'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  }, [theme, setTheme]);

  const cycleToDarkOrLight = useCallback(() => {
    // Simple toggle between light and dark
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    cycleToDarkOrLight,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isSite: theme === 'site',
  };
};