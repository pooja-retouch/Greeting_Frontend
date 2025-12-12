import { useEffect, useState } from 'react';

/**
 * Hook to check if user prefers reduced motion
 * Respects the prefers-reduced-motion media query
 */
export function useMotionPreference() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}
