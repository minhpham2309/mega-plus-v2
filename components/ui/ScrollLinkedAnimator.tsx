import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface ScrollLinkedAnimatorProps {
  children: (progress: number) => ReactNode;
  className?: string;
  // Defines where the animation starts relative to the viewport top.
  // 0 = top of viewport, 1 = bottom of viewport.
  start?: number;
   // Defines where the animation ends relative to the viewport top.
  // 0 = top of viewport, 1 = bottom of viewport.
  end?: number;
}

const ScrollLinkedAnimator: React.FC<ScrollLinkedAnimatorProps> = ({
  children,
  className,
  start = 0.9, // Start animation when the element top is at 90% of viewport height
  end = 0.5,   // End animation when the element top is at 50% of viewport height
}) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // The pixel position (from the top of the viewport) where the animation should start and end
    const startY = viewportHeight * start;
    const endY = viewportHeight * end;
    
    const currentY = rect.top;

    if (currentY > startY) {
      setProgress(0);
      return;
    }

    if (currentY < endY) {
      setProgress(1);
      return;
    }
    
    // Calculate progress as a value between 0 and 1 within the animation range
    const totalDistance = startY - endY;
    const traveledDistance = startY - currentY;
    const currentProgress = traveledDistance / totalDistance;
    
    setProgress(Math.max(0, Math.min(1, currentProgress)));
  };

  useEffect(() => {
    // We add a requestAnimationFrame to avoid layout thrashing and improve performance.
    const onScroll = () => window.requestAnimationFrame(handleScroll);
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    // Also handle resize events
    window.addEventListener('resize', onScroll, { passive: true });


    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [start, end]);

  return (
    <div ref={ref} className={className}>
      {children(progress)}
    </div>
  );
};

export default ScrollLinkedAnimator;
