import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 
  | 'fade-up' 
  | 'fade-down'
  | 'fade-in' 
  | 'reveal'      // Text rises from a masked container
  | 'scale' 
  | '3d-flip'     // Rotates in from X axis
  | 'slide-left' 
  | 'slide-right'
  | 'skew-up';    // Skews while moving up

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  type?: AnimationType;
  duration?: number; // Duration in seconds
  stagger?: number; // Stagger time between children if available
  threshold?: number; // 0 to 1
  distance?: number; // Distance in pixels for movement animations
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  type = 'fade-up',
  duration = 1,
  stagger = 0,
  threshold = 0.15,
  distance
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = containerRef.current;
    if (!element) return;

    // Clean up old triggers for this element to avoid conflicts during HMR
    ScrollTrigger.getAll().forEach(t => {
       if (t.trigger === element) {
           t.kill();
       }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top ${100 - (threshold * 100)}%`, // e.g., "top 85%"
        toggleActions: 'play none none reverse',
      }
    });

    const vars: gsap.TweenVars = {
      duration: duration,
      delay: delay / 1000, // convert ms to seconds
      ease: 'power3.out',
    };
    
    // Default distances if not provided
    const distY = distance || 50;
    const distX = distance || 100;

    switch (type) {
      case 'fade-up':
        tl.fromTo(element, 
          { y: distY, opacity: 0 }, 
          { y: 0, opacity: 1, ...vars }
        );
        break;

      case 'fade-down':
        tl.fromTo(element, 
          { y: -distY, opacity: 0 }, 
          { y: 0, opacity: 1, ...vars }
        );
        break;
      
      case 'fade-in':
        tl.fromTo(element, 
          { opacity: 0 }, 
          { opacity: 1, ...vars }
        );
        break;

      case 'reveal':
        // Requires the child to be display block/inline-block
        gsap.set(element, { overflow: 'hidden' }); 
        const target = element.children.length > 0 ? element.children : element;
        
        tl.fromTo(target, 
          { yPercent: 100, opacity: 0, rotate: 5 },
          { yPercent: 0, opacity: 1, rotate: 0, stagger: stagger, duration: 1.2, ease: 'expo.out', ...vars }
        );
        break;

      case 'scale':
        tl.fromTo(element,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, ...vars }
        );
        break;

      case '3d-flip':
        tl.fromTo(element,
          { rotationX: 45, y: distY, opacity: 0, transformPerspective: 1000 },
          { rotationX: 0, y: 0, opacity: 1, ...vars }
        );
        break;

      case 'slide-left':
        tl.fromTo(element,
          { x: -distX, opacity: 0 },
          { x: 0, opacity: 1, ...vars }
        );
        break;
      
      case 'slide-right':
        tl.fromTo(element,
          { x: distX, opacity: 0 },
          { x: 0, opacity: 1, ...vars }
        );
        break;

      case 'skew-up':
        tl.fromTo(element,
          { y: 100, opacity: 0, skewY: 7 },
          { y: 0, opacity: 1, skewY: 0, ...vars }
        );
        break;
    }

  }, { scope: containerRef, dependencies: [type, delay, duration, distance] });
  
  if (type === 'reveal') {
     return (
        <div ref={containerRef} className={`${className} overflow-hidden`}>
            {children}
        </div>
     );
  }

  return (
    <div ref={containerRef} className={`${className} will-change-transform`}>
        {children}
    </div>
  );
};

export default AnimatedSection;