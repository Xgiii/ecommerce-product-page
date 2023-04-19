import React, { useEffect, useRef, useState } from 'react';

const FadeInWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: '50px 0px',
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.unobserve(ref.current);
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateX(-50px)',
        transition: 'all .7s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
