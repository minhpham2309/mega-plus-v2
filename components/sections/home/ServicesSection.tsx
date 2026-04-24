import React from 'react';
import { MessageSquare, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../ui/AnimatedSection';
import { servicesList } from '../../../constants/data';
import { useLanguage } from '../../../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#0A3A20] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#16A34A 1px, transparent 1px), linear-gradient(90deg, #16A34A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(22,163,74,0.3)_0%,rgba(10,58,32,0)_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <AnimatedSection type="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#F59E0B]"></div>
            <span className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm">{t('home.services_badge')}</span>
            <div className="w-12 h-px bg-[#F59E0B]"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('home.services_title') }} />
          
          <p className="text-gray-300 text-lg">
            {t('home.services_desc')}
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {servicesList.map((service, idx) => (
            <AnimatedSection key={service.id} type="fade-up" delay={idx * 100}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 h-full group">
                <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-[#F59E0B] mb-6 group-hover:bg-[#F59E0B] group-hover:text-[#0A3A20] transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>
                
                <div className="space-y-3 pt-6 border-t border-white/10">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#F59E0B] mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* CTA Card */}
          <AnimatedSection type="scale" delay={500}>
            <div className="bg-[#F59E0B] rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden h-full group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-black mb-6 relative z-10">
                <MessageSquare className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4 relative z-10">{t('home.services_custom_title')}</h3>
              <p className="text-black/80 text-sm mb-8 relative z-10">
                {t('home.services_custom_desc')}
              </p>
              
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#0A3A20] hover:bg-black text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 relative z-10 w-fit">
                {t('home.services_contact_btn')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
