import { useSprings, animated } from '@react-spring/web';
import { easings } from '@react-spring/web';
import { CSSProperties, useEffect, useRef, useState } from 'react';

type SplitTextProps = {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: CSSProperties;
  animationTo?: CSSProperties;
  easing?: (t: number) => number;
  threshold?: number;
  rootMargin?: string;
  textAlign?: CSSProperties['textAlign'];
  onWordAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = easings.easeOutCubic,
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'start',
  onWordAnimationComplete = () => {},
}) => {
  const words = text.split(' '); // Split text into words
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: animationFrom,
      to: async (next: (value: CSSProperties) => Promise<void>) => {
        if (inView) {
          await next(animationTo);
          animatedCount.current += 1;
          if (
            animatedCount.current === words.length &&
            typeof onWordAnimationComplete === 'function'
          ) {
            onWordAnimationComplete();
          }
        }
      },
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign: textAlign,
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
      }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props as any,
            display: 'inline-block',
            willChange: 'transform, opacity',
            marginRight: '0.3em',
          }}
        >
          {words[index]}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;
