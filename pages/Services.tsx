import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Partners from '../components/sections/home/Partners';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/ui/AnimatedSection';
import Magnetic from '../components/ui/Magnetic';
import AirFreightIcon from '../components/icons/AirFreightIcon';
import OceanFreightIcon from '../components/icons/OceanFreightIcon';
import TrackingIcon from '../components/icons/TrackingIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesDropdownData, ServiceCategory, ServiceItem } from '../constants/servicesDropdownData';

gsap.registerPlugin(ScrollTrigger);

// --- Helper Component for Kinetic Text ---
const KineticText: React.FC<{ children: string; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const words = children.split(' ');
  return (
    <div className={`perspective-container ${className} flex flex-wrap justify-center gap-x-3 md:gap-x-4 manual-anim`}> 
      {words.map((word, i) => (
        <div key={i} className="clip-text-container overflow-hidden">
          <span className="kinetic-word inline-block origin-bottom-left will-change-transform translate-y-[120%] rotate-y-6 opacity-0">
            {word}
          </span>
        </div>
      ))}
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 h-full border border-white/10 group cursor-hover">
        <div className="text-fastway-orange w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 ease-out">{icon}</div>
        <h3 className="text-h3 uppercase font-bold text-white mb-2">{title}</h3>
        <p className="text-body text-gray-300">{description}</p>
    </div>
);

const heroImages = [
    "https://picsum.photos/1920/1080?grayscale&blur=2",
    "https://img.freepik.com/free-photo/container-ship-import-export-business-logistics-shipping-cargo-freight-transportation-concept_1150-17937.jpg?w=1380", 
    "https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-718.jpg?w=1380"
];

// These images must match the ones rendered in the sections below
const scrollImages = [
    "https://picsum.photos/600/400?random=4", // Safe & Reliable
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", // Air
    "https://camaulogistics.com/wp-content/uploads/2025/06/diem-giong-nhau-giua-van-tai-bang-duong-bien-va-duong-hang-khong.jpg", // Sea
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" // Domestic
];

const testimonialsData = [
    {
        name: "NGOC LE TU THANH THUY",
        role: "Marketing Officer",
        quote: "Excellent service! MEGAPLUS handled our fruit export to Europe perfectly. The reefer containers were monitored 24/7, ensuring top quality upon arrival.",
        image: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    {
        name: "PHAN MY MY",
        role: "Logistics Manager",
        quote: "Reliable partner for our logistics needs. Their customs clearance team is very professional and solved complex documentation issues quickly.",
        image: "https://randomuser.me/api/portraits/women/68.jpg" 
    },
    {
        name: "PHAN HUONG GIANG",
        role: "Sales Director",
        quote: "Fast and transparent. We appreciate the real-time tracking updates and the dedicated support team available whenever we need them.",
        image: "https://randomuser.me/api/portraits/women/65.jpg" 
    }
];

// Detail View Component
const ServiceDetail: React.FC<{ serviceId: string, onBack: () => void }> = ({ serviceId, onBack }) => {
    const { t } = useLanguage();
    
    const getServiceTitle = (id: string) => {
        for (const cat of servicesDropdownData) {
            const item = cat.items.find(i => i.id === id);
            if (item) return t(item.translationKey);
        }
        return 'Service Details';
    };

    const serviceTitle = getServiceTitle(serviceId);

    const getContent = (sectionId: string) => {
        const specificKey = `services.details.${serviceId}.${sectionId}`;
        const specificText = t(specificKey);
        
        if (specificText === specificKey) {
             return null;
        }
        return specificText;
    };

    const sections = [
        { id: 'intro', title: t('services.sec_intro') },
        { id: 'pain', title: t('services.sec_pain') },
        { id: 'solution', title: t('services.sec_solution') },
        { id: 'process', title: t('services.sec_process') },
        { id: 'benefits', title: t('services.sec_benefits') },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Offset for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const renderRichText = (text: string | null) => {
        if (!text) return <p className="italic text-gray-500">Nội dung đang được cập nhật...</p>;

        return text.split('\n').map((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return <br key={index} />;
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <div key={index} className={`mb-3 ${line.startsWith('✅') || line.startsWith('-') || line.startsWith('•') ? 'ml-4' : ''}`}>
                     {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                    })}
                </div>
            );
        });
    };

    return (
        <div className="animate-fade-in-up">
            <Magnetic>
                <button 
                    onClick={onBack}
                    className="mb-6 flex items-center text-fastway-orange font-bold hover:underline group"
                >
                    <span className="inline-block transition-transform group-hover:-translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </span>
                    {t('common.back_to_services')}
                </button>
            </Magnetic>

            {/* Immersive Header Image */}
            <AnimatedSection type="scale">
                <div className="relative h-[50vh] md:h-[60vh] w-full mb-12 rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-fastway-dark-blue to-transparent z-10 opacity-80"></div>
                    <img 
                        src={`https://picsum.photos/1200/600?random=${serviceId}`} 
                        alt={serviceTitle}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
                        <span className="bg-fastway-orange/90 backdrop-blur text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em] shadow-lg">
                            MEGAPLUS Services
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white text-center uppercase tracking-tight drop-shadow-xl max-w-4xl leading-tight">
                            {serviceTitle}
                        </h1>
                    </div>
                </div>
            </AnimatedSection>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
                {/* Sticky Sidebar / Table of Contents */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-28 bg-white/5 backdrop-blur p-8 rounded-2xl shadow-xl border border-white/10">
                        <h3 className="text-lg font-bold mb-6 uppercase text-white tracking-widest flex items-center">
                            <span className="w-1 h-5 bg-fastway-orange mr-3 rounded-full"></span>
                            {t('services.sec_toc')}
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            {sections.map((sec) => (
                                <button
                                    key={sec.id}
                                    onClick={() => scrollToSection(sec.id)}
                                    className="block w-full text-left text-gray-300 hover:text-fastway-orange transition-colors text-base font-medium py-2 px-2 border-l-2 border-transparent hover:border-fastway-orange"
                                >
                                    {sec.title}
                                </button>
                            ))}
                            <div className="pt-6">
                                <Magnetic>
                                    <button
                                        onClick={() => scrollToSection('cta')}
                                        className="block w-full text-center bg-fastway-orange text-white font-bold hover:bg-amber-600 transition-colors py-4 rounded-xl shadow-lg shadow-amber-500/30 uppercase tracking-wide text-sm"
                                    >
                                        {t('services.sec_cta')}
                                    </button>
                                </Magnetic>
                            </div>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="lg:w-3/4 space-y-20 pb-20">
                    {sections.map((sec, index) => {
                        const content = getContent(sec.id);
                        if (!content) return null;

                        return (
                            <AnimatedSection key={sec.id} type="fade-up" delay={index * 100}>
                                <div id={sec.id} className="scroll-mt-32">
                                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8 flex items-center">
                                        {/* Stylized Number */}
                                        <span className="text-6xl font-black text-white/5 mr-[-20px] z-0 select-none opacity-50 translate-y-[-10px]">0{index + 1}</span>
                                        <span className="relative z-10">{sec.title}</span>
                                    </h2>
                                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg pl-4 border-l-2 border-white/20">
                                        {renderRichText(content)}
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}

                    {/* CTA Section */}
                    <AnimatedSection type="scale">
                        <div id="cta" className="mt-12 bg-white/5 text-white border border-white/10 p-10 md:p-16 rounded-3xl text-center relative overflow-hidden scroll-mt-32 shadow-2xl">
                             <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20 pointer-events-none"></div>
                             <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 rounded-full blur-[80px] opacity-10 -ml-10 -mb-10 pointer-events-none"></div>
                             
                             <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10 tracking-tight">{t('services.sec_cta')}</h2>
                             <div className="prose prose-invert max-w-3xl mx-auto mb-10 relative z-10 text-xl text-gray-300 font-light">
                                 {renderRichText(getContent('cta') || t('services.sec_cta'))}
                             </div>
                             
                             <div className="relative z-10">
                                 <Magnetic strength={0.4}>
                                     <Link 
                                        to="/contact" 
                                        className="inline-block bg-fastway-orange text-white font-bold py-5 px-12 rounded-full hover:bg-amber-600 transition-all duration-300 text-lg uppercase tracking-wider shadow-xl"
                                    >
                                        {t('common.get_quote')}
                                    </Link>
                                 </Magnetic>
                             </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const { t } = useLanguage();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedService = searchParams.get('id');

    const setSelectedService = (id: string | null) => {
        if (id) {
            setSearchParams({ id });
        } else {
            setSearchParams({});
        }
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    // --- ORCHESTRATED ANIMATION SEQUENCE ---
    useGSAP(() => {
        if (!heroRef.current || selectedService) return;
        
        const tl = gsap.timeline();

        // 1. SETUP: Initial States
        gsap.set('.hero-bg-img', { scale: 1.4, filter: 'blur(10px)' });
        gsap.set('.hero-content', { y: 100, opacity: 0 });
        
        // 2. THE REVEAL
        tl.to(overlayRef.current, { height: 0, duration: 1.5, ease: 'power4.inOut', delay: 0.2 })
          .to('.hero-bg-img', { scale: 1, filter: 'blur(0px)', duration: 2, ease: 'power2.out' }, "-=1.2"); 

        // 3. KINETIC TYPOGRAPHY
        tl.to('.kinetic-word', { y: '0%', opacity: 1, rotateY: 0, duration: 1.2, stagger: 0.08, ease: 'elastic.out(1, 0.75)' }, "-=1.5");
        
        // 4. SECONDARY ELEMENTS
        tl.to('.hero-content', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, "-=1.0");

        // 5. HERO PARALLAX
        gsap.to('.hero-text-container', {
            yPercent: -50, opacity: 0, ease: 'none',
            scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true }
        });

    }, { scope: containerRef, dependencies: [selectedService] });

    // Background Slider
    useEffect(() => {
        if (selectedService) return;
        const interval = setInterval(() => setCurrentImageIndex((p) => (p + 1) % heroImages.length), 6000);
        return () => clearInterval(interval);
    }, [selectedService]);

    const handleExploreClick = () => {
        if ((window as any).lenis) {
            (window as any).lenis.scrollTo('#intro-section', { offset: 0, duration: 2.2 });
        } else {
            document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll to top when switching views
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedService]);

    return (
        <div ref={containerRef} className="overflow-x-hidden min-h-screen bg-transparent transition-colors duration-300">
            {!selectedService && (
                <section ref={heroRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                    <div ref={overlayRef} className="absolute bottom-0 left-0 w-full h-full bg-[#0A3A20] z-50 pointer-events-none"></div>
                    <div className="absolute inset-0 z-0">
                        {heroImages.map((img, index) => (
                            <div 
                                key={index}
                                className={`hero-bg-img absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                                style={{ backgroundImage: `url('${img}')` }}
                            />
                        ))}
                        <div className="absolute inset-0 bg-[#0A3A20]/70 backdrop-blur-sm"></div>
                    </div>
                    
                    <div className="hero-text-container relative text-center text-white z-10 px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
                        <div className="hero-content mb-6">
                            <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
                                Megaplus Solutions
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold mb-8 leading-[1.1] drop-shadow-2xl">
                            <KineticText>{t('nav.services')}</KineticText>
                        </h1>
                        <div className="hero-content flex flex-col items-center gap-6 max-w-2xl">
                             <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                                {t('services.intro_desc')}
                             </p>
                             <Magnetic strength={0.4}>
                                 <div className="mt-4 group relative inline-block">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-fastway-orange to-amber-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                    <button onClick={handleExploreClick} className="relative px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full text-lg tracking-wide hover:bg-white/10 transition-all cursor-pointer">
                                        View All Categories
                                    </button>
                                 </div>
                             </Magnetic>
                        </div>
                    </div>
                </section>
            )}

            {!selectedService && (
                <>
                    {/* --- INTRO SECTION --- */}
                    <section id="intro-section" className="py-20 md:py-32 bg-transparent transition-colors duration-300 relative z-20">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
                                <div className="intro-badge inline-block bg-white/10 px-6 py-2 rounded-full mb-6 border border-white/20">
                                    <span className="text-white font-secondary font-bold text-sm uppercase tracking-widest">{t('home.intro_badge')}</span>
                                </div>
                                <h2 className="intro-title text-3xl md:text-5xl uppercase font-black text-white mt-2 leading-tight">
                                    {t('home.intro_title')}
                                </h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                                <div className="intro-left-col bg-white/5 p-10 rounded-3xl border-l-4 border-fastway-orange shadow-sm relative group hover:bg-white/10 transition-colors duration-500">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg className="w-24 h-24 text-fastway-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                                    </div>
                                    <p className="text-lg md:text-xl text-white leading-relaxed font-medium relative z-10">
                                        {t('home.intro_desc_1')}
                                    </p>
                                </div>

                                <div className="intro-right-col space-y-8 flex flex-col justify-center h-full pt-4">
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {t('home.intro_desc_2')}
                                    </p>
                                    <div className="flex items-center gap-4 text-fastway-orange font-bold text-xl cursor-hover group w-max">
                                        <span>{t('home.intro_cta_text')}</span>
                                        <Magnetic strength={0.5}><span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span></Magnetic>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pain Points Section */}
                    <section className="py-20 md:py-28 bg-[#0A3A20]/40 backdrop-blur-sm transition-colors duration-300 relative">
                        <div className="container mx-auto px-4 md:px-6 relative z-10">
                            <AnimatedSection type="fade-up">
                                <h2 className="text-3xl md:text-5xl uppercase font-bold text-center text-white mb-16 md:mb-20">
                                    {t('home.pain_points_title')}
                                </h2>
                            </AnimatedSection>
                            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                                <div className="grid gap-6">
                                    {[1, 2, 3, 4].map((item, index) => (
                                        <AnimatedSection key={index} type="slide-left" delay={index * 100}>
                                            <div className="flex items-start bg-white/5 p-6 md:p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md hover:border-red-500/50 transition-all duration-300 group">
                                                <div className="shrink-0 mr-6 text-red-500 mt-1 bg-red-500/10 p-3 rounded-full group-hover:scale-110 transition-transform">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                </div>
                                                <p className="text-lg font-medium text-white pt-1">
                                                    {t(`home.pp_${item}`)}
                                                </p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                                <AnimatedSection type="scale" delay={400}>
                                    <div className="bg-green-700 text-white p-10 md:p-14 rounded-3xl shadow-2xl text-center md:text-left relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F59E0B] rounded-full blur-[80px] opacity-30 -mr-10 -mt-10 group-hover:opacity-50 transition-opacity duration-700"></div>
                                        <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-snug relative z-10">
                                            {t('home.pain_points_solution')}
                                        </h3>
                                        <div className="mt-8 relative z-10">
                                            <Magnetic strength={0.3}>
                                                <Link to="/contact" className="inline-block bg-fastway-orange text-white font-bold py-4 px-10 rounded-full hover:bg-amber-600 transition-all duration-300 hover:shadow-amber-500/30 uppercase tracking-wider cursor-hover">
                                                    {t('common.submit_request')}
                                                </Link>
                                            </Magnetic>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="py-20 bg-transparent transition-colors duration-300 relative z-20">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl uppercase font-black text-white leading-tight">
                                    Our Main Services
                                </h2>
                                <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
                                    Comprehensive logistics and export solutions tailored to your business needs worldwide.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <AnimatedSection type="skew-up" delay={0}><ServiceCard icon={<AirFreightIcon />} title={t('home.service_air_title')} description={t('home.service_air_desc')} /></AnimatedSection>
                                <AnimatedSection type="skew-up" delay={150}><ServiceCard icon={<OceanFreightIcon />} title={t('home.service_ocean_title')} description={t('home.service_ocean_desc')} /></AnimatedSection>
                                <AnimatedSection type="skew-up" delay={300}><ServiceCard icon={<TrackingIcon />} title={t('home.service_road_title')} description={t('home.service_road_desc')} /></AnimatedSection>
                            </div>
                        </div>
                    </section>

                    {/* Recent Articles */}
                    <section className="py-20 md:py-28 bg-[#0A3A20]/60 transition-colors duration-300">
                        <div className="container mx-auto px-4 md:px-6 text-center">
                            <AnimatedSection type="fade-up">
                                <div>
                                    <h2 className="text-3xl md:text-5xl uppercase font-bold text-white mt-2 mb-6">{t('home.articles_title')}</h2>
                                    <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">{t('home.articles_desc')}</p>
                                </div>
                            </AnimatedSection>
                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                {[1, 2, 3].map((i) => (
                                    <AnimatedSection key={i} delay={i * 150} type="fade-up">
                                        <div className="bg-white/5 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-3 transition-all duration-500 h-full flex flex-col group cursor-hover border border-white/10">
                                            <div className="overflow-hidden h-56 relative liquid-img-wrapper">
                                                <div className="absolute inset-0 bg-fastway-orange/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                                <img src={`https://picsum.photos/400/250?random=${i}`} alt="Article" className="w-full h-full object-cover liquid-img" />
                                            </div>
                                            <div className="p-8 flex-grow">
                                                <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-2 block">Insights</span>
                                                <h3 className="text-xl font-bold mb-3 text-white uppercase group-hover:text-[#F59E0B] transition-colors line-clamp-2">Importers achieve cost savings through better supply chain.</h3>
                                                <p className="text-sm text-gray-400 mb-4 font-mono">Jun 20, 2024</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                            <AnimatedSection delay={400} type="scale">
                                <div>
                                    <Magnetic>
                                        <button className="mt-16 bg-transparent border-2 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white font-bold py-3 px-10 rounded-full transition-all duration-300 text-lg cursor-hover">{t('common.view_all_news')}</button>
                                    </Magnetic>
                                </div>
                            </AnimatedSection>
                        </div>
                    </section>

                    {/* Safe & Reliable Section (Text Left, Image Right) */}
                    <section className="min-h-screen flex flex-col justify-center py-20 bg-transparent transition-colors duration-300 relative">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Text Content */}
                                <AnimatedSection type="slide-left">
                                    <div className="flex gap-6 md:gap-8 h-full">
                                        <div className="w-1 md:w-1.5 bg-fastway-orange shrink-0 self-stretch rounded-full origin-top transform scale-y-100"></div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-fastway-orange font-secondary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">{t('home.safe_badge')}</span>
                                            <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-white mb-6 leading-[1.1]">{t('home.safe_title')}</h2>
                                            <p className="text-gray-300 text-lg leading-relaxed mb-10 text-justify md:text-left">{t('home.safe_desc')}</p>
                                            <div>
                                                <Magnetic strength={0.3}>
                                                    <button className="bg-fastway-orange text-white font-bold py-5 px-10 rounded-full hover:bg-amber-600 transition-colors duration-300 text-lg cursor-hover shadow-xl shadow-amber-500/20">{t('common.schedule_appointment')}</button>
                                                </Magnetic>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Image Content */}
                                <AnimatedSection type="scale" delay={200}>
                                    <div className="relative rounded-2xl aspect-[4/3] group shadow-2xl overflow-hidden">
                                        <div className="absolute inset-0 bg-[#0A3A20] transition-colors"></div>
                                        <img 
                                            src={scrollImages[0]} 
                                            alt="Warehouse" 
                                            className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110 ease-out no-liquid"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </section>
                    
                    {/* Air Freight Section (Image Left, Text Right) */}
                    <section className="min-h-screen flex flex-col justify-center py-20 bg-black/40 backdrop-blur-sm transition-colors duration-300 relative">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                
                                {/* Image Content */}
                                <AnimatedSection type="scale" className="order-2 lg:order-1 relative group" delay={200}>
                                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-fastway-orange/10 rounded-full blur-2xl"></div>
                                    <div className="relative z-10 p-2 bg-white/10 rounded-2xl shadow-2xl">
                                        <div className="relative rounded-xl aspect-[4/3] border border-white/20 overflow-hidden">
                                            <img 
                                                src={scrollImages[1]} 
                                                alt="Air Freight Logistics" 
                                                className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110 ease-out no-liquid"
                                            />
                                            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur p-4 rounded-lg shadow-lg border-l-4 border-amber-500 z-10">
                                                <div className="text-white font-bold text-lg uppercase tracking-wider">Fast & Secure</div>
                                                <div className="text-xs text-gray-400 mt-1">Global Network</div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Text Content */}
                                <AnimatedSection type="slide-right" className="order-1 lg:order-2">
                                    <div className="flex gap-6 md:gap-8 h-full">
                                        <div className="w-1 md:w-1.5 bg-amber-500 shrink-0 self-stretch rounded-full"></div>
                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-white mb-8 leading-[1.1] tracking-tight">{t('home.air_freight_section_title')}</h2>
                                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
                                                <p className="font-medium text-xl text-white">{t('home.air_freight_section_intro')}</p>
                                                <p>{t('home.air_freight_p1').substring(0, 150)}...</p>
                                                <p className="text-gray-400">{t('home.air_freight_p2')}</p>
                                            </div>
                                            <div className="mt-10">
                                                <Link to="/services?id=air_freight" className="inline-flex items-center text-amber-600 font-bold uppercase tracking-wider hover:translate-x-2 transition-transform duration-300">
                                                    {t('common.read_more')}
                                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </section>

                    {/* Sea Freight Section (Text Left, Image Right) */}
                    <section className="min-h-screen flex flex-col justify-center py-20 bg-transparent transition-colors duration-300 relative">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Text Content */}
                                <AnimatedSection type="slide-left">
                                    <div className="flex gap-6 md:gap-8 h-full">
                                        <div className="w-1 md:w-1.5 bg-green-600 shrink-0 self-stretch rounded-full origin-top transform scale-y-100"></div>
                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-white mb-6 leading-[1.1]">{t('home.sea_freight_section_title')}</h2>
                                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
                                                <p className="font-medium text-xl text-white">{t('home.sea_freight_section_intro')}</p>
                                                <p>{t('home.sea_freight_p1')}</p>
                                                <p>{t('home.sea_freight_p2')}</p>
                                            </div>
                                            <div className="mt-8">
                                                <Link to="/services?id=sea_freight" className="inline-flex items-center text-green-600 font-bold uppercase tracking-wider hover:translate-x-2 transition-transform duration-300">
                                                    {t('common.read_more')}
                                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Image Content */}
                                <AnimatedSection type="scale" delay={200}>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-[#0A3A20] rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                                        <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-3xl -z-20"></div>
                                        
                                        <div className="relative rounded-2xl shadow-2xl aspect-[4/3] overflow-hidden z-10">
                                            <img 
                                                src={scrollImages[2]} 
                                                alt="Sea Freight" 
                                                className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110 ease-out no-liquid"
                                            />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </section>

                    {/* Domestic Transportation Section (Image Left, Text Right) */}
                    <section className="min-h-screen flex flex-col justify-center py-20 bg-black/40 backdrop-blur-sm transition-colors duration-300 relative">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                
                                {/* Image Content */}
                                <AnimatedSection type="scale" delay={200} className="order-2 lg:order-1 relative group">
                                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
                                    <div className="relative z-10 p-2 bg-white/10 rounded-2xl shadow-2xl">
                                        <div className="relative rounded-xl aspect-[4/3] border border-white/20 overflow-hidden">
                                            <img 
                                                src={scrollImages[3]} 
                                                alt="Domestic Transport" 
                                                className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110 ease-out no-liquid"
                                            />
                                            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur p-4 rounded-lg shadow-lg border-l-4 border-green-500 z-10">
                                                <div className="text-white font-bold text-lg uppercase tracking-wider">Nationwide</div>
                                                <div className="text-xs text-gray-400 mt-1">24/7 Service</div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Text Content */}
                                <AnimatedSection type="slide-right" className="order-1 lg:order-2">
                                    <div className="flex gap-6 md:gap-8 h-full">
                                        <div className="w-1 md:w-1.5 bg-green-500 shrink-0 self-stretch rounded-full"></div>
                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-white mb-8 leading-[1.1] tracking-tight">{t('home.domestic_section_title')}</h2>
                                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
                                                <p className="font-medium text-xl text-white">{t('home.domestic_section_intro')}</p>
                                                <p>{t('home.domestic_p1')}</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                                        <div key={i} className="flex items-start">
                                                            <svg className="w-5 h-5 text-green-500 mt-1 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                            <span className="text-sm">{t(`home.domestic_li${i}`)}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials (What People Say) Section */}
                    <section className="py-24 md:py-32 bg-transparent transition-colors duration-300">
                        <div className="container mx-auto px-4 md:px-6">
                            <AnimatedSection type="fade-up">
                                <div className="text-center mb-24">
                                    <span className="text-fastway-orange font-secondary font-bold text-sm uppercase tracking-wider">{t('home.testimonials_badge')}</span>
                                    <h2 className="text-4xl md:text-5xl uppercase font-black text-white mt-3 tracking-tight">{t('home.testimonials_title')}</h2>
                                </div>
                            </AnimatedSection>

                            <div className="grid md:grid-cols-3 gap-8 gap-y-16">
                                {testimonialsData.map((item, index) => (
                                    <AnimatedSection key={index} delay={index * 150} type="fade-up">
                                        <div className="bg-[#0A3A20]/80 p-8 pt-16 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative text-center group border border-white/10">
                                            {/* Floating Avatar */}
                                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                                <div className="w-24 h-24 rounded-full border-4 border-[#0A3A20] shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-500">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <p className="text-gray-300 mb-8 italic leading-relaxed text-lg">"{item.quote}"</p>
                                            <h4 className="font-bold text-lg uppercase text-white tracking-wide">{item.name}</h4>
                                            <p className="text-sm text-fastway-orange font-medium mt-1 uppercase tracking-wider opacity-80">{item.role}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-24 bg-[#16A34A] text-white relative overflow-hidden">
                        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                            <AnimatedSection type="scale">
                                <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight text-white">{t('home.cta_title')}</h2>
                                <p className="text-2xl md:text-3xl font-medium mb-4 text-green-100">{t('home.cta_subtitle')}</p>
                                <p className="text-green-200 mb-12 italic">{t('home.cta_note')}</p>
                                
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Magnetic strength={0.4}>
                                        <Link 
                                            to="/contact" 
                                            className="inline-block bg-fastway-orange hover:bg-amber-600 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 text-lg uppercase tracking-wide cursor-hover"
                                        >
                                            {t('home.cta_btn_quote')}
                                        </Link>
                                    </Magnetic>
                                    <Magnetic strength={0.4}>
                                        <Link 
                                            to="/contact" 
                                            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#16A34A] text-white font-bold py-5 px-12 rounded-full transition-all duration-300 text-lg uppercase tracking-wide cursor-hover"
                                        >
                                            {t('home.cta_btn_consult')}
                                        </Link>
                                    </Magnetic>
                                </div>
                            </AnimatedSection>
                        </div>
                    </section>
                </>
            )}

            {selectedService && (
                <section id="services-detail-section" className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <ServiceDetail 
                            serviceId={selectedService} 
                            onBack={() => setSelectedService(null)} 
                        />
                    </div>
                </section>
            )}
             {!selectedService && <Partners />}
        </div>
    );
};

export default Services;