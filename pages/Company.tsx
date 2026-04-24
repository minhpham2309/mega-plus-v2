import React from 'react';
import { Link } from 'react-router-dom';
import PricingIcon from '../components/icons/PricingIcon';
import TrackingIcon from '../components/icons/TrackingIcon';
import WarehouseIcon from '../components/icons/WarehouseIcon';
import SecurityIcon from '../components/icons/SecurityIcon';
import Typewriter from '../components/ui/Typewriter';
import AnimatedSection from '../components/ui/AnimatedSection';
import Partners from '../components/sections/home/Partners';
import { useLanguage } from '../contexts/LanguageContext';
import Magnetic from '../components/ui/Magnetic';

// Helper for Kinetic Text (Local version for consistent Hero effect)
const KineticText: React.FC<{ children: string; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const words = children.split(' ');
  return (
    <div className={`perspective-container ${className} flex flex-wrap justify-center gap-x-3 md:gap-x-4 manual-anim`}> 
      {words.map((word, i) => (
        <div key={i} className="clip-text-container overflow-hidden">
          <span className="kinetic-word inline-block origin-bottom-left will-change-transform translate-y-[120%] rotate-y-6 opacity-0" style={{ animationDelay: `${delay + i * 0.1}s` }}>
            {word}
          </span>
        </div>
      ))}
    </div>
  );
};

const AdvantageCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full">
        <div className="text-fastway-orange w-16 h-16 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="text-xl font-bold uppercase text-text-main dark:text-white mb-3">{title}</h3>
        <p className="text-body text-text-sub dark:text-gray-400">{description}</p>
    </div>
);

