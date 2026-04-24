
import React, { useEffect, useRef, useCallback } from 'react';

const LERP_FACTOR = 0.06; // Decreased for a smoother, more 'floaty' effect
const SCROLL_MULTIPLIER = 1; // Adjusts scroll sensitivity

const useSmoothScroll = (scrollContainerRef: React.RefObject<HTMLElement>) => {
  // Use refs to store values that persist across renders without causing re-renders
  const currentScrollY = useRef(0);
  const targetScrollY = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  // Function to programmatically scroll to top and reset internal state
  const scrollToTop = useCallback(() => {
    if (scrollContainerRef.current) {
        // Reset DOM scroll
        scrollContainerRef.current.scrollTop = 0;
        
        // Reset internal state to prevent the smooth scroll loop from overwriting the position
        currentScrollY.current = 0;
        targetScrollY.current = 0;

        // Cancel any pending animation frame to stop movement
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
        }
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Initialize scroll positions from the container's current state
    currentScrollY.current = scrollContainer.scrollTop;
    targetScrollY.current = scrollContainer.scrollTop;

    // Linear interpolation function for smooth transitions
    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const animateScroll = () => {
      // Move current scroll position towards the target
      currentScrollY.current = lerp(currentScrollY.current, targetScrollY.current, LERP_FACTOR);

      // If we are very close to the target, snap to it and stop the animation loop
      // to prevent unnecessary computations.
      if (Math.abs(targetScrollY.current - currentScrollY.current) < 0.1) {
        currentScrollY.current = targetScrollY.current;
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
          animationFrameId.current = null;
        }
      } else {
        // Otherwise, continue the animation on the next frame
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
      
      // Apply the new scroll position to the container
      scrollContainer.scrollTop = currentScrollY.current;
    };
    
    const handleWheel = (event: WheelEvent) => {
      // Prevent the default browser scroll behavior
      event.preventDefault();
      
      // Update the target scroll position based on wheel delta
      targetScrollY.current += event.deltaY * SCROLL_MULTIPLIER;

      // Clamp the target scroll position to the container's bounds
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScrollY.current = Math.max(0, Math.min(targetScrollY.current, maxScroll));

      // Start the animation loop if it's not already running
      if (!animationFrameId.current) {
        animateScroll();
      }
    };

    // Add the wheel event listener
    // { passive: false } is required to allow preventDefault()
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup function to remove the event listener and cancel any running animation
    // when the component unmounts.
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [scrollContainerRef]); // Re-run the effect if the ref changes

  return { scrollToTop };
};

export default useSmoothScroll;
