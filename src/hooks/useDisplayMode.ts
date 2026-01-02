import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export type DisplayMode = 'full' | 'compact';

export interface DisplayModeConfig {
  mode: DisplayMode;
  limit: number;
  isEmbed: boolean;
}

export const useDisplayMode = (): DisplayModeConfig => {
  const location = useLocation();

  return useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    
    // Check for embed mode
    const embedParam = searchParams.get('embed');
    const isEmbedRoute = location.pathname === '/embed';
    const isEmbed = embedParam === '1' || isEmbedRoute;
    
    // Get display mode
    const modeParam = searchParams.get('mode');
    const mode: DisplayMode = modeParam === 'compact' ? 'compact' : 'full';
    
    // Get limit (default 6 for compact, no limit for full)
    const limitParam = searchParams.get('limit');
    const defaultLimit = mode === 'compact' ? 6 : 999;
    const limit = limitParam ? parseInt(limitParam, 10) : defaultLimit;
    
    return { mode, limit, isEmbed };
  }, [location.pathname, location.search]);
};