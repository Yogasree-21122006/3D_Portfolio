import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Smooth springs for cursor position
  const cursorX = useSpring(-100, { damping: 28, stiffness: 400 });
  const cursorY = useSpring(-100, { damping: 28, stiffness: 400 });

  const dotX = useSpring(-100, { damping: 35, stiffness: 800 });
  const dotY = useSpring(-100, { damping: 35, stiffness: 800 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/laptops) and when reduced motion is not preferred
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.classList.contains('cursor-pointer')
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-deep/50 bg-purple-light/20 backdrop-blur-[1px] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isPointer ? 1.6 : 1,
          borderColor: isPointer ? '#7C3AED' : 'rgba(196, 181, 253, 0.6)',
          backgroundColor: isPointer ? 'rgba(233, 213, 255, 0.35)' : 'rgba(251, 207, 232, 0.2)',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-deep -translate-x-1/2 -translate-y-1/2 shadow-xs"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isPointer ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

