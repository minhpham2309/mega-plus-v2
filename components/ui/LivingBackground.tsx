import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LivingBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // 1. Random Float Animation for each blob
    blobRefs.current.forEach((blob, i) => {
      if (!blob) return;
      
      // Random movement configuration
      const randomX = () => Math.random() * window.innerWidth * 0.4 - window.innerWidth * 0.2;
      const randomY = () => Math.random() * window.innerHeight * 0.4 - window.innerHeight * 0.2;
      const randomScale = () => 0.8 + Math.random() * 0.6;
      const randomDuration = () => 10 + Math.random() * 10;

      // Continuous floating
      gsap.to(blob, {
        x: randomX,
        y: randomY,
        scale: randomScale,
        rotation: 'random(-180, 180)',
        duration: randomDuration,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    // 2. Mouse Interaction (Parallax/Avoidance)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      blobRefs.current.forEach((blob, i) => {
        if (!blob) return;
        const depth = (i + 1) * 20; // Different depth for each layer
        gsap.to(blob, {
          x: `+=${xPercent * depth}`,
          y: `+=${yPercent * depth}`,
          duration: 1.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A3A20]"
    >
      <div className="absolute inset-0 bg-[#0A3A20] opacity-80 z-10 mix-blend-overlay"></div>
      
      {/* Blob 1: Orange Warmth */}
      <div 
        ref={el => { blobRefs.current[0] = el; }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F59E0B] opacity-20 blur-[100px] mix-blend-screen"
      />

      {/* Blob 2: Deep Green */}
      <div 
        ref={el => { blobRefs.current[1] = el; }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#16A34A] opacity-30 blur-[120px] mix-blend-screen"
      />

      {/* Blob 3: Accent Light */}
      <div 
        ref={el => { blobRefs.current[2] = el; }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#F59E0B] opacity-20 blur-[80px] mix-blend-screen"
      />
    </div>
  );
};

export default LivingBackground;
