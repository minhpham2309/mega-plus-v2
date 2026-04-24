import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Partners from '../components/sections/home/Partners';
import { useLanguage } from '../contexts/LanguageContext';
import Magnetic from '../components/ui/Magnetic';

const WhoWeServe: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="overflow-x-hidden bg-transparent">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=99')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue/80 mix-blend-multiply"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 max-w-5xl mx-auto">
                    <AnimatedSection type="scale" duration={1.5}>
                        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold mb-8 leading-[1.1] uppercase drop-shadow-2xl">
                            {t('who_we_serve.banner_title')}
                        </h1>
                    </AnimatedSection>
                    <p className="text-xl md:text-2xl font-light italic max-w-4xl mx-auto text-gray-200 leading-relaxed mb-8">
                        {t('who_we_serve.banner_desc')}
                    </p>
                    <div className="w-24 h-1.5 bg-fastway-orange rounded-full"></div>
                </div>
            </section>

            {/* Content Section - Zig Zag Integration */}
            <section className="min-h-screen flex flex-col justify-center py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    
                    {/* Top Row: Images Left, Text Right (Conceptual Split) */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
                        <AnimatedSection type="slide-left">
                             <div className="grid gap-6">
                                <div className="overflow-hidden h-64 md:h-80 w-full rounded-3xl shadow-2xl relative group">
                                    <img 
                                        src="https://logistics-manager.com/wp-content/uploads/2019/10/CargoSphere-Launches-New-Maersk-Spot-Product-on-their-Neutral-Rates-Platform-1000x600.jpg" 
                                        alt="Sea Freight Maersk" 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                <div className="overflow-hidden h-40 md:h-60 w-full rounded-3xl shadow-xl ml-12 -mt-12 border-4 border-white dark:border-gray-800 relative z-10 group">
                                    <img 
                                        src="https://trans.vn/wp-content/uploads/2016/03/Depositphotos_35651917_original-580x350-300x181.jpg" 
                                        alt="Air Freight" 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                             </div>
                        </AnimatedSection>

                         <AnimatedSection type="slide-right" delay={200}>
                            <div className="flex gap-6 md:gap-8 h-full">
                                <div className="w-1 md:w-1.5 bg-blue-600 shrink-0 self-stretch rounded-full"></div>
                                <div className="flex flex-col justify-center">
                                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block w-max">
                                        {t('who_we_serve.vision_badge')}
                                    </span>
                                    <ul className="space-y-6 text-lg text-text-main dark:text-gray-200">
                                        <li className="flex items-start">
                                            <span className="text-4xl text-blue-200 font-black mr-4 leading-none select-none">01</span>
                                            <span>{t('who_we_serve.vision_1')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-4xl text-blue-200 font-black mr-4 leading-none select-none">02</span>
                                            <span>{t('who_we_serve.vision_2')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-4xl text-blue-200 font-black mr-4 leading-none select-none">03</span>
                                            <span>{t('who_we_serve.vision_3')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-4xl text-blue-200 font-black mr-4 leading-none select-none">04</span>
                                            <span>{t('who_we_serve.vision_4')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Bottom Row: Core Value */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection type="slide-left" className="order-2 lg:order-1">
                             <div className="flex gap-6 md:gap-8 h-full">
                                <div className="w-1 md:w-1.5 bg-fastway-orange shrink-0 self-stretch rounded-full"></div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-4xl md:text-5xl uppercase font-black text-text-main dark:text-white mb-6">
                                        {t('who_we_serve.core_value_title')}
                                    </h2>
                                    <p className="text-xl text-text-sub dark:text-gray-300 leading-relaxed text-justify md:text-left">
                                        {t('who_we_serve.core_value_desc')}
                                    </p>
                                    <div className="mt-8">
                                        <Magnetic>
                                            <button className="px-8 py-3 border-2 border-fastway-orange text-fastway-orange font-bold rounded-full hover:bg-fastway-orange hover:text-white transition-all duration-300 uppercase tracking-wider">
                                                Join Our Network
                                            </button>
                                        </Magnetic>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                        
                        <AnimatedSection type="slide-right" delay={200} className="order-1 lg:order-2">
                            <div className="relative group p-4">
                                <div className="absolute inset-0 bg-fastway-orange/10 rounded-full blur-3xl transform scale-75"></div>
                                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-100 dark:bg-gray-700 h-32 rounded-xl animate-pulse"></div>
                                        <div className="bg-gray-100 dark:bg-gray-700 h-32 rounded-xl animate-pulse delay-75"></div>
                                        <div className="bg-gray-100 dark:bg-gray-700 h-32 rounded-xl animate-pulse delay-150"></div>
                                        <div className="bg-gray-100 dark:bg-gray-700 h-32 rounded-xl animate-pulse delay-200"></div>
                                    </div>
                                    <div className="mt-6 text-center font-bold text-gray-400 uppercase tracking-widest">
                                        Trust & Reliability
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                </div>
            </section>

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default WhoWeServe;