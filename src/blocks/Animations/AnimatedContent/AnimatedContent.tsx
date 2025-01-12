import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

type AnimatedContentProps = {
  children?: React.ReactNode | undefined;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  config?: { tension: number; friction: number }; // Tetap opsional untuk mendukung konfigurasi fisik
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  exitDelay?: number;
  repeat?: boolean;
  speed?: number; // Durasi animasi dalam milidetik
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
  repeat = true,
  speed, // Nilai default akan ditangani di dalam logika
}: AnimatedContentProps) => {
  const [inView, setInView] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (!repeat) {
            setTriggerAnimation(false);
            setTimeout(() => setTriggerAnimation(true), 0);
          }
        } else {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, repeat]);

  const directions: any = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`}) scale(${scale})`,
      opacity: animateOpacity ? initialOpacity : 1,
    },
    to: triggerAnimation || inView
      ? { transform: "translateY(0px) scale(1)", opacity: 1 }
      : {
          transform: `translate${directions[direction]}(${reverse ? `${distance}px` : `-${distance}px`}) scale(${scale})`,
          opacity: animateOpacity ? 0 : 1,
        },
    config: {
      ...config,
      duration: speed ?? undefined, // Gunakan `speed` jika tersedia; jika tidak, gunakan konfigurasi default
    },
    delay: inView ? delay : exitDelay,
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
