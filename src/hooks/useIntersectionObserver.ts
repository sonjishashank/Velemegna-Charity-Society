import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold, root, rootMargin]);

  return [targetRef, isIntersecting] as const;
}