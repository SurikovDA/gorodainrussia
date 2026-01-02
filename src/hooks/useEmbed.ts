import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useEmbed = () => {
  const location = useLocation();
  const [isEmbed, setIsEmbed] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const embedParam = searchParams.get('embed');
    const isEmbedRoute = location.pathname === '/embed';
    
    setIsEmbed(embedParam === '1' || isEmbedRoute);
  }, [location]);

  return isEmbed;
};

export const useEmbedHeight = () => {
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

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', sendHeight);
    };
  }, []);
};
