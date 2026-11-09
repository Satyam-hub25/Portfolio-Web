import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to trigger entrance animations when elements scroll into view
 */
export const useIntersectionObserver = (options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Trigger only once for smooth UX
      }
    }, options);

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return [elementRef, isVisible];
};
