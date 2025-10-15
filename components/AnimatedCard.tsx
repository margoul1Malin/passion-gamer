'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    from: { scale: 1, rotateY: 0 },
    config: { tension: 300, friction: 10 }
  }));

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const centerX = rect.width / 2;

    const rotateY = ((x - centerX) / centerX) * 10;

    api.start({
      rotateY: rotateY,
      scale: 1.05
    });
  };

  const handleMouseLeave = () => {
    api.start({
      rotateY: 0,
      scale: 1
    });
  };

  return (
    <animated.div
      ref={cardRef}
      className={`hover-lift ${className}`}
      style={{
        transform: springs.scale.to(s => `scale(${s}) perspective(1000px) rotateY(${springs.rotateY.get()}deg)`),
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.div>
  );
}
