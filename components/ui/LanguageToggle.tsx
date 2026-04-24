
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:text-fastway-orange transition-colors duration-300 focus:outline-none font-bold text-sm border border-gray-500 hover:border-fastway-orange ml-2"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'EN' : 'VN'}
    </button>
  );
};

export default LanguageToggle;