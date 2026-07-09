import React from 'react';
import { Leaf, Globe, Award, Users, CheckCircle2, ArrowRight, ShieldCheck, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../ui/AnimatedSection';
import { useLanguage } from '../../../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Bento Box */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 p-6 sm:p-8 rounded-[2.5rem] bg-[#031C0E] border border-emerald-950 shadow-2xl overflow-hidden">
              {/* Decorative radial gradients */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] -z-10"></div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                {/* Card 1: Sustainable Farming */}
                <AnimatedSection type="scale" delay={100}>
                  <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-lg border border-emerald-950/40 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-emerald-950/20">
                    <img 
                      src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600" 
                      alt="Sustainable Farming" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25"></div>
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#16A34A]/90 backdrop-blur-sm border border-emerald-400/30 rounded-2xl flex items-center justify-center mb-3 text-white shadow-lg shadow-emerald-900/40">
                        <Leaf className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h4 className="text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1">
                        {t('home.about_us_card_1')}
                      </h4>
                      <div className="w-8 h-[2px] bg-[#16A34A] rounded-full mb-2"></div>
                      <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed max-w-[160px]">
                        {t('home.about_us_card_1_desc')}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Card 2: Global Reach */}
                <AnimatedSection type="scale" delay={300}>
                  <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-lg border border-emerald-950/40 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-emerald-950/20">
                    <img 
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600" 
                      alt="Global Reach" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25"></div>
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#16A34A]/90 backdrop-blur-sm border border-emerald-400/30 rounded-2xl flex items-center justify-center mb-3 text-white shadow-lg shadow-emerald-900/40">
                        <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h4 className="text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1">
                        {t('home.about_us_card_2')}
                      </h4>
                      <div className="w-8 h-[2px] bg-[#16A34A] rounded-full mb-2"></div>
                      <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed max-w-[160px]">
                        {t('home.about_us_card_2_desc')}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Card 3: Quality Certified */}
                <AnimatedSection type="scale" delay={200}>
                  <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-lg border border-emerald-950/40 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-emerald-950/20">
                    <img 
                      src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=600" 
                      alt="Quality Certified" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25"></div>
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F59E0B]/90 backdrop-blur-sm border border-amber-400/30 rounded-2xl flex items-center justify-center mb-3 text-white shadow-lg shadow-amber-900/40">
                        <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h4 className="text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1">
                        {t('home.about_us_card_3')}
                      </h4>
                      <div className="w-8 h-[2px] bg-[#F59E0B] rounded-full mb-2"></div>
                      <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed max-w-[160px]">
                        {t('home.about_us_card_3_desc')}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Card 4: Expert Team */}
                <AnimatedSection type="scale" delay={400}>
                  <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-lg border border-emerald-950/40 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-emerald-950/20">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                      alt="Expert Team" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/85 to-white/70"></div>
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A3A20] border border-emerald-800/30 rounded-2xl flex items-center justify-center mb-3 text-white shadow-lg shadow-emerald-950/40">
                        <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h4 className="text-[#0A3A20] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1">
                        {t('home.about_us_card_4')}
                      </h4>
                      <div className="w-8 h-[2px] bg-[#0A3A20] rounded-full mb-2"></div>
                      <p className="text-emerald-800 font-semibold text-[10px] sm:text-xs leading-relaxed max-w-[160px]">
                        {t('home.about_us_card_4_desc')}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Overlapping Pill in geometric center of the grid */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-r from-stone-900 via-neutral-950 to-stone-900 border border-amber-500/40 text-amber-400 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap text-[10px] sm:text-xs md:text-sm tracking-wider uppercase shadow-black/80">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 animate-pulse" />
                    {t('home.about_us_trusted')}
                  </div>
                </div>
              </div>

              {/* Bottom features row */}
              <div className="grid grid-cols-3 gap-2 px-2 sm:px-4 py-6 border-t border-emerald-950/60 mt-6 relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <h5 className="text-white font-bold text-[10px] sm:text-xs leading-tight">{t('home.about_us_bottom_1_title')}</h5>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">{t('home.about_us_bottom_1_desc')}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left justify-center border-l border-emerald-950/60 pl-2">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <h5 className="text-white font-bold text-[10px] sm:text-xs leading-tight">{t('home.about_us_bottom_2_title')}</h5>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">{t('home.about_us_bottom_2_desc')}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left justify-center border-l border-emerald-950/60 pl-2">
                  <Handshake className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <h5 className="text-white font-bold text-[10px] sm:text-xs leading-tight">{t('home.about_us_bottom_3_title')}</h5>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">{t('home.about_us_bottom_3_desc')}</p>
                  </div>
                </div>
              </div>

              {/* Sub-brand banner line */}
              <div className="relative flex items-center justify-center py-2 relative z-10">
                <div className="absolute left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-emerald-800/40 to-transparent"></div>
                <span className="relative bg-[#031C0E] px-4 text-[9px] font-bold text-emerald-400/80 tracking-[0.25em] uppercase text-center">
                  {t('home.about_us_bottom_brand')}
                </span>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 blur-[120px] -z-10 rounded-full"></div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection type="slide-right">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-[#16A34A]"></div>
                <span className="text-[#16A34A] font-bold tracking-widest uppercase text-sm">{t('home.about_us_badge')}</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A3A20] mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('home.about_us_title') }} />
              
              <p className="text-gray-600 mb-6 text-lg">
                {t('home.about_us_desc_1')}
              </p>
              
              <p className="text-gray-500 mb-10">
                {t('home.about_us_desc_2')}
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: t('home.about_us_feature_1_title'), desc: t('home.about_us_feature_1_desc') },
                { title: t('home.about_us_feature_2_title'), desc: t('home.about_us_feature_2_desc') },
                { title: t('home.about_us_feature_3_title'), desc: t('home.about_us_feature_3_desc') },
                { title: t('home.about_us_feature_4_title'), desc: t('home.about_us_feature_4_desc') }
              ].map((item, idx) => (
                <AnimatedSection key={idx} type="fade-up" delay={idx * 100}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D1F4E0] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                    </div>
                    <div>
                      <h4 className="text-[#0A3A20] font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection type="fade-in" delay={500}>
              <Link to="/about" className="inline-flex items-center text-[#16A34A] font-bold hover:text-[#0A3A20] transition-colors group">
                {t('home.about_us_read_more')}
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
