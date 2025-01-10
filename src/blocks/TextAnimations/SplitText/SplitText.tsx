import { useSprings, animated, SpringValue } from '@react-spring/web';
import { CSSProperties, useEffect, useRef, useState } from 'react';

type SplitTextProps = {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: CSSProperties;
  animationTo?: CSSProperties;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete = () => {},
}) => {
  const letters: any = text.split('');
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
    letters.length,
    letters.map((_: any, i: number) => ({
      from: animationFrom,
      to: async (next: (value: CSSProperties) => Promise<void>) => {
        if (inView) {
          await next(animationTo);
          animatedCount.current += 1;
          if (
            animatedCount.current === letters.length &&
            typeof onLetterAnimationComplete === 'function'
          ) {
            onLetterAnimationComplete();
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
        display: 'inline',
        overflow: 'hidden',
      }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props as any,
            display: 'inline-block',
            willChange: 'transform, opacity',
          }}
        >
          {letters[index] === ' ' ? '\u00A0' : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;
