import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDisplayMode } from './useDisplayMode';

export const useEmbed = () => {
  const { isEmbed } = useDisplayMode();
  return isEmbed;
};

export const useEmbedHeight = () => {
  const location = useLocation();

  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage(
        { type: "CITYGO_EMBED_HEIGHT", height },
        "*"
      );
    };

    // Send initial height
    sendHeight();

    // Create ResizeObserver to watch for content changes
    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    resizeObserver.observe(document.body);

    // Also listen for window resize
    window.addEventListener('resize', sendHeight);

    // Create MutationObserver for dynamic content changes
    const mutationObserver = new MutationObserver(() => {
      sendHeight();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('resize', sendHeight);
    };
  }, [location.search, location.pathname]);
};

// Hook to apply embed mode class to document
export const useEmbedMode = () => {
  const { isEmbed } = useDisplayMode();

  useEffect(() => {
    const root = document.documentElement;
    
    if (isEmbed) {
      root.classList.add('embed-mode');
    } else {
      root.classList.remove('embed-mode');
    }

    return () => {
      root.classList.remove('embed-mode');
    };
  }, [isEmbed]);

  return isEmbed;
};