const Company: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="overflow-x-hidden bg-transparent">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=10')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue/80 mix-blend-multiply"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 max-w-5xl mx-auto">
                    <div className="mb-6">
                        <span className="inline-block py-1 px-3 border border-fastway-orange/50 rounded-full bg-fastway-orange/10 backdrop-blur-md text-fastway-orange text-sm font-bold tracking-[0.2em] uppercase">
                            Global Logistics Partner
                        </span>
                    </div>
                    <AnimatedSection type="scale" duration={1.5}>
                         <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold mb-8 leading-[1.1] uppercase drop-shadow-2xl">
                             {t('company.hero_title')}
                         </h1>
                    </AnimatedSection>
                    <Typewriter
                        tag="p"
                        text={t('company.hero_typewriter')}
                        className="text-xl md:text-2xl font-light text-gray-200 tracking-wide"
                        speed={25}
                        startDelay={1000}
                    />
                </div>
            </section>

            {/* What We Do Section - Full Screen Zig Zag */}
            <section className="min-h-screen flex flex-col justify-center py-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-colors duration-300 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection type="slide-left">
                            <div className="flex gap-6 md:gap-8 h-full">
                                <div className="w-1 md:w-1.5 bg-fastway-orange shrink-0 self-stretch rounded-full origin-top transform scale-y-100"></div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-fastway-orange font-secondary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                                        {t('home.safe_badge')}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-text-main dark:text-white mb-6 leading-[1.1]">
                                        {t('home.safe_title')}
                                    </h2>
                                    <p className="text-text-sub dark:text-gray-300 text-lg leading-relaxed mb-10 text-justify md:text-left">
                                        {t('home.safe_desc')}
                                    </p>
                                    <div>
                                        <Magnetic strength={0.3}>
                                            <button className="bg-fastway-orange text-white font-bold py-5 px-10 rounded-full hover:bg-amber-600 transition-colors duration-300 text-lg cursor-hover shadow-xl shadow-amber-500/20">
                                                {t('common.schedule_appointment')}
                                            </button>
                                        </Magnetic>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                        
                        <AnimatedSection type="slide-right" delay={200}>
                             <div className="relative group">
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                                <div className="absolute -inset-4 bg-fastway-orange/5 rounded-full blur-3xl -z-20"></div>
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                                    <img 
                                        src="https://picsum.photos/600/400?random=4" 
                                        alt="Warehouse" 
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Vision & Mission - Full Screen Zig Zag (Reversed) */}
            <section className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm transition-colors duration-300 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Left */}
                        <AnimatedSection type="slide-left" delay={200}>
                            <div className="relative group order-2 lg:order-1">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                                <div className="relative z-10 p-2 bg-white dark:bg-gray-700 rounded-2xl shadow-2xl">
                                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] border border-gray-100 dark:border-gray-600">
                                        <img 
                                            src="https://cdn.jetphotos.com/full/6/89182_1527179929.jpg" 
                                            alt="Vision" 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Text Right */}
                        <AnimatedSection type="slide-right" className="order-1 lg:order-2">
                             <div className="flex gap-6 md:gap-8 h-full">
                                <div className="w-1 md:w-1.5 bg-blue-600 shrink-0 self-stretch rounded-full"></div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-text-main dark:text-white mb-6 leading-[1.1]">
                                        {t('company.vision_title')}
                                    </h2>
                                    <p className="text-lg text-text-main dark:text-gray-300 leading-relaxed text-justify mb-8">
                                        {t('company.vision_desc')}
                                    </p>
                                    
                                    <h3 className="text-2xl uppercase font-bold text-text-main dark:text-white mb-4 flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        {t('company.mission_title')}
                                    </h3>
                                    <ul className="space-y-3 text-lg text-text-sub dark:text-gray-300">
                                        {[1, 2, 3, 4].map((i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{t(`company.mission_${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values - Full Screen Zig Zag */}
            <section className="min-h-screen flex flex-col justify-center py-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-colors duration-300 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                         {/* Text Left */}
                         <AnimatedSection type="slide-left">
                            <div className="flex gap-6 md:gap-8 h-full">
                                <div className="w-1 md:w-1.5 bg-green-500 shrink-0 self-stretch rounded-full"></div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-text-main dark:text-white mb-8 leading-[1.1]">
                                        {t('company.core_value_title')}
                                    </h2>
                                    <ul className="space-y-6 text-lg text-text-sub dark:text-gray-300">
                                        {[1, 2, 3, 4].map((i) => (
                                            <li key={i} className="flex flex-col p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                                                <strong className="text-xl text-text-main dark:text-white mb-1 flex items-center">
                                                     <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                    {t(`company.cv_${i}_title`)}
                                                </strong>
                                                <span className="pl-5">{t(`company.cv_${i}_desc`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Image Right */}
                        <AnimatedSection type="slide-right" delay={200}>
                             <div className="relative group">
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                                <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-3xl -z-20"></div>
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                                    <img 
                                        src="https://img.freepik.com/premium-photo/large-container-ship-is-docked-port-with-containers-stacked-its-deck-cargo-red-bo_1308352-38395.jpg?w=2000" 
                                        alt="Core Values" 
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

             {/* Who We Serve Content - Integrated Zig Zag */}
            <section className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection type="fade-up">
                        <div className="text-center mb-16">
                             <h2 className="text-4xl md:text-5xl uppercase font-black text-text-main dark:text-white mb-4">
                                {t('who_we_serve.banner_title')}
                             </h2>
                             <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                                {t('who_we_serve.banner_desc')}
                             </p>
                        </div>
                    </AnimatedSection>

                    {/* Image Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <AnimatedSection type="slide-left">
                             <div className="overflow-hidden h-64 md:h-80 w-full rounded-2xl shadow-xl group relative">
                                <img 
                                    src="https://logistics-manager.com/wp-content/uploads/2019/10/CargoSphere-Launches-New-Maersk-Spot-Product-on-their-Neutral-Rates-Platform-1000x600.jpg" 
                                    alt="Sea Freight Maersk" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection type="slide-right" delay={150}>
                             <div className="overflow-hidden h-64 md:h-80 w-full rounded-2xl shadow-xl group relative">
                                <img 
                                    src="https://trans.vn/wp-content/uploads/2016/03/Depositphotos_35651917_original-580x350-300x181.jpg" 
                                    alt="Air Freight" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Content Row: Vision & Core Value */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <AnimatedSection type="fade-up" delay={100}>
                            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 h-full">
                                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                                    {t('company.vision_badge')}
                                </span>
                                <ul className="space-y-4 text-text-sub dark:text-gray-200">
                                    {[1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-3 text-blue-500 font-bold">•</span>
                                            <span>{t(`company.vision_list_${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection type="fade-up" delay={300}>
                            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border-l-4 border-fastway-orange h-full">
                                <span className="bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                                    {t('company.cv_badge')}
                                </span>
                                <p className="text-text-sub dark:text-gray-200 text-lg leading-relaxed">
                                    {t('company.cv_desc')}
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection type="fade-down">
                         <div className="text-center mb-16">
                             <h2 className="text-4xl md:text-5xl uppercase font-black text-text-main dark:text-white">{t('company.advantages_title')}</h2>
                             <p className="text-xl text-text-sub dark:text-gray-400 mt-4 max-w-2xl mx-auto">{t('company.advantages_desc')}</p>
                         </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatedSection type="fade-up" delay={0}>
                            <AdvantageCard 
                                icon={<PricingIcon />} 
                                title={t('company.adv_pricing_title')} 
                                description={t('company.adv_pricing_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection type="fade-up" delay={150}>
                             <AdvantageCard 
                                icon={<TrackingIcon />} 
                                title={t('company.adv_tracking_title')} 
                                description={t('company.adv_tracking_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection type="fade-up" delay={300}>
                             <AdvantageCard 
                                icon={<WarehouseIcon />} 
                                title={t('company.adv_warehouse_title')} 
                                description={t('company.adv_warehouse_desc')} 
                            />
                        </AnimatedSection>
                        <AnimatedSection type="fade-up" delay={450}>
                             <AdvantageCard 
                                icon={<SecurityIcon />} 
                                title={t('company.adv_security_title')} 
                                description={t('company.adv_security_desc')} 
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default Company;