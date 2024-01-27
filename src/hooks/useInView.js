/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

/**
 *
 * @param {IntersectionObserverInit['root']} [root]
 * @param {IntersectionObserverInit['rootMargin']} [rootMargin]
 * @param {IntersectionObserverInit['threshold']} [threshold]
 * @returns
 */
const useInView = (root, rootMargin, threshold) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const intersectionObserveTargetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIntersecting(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    if (intersectionObserveTargetRef.current) observer.observe(intersectionObserveTargetRef.current);

    return () => {
      if (intersectionObserveTargetRef.current) observer.unobserve(intersectionObserveTargetRef.current);
    };
  }, []);

  return { intersectionObserveTargetRef, isIntersecting };
};

export { useInView };
