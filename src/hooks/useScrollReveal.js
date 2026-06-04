import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-reveal animations using IntersectionObserver.
 * Returns a ref to attach to the element that should animate on scroll.
 * 
 * @param {Object} options
 * @param {string} options.delay - CSS class for delay (e.g. 'reveal-delay-1')
 * @param {number} options.threshold - IntersectionObserver threshold (default 0.1)
 */
export function useScrollReveal({ delay = '', threshold = 0.1 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return ref;
}
