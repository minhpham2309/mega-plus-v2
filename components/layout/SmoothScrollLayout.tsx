import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Extend Window interface to include lenis
declare global {
  interface Window {
    lenis: Lenis;
  }
}

const SmoothScrollLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    window.lenis = lenis; // Expose to global window

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Create a specific update function to reference in add and remove
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Disable GSAP lag smoothing to ensure sync with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      // @ts-ignore
      window.lenis = null;
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
    } else {
        window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return <div className="w-full min-h-screen">{children}</div>;
};

export default SmoothScrollLayout;