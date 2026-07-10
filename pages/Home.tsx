import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserCheck, Leaf, Activity, Sprout, Globe, ArrowLeftRight, ShieldCheck, Award, Handshake } from 'lucide-react';
import mangoRmbg from '@/assets/mango-rmbg.webp';
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
                    <div className="hero-right-card relative lg:ml-auto w-full max-w-xl xl:max-w-2xl z-20">
                        {/* Top Trust Metrics */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8 border-b border-white/10 pb-6">
                            {/* Item 1: Years Experience */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-950/40 flex items-center justify-center text-green-400 shrink-0 shadow-[0_0_12px_rgba(22,163,74,0.15)]">
                                    <UserCheck className="w-4 h-4 text-[#16A34A]" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-bold text-xs leading-none tracking-wide uppercase">{t('home.stat_years')}</h4>
                                    <p className="text-gray-400 text-[11px] mt-1 font-medium">{t('home.stat_years_desc')}</p>
                                </div>
                            </div>

                            {/* Vertical divider on desktop, horizontal on mobile */}
                            <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>

                            {/* Item 2: Countless Served */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-950/40 flex items-center justify-center text-green-400 shrink-0 shadow-[0_0_12px_rgba(22,163,74,0.15)]">
                                    <Leaf className="w-4 h-4 text-[#16A34A]" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-bold text-xs leading-none tracking-wide uppercase">{t('home.stat_served_title')}</h4>
                                    <p className="text-gray-400 text-[11px] mt-1 font-medium">{t('home.stat_served_desc')}</p>
                                </div>
                            </div>

                            {/* Vertical divider on desktop, horizontal on mobile */}
                            <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>

                            {/* Item 3: Tons Exported */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-950/40 flex items-center justify-center text-green-400 shrink-0 shadow-[0_0_12px_rgba(22,163,74,0.15)]">
                                    <Activity className="w-4 h-4 text-[#16A34A]" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-bold text-xs leading-none tracking-wide uppercase">{t('home.stat_tons')}</h4>
                                    <p className="text-gray-400 text-[11px] mt-1 font-medium">{t('home.stat_tons_desc')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Main B2B Split Card */}
                        <div className="relative bg-[#0d1f12] rounded-[32px] shadow-2xl border border-white/10 flex flex-col md:flex-row h-auto md:h-[300px] mb-8 overflow-visible">
                            {/* Left Panel - Premium Farms */}
                            <div className="flex-1 rounded-t-[32px] md:rounded-tr-none md:rounded-l-[31px] relative overflow-hidden group min-h-[220px] md:min-h-0 flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                                {/* Background image & gradient overlay */}
                                <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                                     style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop')` }} />
                                <div className="absolute inset-0 z-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/80 to-emerald-950/50" />
                                
                                <div className="relative z-10 flex flex-col items-start">
                                    {/* Gold Plant Badge Icon */}
                                    <div className="w-11 h-11 rounded-xl bg-emerald-950/90 border border-amber-500/40 flex items-center justify-center shadow-lg mb-6 backdrop-blur-md">
                                        <Sprout className="w-5 h-5 text-amber-500" />
                                    </div>
                                    
                                    {/* Headline */}
                                    <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight leading-none mb-1 text-left">
                                        PREMIUM<br />FARMS
                                    </h3>
                                    
                                    {/* Subtitle */}
                                    <p className="text-gray-300 text-xs md:text-[13px] mt-2 font-medium leading-relaxed max-w-[200px] text-left">
                                        {t('home.farms_subtitle')}
                                    </p>
                                </div>
                            </div>

                            {/* Right Panel - Global Logistics */}
                            <div className="flex-1 rounded-b-[32px] md:rounded-bl-none md:rounded-r-[31px] relative overflow-hidden group min-h-[220px] md:min-h-0 flex flex-col justify-between p-8 md:p-10">
                                {/* Background image & gradient overlay */}
                                <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                                     style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop')` }} />
                                <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/50" />
                                
                                <div className="relative z-10 flex flex-col items-start md:items-end md:text-right">
                                    {/* Gold Globe Badge Icon */}
                                    <div className="w-11 h-11 rounded-xl bg-slate-950/90 border border-amber-500/40 flex items-center justify-center shadow-lg mb-6 backdrop-blur-md">
                                        <Globe className="w-5 h-5 text-amber-500" />
                                    </div>
                                    
                                    {/* Headline */}
                                    <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight leading-none mb-1">
                                        GLOBAL<br />LOGISTICS
                                    </h3>
                                    
                                    {/* Subtitle */}
                                    <p className="text-gray-300 text-xs md:text-[13px] mt-2 font-medium leading-relaxed max-w-[200px]">
                                        {t('home.logistics_subtitle')}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Floating Mangoes (transparent bg-removed) */}
                            <div className="absolute -bottom-10 -left-6 sm:-bottom-12 sm:-left-8 z-30 pointer-events-none select-none">
                                <img 
                                    src={mangoRmbg} 
                                    alt="Premium Mangoes" 
                                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] rotate-[-12deg]"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            
                            {/* Center Button - B2B Connection hub */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                                <div className="w-20 h-20 rounded-full border-[3px] border-amber-500/80 bg-neutral-950/90 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.4)] backdrop-blur-md">
                                    <div className="w-16 h-16 rounded-full border border-amber-500/30 flex flex-col items-center justify-center">
                                        <ArrowLeftRight className="w-5 h-5 text-amber-500 mb-0.5" />
                                        <span className="text-amber-500 font-extrabold text-xs tracking-wider">B2B</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Mango Card - Top Right of B2B Card */}
                            <div className="floating-element absolute -top-8 -right-4 md:-top-10 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-amber-500 rounded-2xl md:rounded-[24px] shadow-[0_12px_28px_rgba(245,158,11,0.55)] flex items-center justify-center rotate-12 z-30 overflow-hidden border border-amber-400">
                                <img 
                                    src="https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=150&auto=format&fit=crop" 
                                    alt="Mango" 
                                    className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>

                        {/* Bottom Tagline */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-500/40"></div>
                            <span className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                                {t('home.about_us_bottom_brand')}
                            </span>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-500/40"></div>
                        </div>

                        {/* Bottom Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Badge 1: Reliable Supply */}
                            <div className="flex items-center gap-3 bg-green-950/20 hover:bg-green-950/30 border border-white/5 hover:border-white/10 p-3 rounded-2xl transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-green-500/20 bg-green-950/30 flex items-center justify-center text-green-400 shrink-0">
                                    <ShieldCheck className="w-4 h-4 text-green-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold text-xs leading-none">{t('home.about_us_bottom_1_title')}</span>
                                    <span className="text-gray-400 text-[10px] mt-1">{t('home.about_us_bottom_1_desc')}</span>
                                </div>
                            </div>

                            {/* Badge 2: Premium Quality */}
                            <div className="flex items-center gap-3 bg-green-950/20 hover:bg-green-950/30 border border-white/5 hover:border-white/10 p-3 rounded-2xl transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-green-500/20 bg-green-950/30 flex items-center justify-center text-green-400 shrink-0">
                                    <Award className="w-4 h-4 text-green-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold text-xs leading-none">{t('home.about_us_bottom_2_title')}</span>
                                    <span className="text-gray-400 text-[10px] mt-1">{t('home.about_us_bottom_2_desc')}</span>
                                </div>
                            </div>

                            {/* Badge 3: Long-term Partnership */}
                            <div className="flex items-center gap-3 bg-green-950/20 hover:bg-green-950/30 border border-white/5 hover:border-white/10 p-3 rounded-2xl transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-green-500/20 bg-green-950/30 flex items-center justify-center text-green-400 shrink-0">
                                    <Handshake className="w-4 h-4 text-green-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold text-xs leading-none">{t('home.about_us_bottom_3_title')}</span>
                                    <span className="text-gray-400 text-[10px] mt-1">{t('home.about_us_bottom_3_desc')}</span>
                                </div>
                            </div>
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
