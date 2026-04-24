import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlobalEffects: React.FC = () => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. KINETIC TYPOGRAPHY SYSTEM
    // Selects all H1, H2, H3 that don't already have manual animation classes
    const headings = document.querySelectorAll('h1:not(.manual-anim), h2:not(.manual-anim), h3:not(.manual-anim)');

    headings.forEach((heading) => {
      // Split text logic (Manual SplitText)
      if (heading.children.length > 0) return; // Skip if already has structure (like badges)
      
      const text = heading.textContent || "";
      const words = text.split(" ");
      
      heading.innerHTML = "";
      
      // Rebuild DOM with spans
      words.forEach((word) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word mr-[0.25em]"; // add space margin
        
        word.split("").forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.className = "char";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
        });
        
        heading.appendChild(wordSpan);
      });

      // Animate Chars
      gsap.fromTo(heading.querySelectorAll('.char'), 
        { 
            y: "100%", 
            opacity: 0,
            rotateX: -90,
            z: -200
        },
        {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            z: 0,
            stagger: 0.02,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
      );
    });

    // 2. LIQUID IMAGES SYSTEM (Velocity Distortion)
    const images = document.querySelectorAll('img:not(.no-liquid)');
    
    images.forEach((img) => {
        // Wrap image if not already wrapped (to handle overflow for scale effects)
        const parent = img.parentElement;
        if (!parent || parent.classList.contains('liquid-img-wrapper')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'liquid-img-wrapper relative overflow-hidden h-full w-full rounded-inherit';
        
        // Copy classes from img to wrapper to maintain layout
        wrapper.classList.add(...Array.from(img.classList));
        // Remove layout classes from img to let it fill wrapper
        img.className = 'liquid-img w-full h-full object-cover';
        
        parent.insertBefore(wrapper, img);
        wrapper.appendChild(img);

        // REVEAL ANIMATION
        gsap.fromTo(wrapper,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { 
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.5,
                ease: 'power4.inOut',
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top 90%"
                }
            }
        );

        // VELOCITY SKEW EFFECT
        // We create a proxy object to smooth out the velocity values
        let proxy = { skew: 0 };
        let skewSetter = gsap.quickSetter(img, "skewY", "deg");
        let scaleSetter = gsap.quickSetter(img, "scale");
        
        // Initial scale to prevent whitespace during skew
        gsap.set(img, { scale: 1.1 });

        ScrollTrigger.create({
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                let skew = self.getVelocity() / -500;
                // Clamp skew
                if (Math.abs(skew) > 10) skew = 10 * Math.sign(skew);
                
                // Smoothly animate the proxy property
                gsap.to(proxy, {
                    skew: skew,
                    duration: 0.5,
                    ease: "power3",
                    overwrite: true,
                    onUpdate: () => {
                        skewSetter(proxy.skew);
                        // Subtle scale compensation
                        scaleSetter(1.1 + Math.abs(proxy.skew) * 0.01);
                    }
                });
            }
        });
    });

  }, { scope: scopeRef });

  return <div ref={scopeRef} className="global-effects-controller hidden" />;
};

export default GlobalEffects;