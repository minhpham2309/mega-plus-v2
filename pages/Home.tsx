import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutSection from '../components/sections/home/AboutSection';
import ProductsSection from '../components/sections/home/ProductsSection';
import ServicesSection from '../components/sections/home/ServicesSection';
import QualitySection from '../components/sections/home/QualitySection';
import ContactSection from '../components/sections/home/ContactSection';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

import Magnetic from '../components/ui/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#products') {
            const element = document.getElementById('products');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 })
          .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .fromTo('.hero-right-card', { opacity: 0, x: 50, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power4.out' }, '-=1')
          .fromTo('.floating-element', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.5)' }, '-=0.5');

        // Floating animation for elements
        gsap.to('.floating-element', {
            y: -15,
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            stagger: {
                amount: 1,
                from: 'random'
            }
        });

    }, { scope: containerRef });

    return (
        <>
        <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-transparent">
            {/* Diagonal Lines Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute w-[200%] h-[1px] bg-green-600/10 top-[10%] -left-[50%] rotate-[-25deg]"></div>
                <div className="absolute w-[200%] h-[1px] bg-green-600/10 top-[35%] -left-[50%] rotate-[-25deg]"></div>
                <div className="absolute w-[200%] h-[1px] bg-green-600/10 top-[60%] -left-[50%] rotate-[-25deg]"></div>
                <div className="absolute w-[200%] h-[1px] bg-green-600/10 top-[85%] -left-[50%] rotate-[-25deg]"></div>
                
                {/* Radial Gradient for depth */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(22,163,74,0.05)_0%,rgba(255,255,255,0)_100%)]"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#F59E0B]/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10 min-h-screen flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Content */}
                    <div className="text-white max-w-2xl">
                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                            <span className="text-sm font-medium text-white">{t('home.new_hero_badge')}</span>
                        </div>
                        
                        <h1 className="hero-title text-5xl lg:text-6xl xl:text-[72px] font-bold leading-[1.1] mb-6 text-white" dangerouslySetInnerHTML={{ __html: t('home.new_hero_title') }} />
                        
                        <p className="hero-desc text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                            {t('home.new_hero_desc')}
                        </p>
                        
                        <div className="hero-buttons flex flex-wrap items-center gap-4 mb-16">
                            <Magnetic strength={0.3}>
                                <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold rounded-full transition-colors duration-300">
                                    {t('home.new_btn_products')}
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </Magnetic>
                            <Magnetic strength={0.3}>
                                <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white text-white hover:text-[#0A3A20] font-bold rounded-full transition-colors duration-300">
                                    {t('home.new_btn_services')}
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </Link>
                            </Magnetic>
                        </div>
                        
                        <div className="hero-stats flex items-center gap-8 lg:gap-12">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">15+</div>
                                <div className="text-sm text-gray-300 font-medium">{t('home.stat_years')}</div>
                            </div>
                            <div className="w-px h-12 bg-white/20"></div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">50+</div>
                                <div className="text-sm text-gray-300 font-medium">{t('home.stat_countries')}</div>
                            </div>
                            <div className="w-px h-12 bg-white/20"></div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">100K+</div>
                                <div className="text-sm text-gray-300 font-medium">{t('home.stat_tons')}</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Content - Cards */}
                    <div className="hero-right-card relative lg:ml-auto w-full max-w-lg">
                        <div className="flex bg-[#16A34A] rounded-3xl overflow-hidden shadow-2xl relative">
                            {/* Left Panel */}
                            <div className="flex-1 p-10 flex flex-col items-center justify-center text-center border-r border-white/10">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                                    <svg className="w-8 h-8 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11L12 15l-7-4m14-4l-7 4-7-4m14 8l-7 4-7-4" />
                                    </svg>
                                </div>
                                <span className="text-white font-medium">{t('home.card_farms')}</span>
                            </div>
                            
                            {/* Right Panel */}
                            <div className="flex-1 p-10 flex flex-col items-center justify-center text-center bg-[#15803D]">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                                    <svg className="w-8 h-8 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span className="text-white font-medium">{t('home.card_logistics')}</span>
                            </div>
                            
                            {/* Center Button */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-20 h-20 bg-[#F59E0B] rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-[#16A34A] z-10">
                                    <svg className="w-6 h-6 text-black mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                    <span className="text-black font-bold text-xs">B2B</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="floating-element absolute -top-8 right-12 w-16 h-16 bg-[#F59E0B] rounded-2xl shadow-xl flex items-center justify-center rotate-12">
                            <span className="text-2xl">🥭</span>
                        </div>
                        <div className="floating-element absolute -bottom-6 -right-6 w-14 h-14 bg-[#15803D] rounded-2xl shadow-xl flex items-center justify-center -rotate-12">
                            <span className="text-2xl">🍍</span>
                        </div>
                        <div className="floating-element absolute -bottom-12 left-8 w-12 h-12 bg-[#16A34A] rounded-2xl shadow-xl flex items-center justify-center rotate-45">
                            <span className="text-xl">🌾</span>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70">
                    <span className="text-white text-xs mb-2 tracking-widest uppercase font-medium">{t('home.scroll_explore')}</span>
                    <svg className="w-5 h-5 text-[#F59E0B] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
        <AnimatedSection type="fade-up" threshold={0.1}>
            <AboutSection />
        </AnimatedSection>
        
        <AnimatedSection type="fade-up" threshold={0.1}>
            <ProductsSection />
        </AnimatedSection>
        
        <AnimatedSection type="fade-up" threshold={0.1}>
            <ServicesSection />
        </AnimatedSection>
        
        <AnimatedSection type="fade-up" threshold={0.1}>
            <QualitySection />
        </AnimatedSection>
        
        <AnimatedSection type="fade-up" threshold={0.1}>
            <ContactSection />
        </AnimatedSection>
        </>
    );
};

export default Home;
