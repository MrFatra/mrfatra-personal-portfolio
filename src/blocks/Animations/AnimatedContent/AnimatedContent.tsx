import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

type AnimatedContentProps = {
  children?: React.ReactNode | undefined;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  config?: { tension: number; friction: number };
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  exitDelay?: number;
};

const AnimatedContent = ({
  children,
  distance = 0,
  direction = "vertical",
  reverse = false,
  config = { tension: 100, friction: 12 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 0.5,
  delay = 0,
  threshold = 0.1,
  exitDelay = 0,
}: AnimatedContentProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  const directions: any = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`}) scale(${scale})`,
      opacity: animateOpacity ? initialOpacity : 1,
    },
    to: inView
      ? { transform: "translateY(0px) scale(1)", opacity: 1 }
      : {
          transform: `translate${directions[direction]}(${reverse ? `${distance}px` : `-${distance}px`}) scale(${scale})`,
          opacity: animateOpacity ? 0 : 1,
        },
    config,
    delay: inView ? delay : exitDelay,
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
