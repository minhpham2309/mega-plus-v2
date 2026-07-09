
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A3A20] text-white pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Logo className="w-16 h-16 text-white flex-shrink-0" />
              <div className="flex flex-col justify-center">
                <div className="font-bold text-2xl leading-none tracking-wide text-white">MEGAPLUS</div>
                <div className="text-[#F59E0B] text-xs font-bold tracking-widest mt-1.5">AGRI VIETNAM</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
            
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t('footer.quick_links')}</h3>
            <ul className="space-y-4">
              <li><RouterLink to="/" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('footer.home')}</RouterLink></li>
              <li><RouterLink to="/about" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('footer.about')}</RouterLink></li>
              <li><RouterLink to="/products" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('nav.products')}</RouterLink></li>
              <li><RouterLink to="/services" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('footer.services')}</RouterLink></li>
              <li><RouterLink to="/contact" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('footer.contact')}</RouterLink></li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t('footer.our_products')}</h3>
            <ul className="space-y-4">
              <li><RouterLink to="/products" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('products.cat_fresh')}</RouterLink></li>
              <li><RouterLink to="/products" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('products.cat_spices')}</RouterLink></li>
              <li><RouterLink to="/products" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('products.cat_iqf')}</RouterLink></li>
              <li><RouterLink to="/products" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('products.cat_saydeo')}</RouterLink></li>
              <li><RouterLink to="/products" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">{t('products.cat_coffee')}</RouterLink></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t('footer.contact_info')}</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {t('footer.head_office_address')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:info@megaplusvn.com" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">
                    info@megaplusvn.com
                  </a>
                  <a href="mailto:sales@megaplusvn.com" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">
                    sales@megaplusvn.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+84707793068" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">
                    +84 707793068
                  </a>
                  <a href="tel:+84708697920" className="text-gray-300 hover:text-[#F59E0B] transition-colors text-sm">
                    +84 708697920
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.terms_of_service')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
