import { Card } from '@/components';
import { Box, CardRoot } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';

type FadeContentProps = {
  children?: React.ReactNode;
  blur?: boolean;
  duration?: number;
  delay?: number;
  easing?: 'ease-out' | 'ease-in-out';
  threshold?: number;
  initialOpacity?: number;
};

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  delay = 0,
  easing = 'ease-in-out',
  threshold = 0.1,
  initialOpacity = 0,
}: FadeContentProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <Box
      ref={ref}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </Box>
  );
};

export default FadeContent;
