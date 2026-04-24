import React, { useState, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import Magnetic from './Magnetic';

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#products');
    }
    closeMenu();
  };
  
  // Navigation Styles
  const linkClass = "relative text-white/90 hover:text-fastway-orange transition-colors duration-300 text-sm font-semibold uppercase tracking-widest px-4 py-2 group";
  const activeLinkClass = "text-fastway-orange"; 
  const mobileLinkClass = "text-white hover:text-fastway-orange transition-colors duration-300 text-3xl font-black uppercase tracking-tighter";
  const mobileActiveLinkClass = "text-fastway-orange";

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    // 0. RESET & INITIAL SETUP (CRITICAL FOR STABILITY)
    // We explicitly set the "Top of Page" state here to ensure no layout shift.
    // We use xPercent: -50 in combination with left: 50% (in CSS) for perfect centering.
    gsap.set(header, { 
      width: "100%", 
      maxWidth: "100%",
      top: "0px", 
      borderRadius: "0px",
      backgroundColor: "rgba(10, 23, 41, 0.0)", // Transparent initially
      backdropFilter: "blur(0px)",
      border: "1px solid rgba(255,255,255,0.0)",
      boxShadow: "none",
      xPercent: -50, // GSAP Centering Logic
      yPercent: -100, // Prepare for slide-down intro
      opacity: 0
    });

    // 1. INTRO ANIMATION (Slide Down)
    // Runs once on load
    gsap.to(header, {
      yPercent: 0, 
      opacity: 1, 
      duration: 1.2, 
      ease: "power4.out", 
      delay: 0.2 
    });

    // 2. SCROLL MORPHING LOGIC
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // --- DESKTOP: FULL MORPH (Full Width -> Floating Pill) ---
      
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",    // Start animation when body top hits viewport top
        end: "+=150",        // End animation after scrolling 150px
        scrub: true,         // Smoothly link animation to scrollbar
        animation: gsap.to(header, {
          width: "85%",                 // Target Width: Shrink to 85%
          maxWidth: "1280px",           // Max Width cap
          top: "20px",                  // Float down
          borderRadius: "50px",         // Round corners
          backgroundColor: "rgba(10, 23, 41, 0.85)", // Dark semi-transparent
          backdropFilter: "blur(12px)", // Glass effect
          border: "1px solid rgba(255,255,255,0.1)", // Subtle border
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)", // Drop shadow
          paddingLeft: "32px",          // Adjust padding for pill look
          paddingRight: "32px",
          ease: "power1.inOut"          // Smooth easing for the scrub
        })
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // --- MOBILE: SIMPLIFIED (Just Background Fade) ---
      // On mobile, we usually don't want floating pills as they eat screen real estate.
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "+=100",
        scrub: 0.5,
        animation: gsap.to(header, {
          backgroundColor: "rgba(10, 23, 41, 0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          ease: "none"
        })
      });
    });

  }, { scope: headerRef });

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* 
        HEADER CONTAINER
        - position: fixed
        - left: 1/2 (50%)
        - NO 'translate-x' class here, handled by GSAP xPercent: -50
        - z-index: 50
      */}
      <header 
        ref={headerRef}
        className="fixed left-1/2 z-50 flex items-center justify-between px-6 py-2 box-border will-change-transform"
      >
        
        {/* LEFT: LOGO */}
        <div className="flex-shrink-0">
            <Magnetic strength={0.2}>
              <NavLink to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                 <div className="relative">
                    <div className="absolute inset-0 bg-fastway-orange blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
                    <Logo className="h-6 w-auto md:h-8 relative z-10" />
                    
                 </div>
              </NavLink>
            </Magnetic>
        </div>

        {/* CENTER: DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-2">
           <Magnetic strength={0.25}>
              <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                Home
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-1/2"></span>
              </NavLink>
           </Magnetic>
           <Magnetic strength={0.25}>
              <NavLink to="/about" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                About Us
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-1/2"></span>
              </NavLink>
           </Magnetic>
           <Magnetic strength={0.25}>
              <NavLink to="/products" onClick={handleProductsClick} className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                Products
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-1/2"></span>
              </NavLink>
           </Magnetic>
           <Magnetic strength={0.25}>
              <NavLink to="/services" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                Services
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-1/2"></span>
              </NavLink>
           </Magnetic>
           <Magnetic strength={0.25}>
              <NavLink to="/quality" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                Quality
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-1/2"></span>
              </NavLink>
           </Magnetic>
           <Magnetic strength={0.25}>
              <NavLink to="/contact" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                Contact
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-1/2"></span>
              </NavLink>
           </Magnetic>
        </nav>

        {/* RIGHT: CONTROLS & MOBILE TRIGGER */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden lg:flex items-center gap-4 pl-4">
            <Magnetic strength={0.2}>
              <NavLink to="/quote" className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 text-sm">
                Request a Quote
              </NavLink>
            </Magnetic>
          </div>

          {/* Hamburger (Mobile) */}
          <button 
            className="lg:hidden text-white p-2 focus:outline-none hover:text-fastway-orange transition-colors relative group"
            onClick={openMenu}
            aria-label="Open Menu"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-[#050B14] z-[100] transition-transform duration-500 cubic-bezier(0.7, 0, 0.3, 1) flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Background Grain */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 relative z-10 border-b border-white/10">
               <Logo className="h-8 w-auto text-white" />
               <button 
                 onClick={closeMenu}
                 className="text-white p-2 hover:text-fastway-orange transition-colors focus:outline-none rounded-full border border-white/20 hover:border-fastway-orange"
                 aria-label="Close Menu"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col justify-center px-8 flex-grow space-y-6 relative z-10">
              {[
                { to: "/", label: "Home", num: '01' },
                { to: "/about", label: "About Us", num: '02' },
                { to: "/products", label: "Products", num: '03' },
                { to: "/services", label: "Services", num: '04' },
                { to: "/quality", label: "Quality", num: '05' },
                { to: "/contact", label: "Contact", num: '06' },
                { to: "/quote", label: "Request a Quote", num: '07' }
              ].map((item) => (
                <NavLink 
                  key={item.to}
                  to={item.to} 
                  className={({ isActive }) => `group flex items-center justify-between border-b border-white/10 pb-4 ${isActive ? mobileActiveLinkClass : 'text-white'}`}
                  onClick={(e) => {
                    if (item.to === '/products') {
                      handleProductsClick(e);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  <span className="text-sm font-mono text-gray-500 group-hover:text-fastway-orange transition-colors">{item.num}</span>
                  <span className={`text-3xl font-black uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300 ${mobileLinkClass}`}>
                    {item.label}
                  </span>
                </NavLink>
              ))}
              
              {/* Mobile Controls */}
              <div className="flex items-center gap-6 mt-10 pt-4">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </nav>

            {/* Mobile Footer Decor */}
            <div className="p-8 text-white/20 text-xs font-mono uppercase tracking-widest text-center">
                MEGAPLUS Logistics © 2026
            </div>
      </div>
    </>
  );
};

export default Header;