'use client';

import { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export default function ParallaxSection({ imageUrl, children, reverse = false }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ y }, api] = useSpring(() => ({
    y: 0,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const movement = reverse ? -scrollProgress * 100 : scrollProgress * 100;
        api.start({ y: movement });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [api, reverse]);

  return (
    <div ref={ref} className="relative parallax-container min-h-[600px] overflow-hidden">
      <animated.div
        style={{
          transform: y.to(val => `translateY(${val}px)`),
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          bottom: '-10%',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>
    </div>
  );
}
