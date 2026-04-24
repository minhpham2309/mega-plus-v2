import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import Magnetic from '../components/ui/Magnetic';

const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="overflow-x-hidden bg-transparent">
            {/* Banner */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=99')" }}>
                <div className="absolute inset-0 bg-fastway-dark-blue/80 mix-blend-multiply"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 max-w-5xl mx-auto">
                    <AnimatedSection type="scale" duration={1.5}>
                        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold mb-8 leading-[1.1] uppercase drop-shadow-2xl">
                            {t('about.banner_title')}
                        </h1>
                    </AnimatedSection>
                    <p className="text-xl md:text-2xl font-light italic max-w-4xl mx-auto text-gray-200 leading-relaxed">
                        {t('about.banner_desc')}
                    </p>
                </div>
            </section>

            {/* Vision & Mission Section - Full Screen Zig Zag */}
            <section className="min-h-screen flex flex-col justify-center py-20 bg-[#FDF8EB] transition-colors duration-300 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection type="slide-left">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-[#D4B872]/20 rounded-full blur-3xl -z-20"></div>
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                                    <img 
                                        src="https://cdn.jetphotos.com/full/6/89182_1527179929.jpg" 
                                        alt="Vision - Boeing 777" 
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection type="slide-right" delay={200}>
                            <div className="flex gap-6 md:gap-8 h-full">
                                <div className="w-1 md:w-1.5 bg-[#D9612C] shrink-0 self-stretch rounded-full"></div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-4xl md:text-5xl uppercase font-black text-[#3A332A] mb-6">
                                        {t('about.vision_title')}
                                    </h2>
                                    <p className="text-lg text-[#6D655A] mb-8 leading-relaxed text-justify md:text-left">
                                        {t('about.vision_desc')}
                                    </p>
                                    
                                    <h3 className="text-2xl uppercase font-bold text-[#3A332A] mb-4 flex items-center">
                                         <span className="w-2 h-2 bg-[#D9612C] rounded-full mr-3"></span>
                                        {t('about.mission_title')}
                                    </h3>
                                    <ul className="space-y-3 text-lg text-[#6D655A]">
                                        {[1, 2, 3, 4].map((i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="w-5 h-5 text-[#D9612C] mt-1 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{t(`about.mission_${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values Section - Full Screen Zig Zag */}
            <section className="min-h-screen flex flex-col justify-center py-20 bg-[#354A35] backdrop-blur-sm transition-colors duration-300 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection type="slide-left" className="order-2 lg:order-1">
                             <div className="flex gap-6 md:gap-8 h-full">
                                <div className="w-1 md:w-1.5 bg-[#D4B872] shrink-0 self-stretch rounded-full"></div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-4xl md:text-5xl uppercase font-black text-white mb-8">
                                        {t('about.core_value_title')}
                                    </h2>
                                    <div className="grid gap-6">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="bg-white/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/20">
                                                <strong className="text-xl text-[#D4B872] mb-2 block">
                                                    {t(`about.cv_${i}_title`)}
                                                </strong>
                                                <span className="text-gray-200 block">
                                                    {t(`about.cv_${i}_desc`)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection type="slide-right" delay={200} className="order-1 lg:order-2">
                             <div className="relative group">
                                <div className="absolute inset-0 bg-[#A4AF9A]/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                                <div className="absolute -inset-4 bg-[#D4B872]/10 rounded-full blur-3xl -z-20"></div>
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
        </div>
    );
};

export default About;