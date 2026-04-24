import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../ui/AnimatedSection';
import { productsList } from '../../../constants/data';
import { useLanguage } from '../../../contexts/LanguageContext';

const ProductsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <AnimatedSection type="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#16A34A]"></div>
            <span className="text-[#16A34A] font-bold tracking-widest uppercase text-sm">{t('home.products_badge')}</span>
            <div className="w-12 h-px bg-[#16A34A]"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A3A20] mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('home.products_title') }} />
          
          <p className="text-gray-500 text-lg">
            {t('home.products_desc')}
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {productsList.map((product, idx) => (
            <AnimatedSection key={product.id} type="fade-up" delay={idx * 100}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
                {/* Image Area */}
                <div className={`h-48 ${product.bgColor} relative flex items-center justify-center overflow-hidden`}>
                  {product.badge && (
                    <div className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="text-7xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">
                    {product.icon}
                  </div>
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
                </div>
                
                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0A3A20] mb-3">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-400 font-medium">
                      <span className="mr-2">✨</span>
                      {product.feature}
                    </div>
                    <Link to="/products" className="text-[#16A34A] font-bold text-sm flex items-center hover:text-[#0A3A20] transition-colors">
                      {t('home.products_details')}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Catalog Card */}
          <AnimatedSection type="scale" delay={500}>
            <div className="bg-[#15803D] rounded-3xl overflow-hidden shadow-lg flex flex-col items-center justify-center text-center p-8 relative h-full group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
              
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-[#F59E0B] backdrop-blur-md relative z-10">
                <Download className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{t('home.products_catalog_title')}</h3>
              
              <p className="text-green-100 mb-8 relative z-10 text-sm">
                {t('home.products_catalog_desc')}
              </p>
              
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2 relative z-10">
                <Download className="w-4 h-4" />
                {t('home.products_catalog_btn')}
              </button>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
