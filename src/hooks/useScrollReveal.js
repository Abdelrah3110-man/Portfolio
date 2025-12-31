import { useState, useEffect, useRef } from "react";

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootmargin = "0px" } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Unobserve after revealing
        }
      },
      {
        threshold,
        rootMargin: rootmargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootmargin]);

  return [elementRef, isVisible];
};
