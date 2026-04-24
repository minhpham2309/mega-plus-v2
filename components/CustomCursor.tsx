import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop/fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Hide default cursor ONLY when this component successfully mounts and JS is running
    document.body.style.cursor = 'none';

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Move cursor logic
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15, 
        ease: 'power2.out',
      });
    };

    // Hover effect logic
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        cursor.classList.add('hovered');
      } else {
        cursor.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      // Restore default cursor on unmount/cleanup
      document.body.style.cursor = 'auto';
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};

export default CustomCursor;