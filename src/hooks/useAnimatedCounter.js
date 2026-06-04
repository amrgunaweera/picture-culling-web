import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for animated counters triggered by scroll visibility.
 * 
 * @param {number} target - The target number to count to
 * @param {string} suffix - Suffix to append (e.g. '%', '+', '/100')
 * @param {number} duration - Animation duration in ms (default 2000)
 * @param {number} threshold - IntersectionObserver threshold (default 0.3)
 * @returns {{ ref: React.RefObject, value: string }}
 */
export function useAnimatedCounter(target, suffix = '', duration = 2000, threshold = 0.3) {
  const ref = useRef(null);
  const [value, setValue] = useState('0' + suffix);
  const hasAnimated = useRef(false);
  const isFloat = String(target).includes('.');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.unobserve(entry.target);

            const startTime = performance.now();

            const step = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = eased * target;

              if (isFloat) {
                setValue(current.toFixed(1) + suffix);
              } else {
                setValue(Math.floor(current).toLocaleString() + suffix);
              }

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [target, suffix, duration, threshold, isFloat]);

  return { ref, value };
}
