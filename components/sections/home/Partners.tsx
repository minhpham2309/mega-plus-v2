
import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { partnerLogos as logos } from '../../../constants/data';

// Double the logos once to ensure the base set is wide enough for most screens,
// then duplicate that set for the seamless loop (Total 4x original length).
const baseSet = [...logos, ...logos];
const topRowLogos = [...baseSet, ...baseSet];

// For the bottom row, reverse the base set to achieve the "U-turn" effect at the edges.
// This ensures that as a logo exits the top row (right side), the same logo enters the bottom row (right side).
const reversedBaseSet = [...logos].reverse();
const doubledReversed = [...reversedBaseSet, ...reversedBaseSet];
const bottomRowLogos = [...doubledReversed, ...doubledReversed];

const Partners: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-white dark:bg-gray-800 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center md:text-left">{t('partners.title')}</h2>
            </div>
            
            <div className="relative w-full flex flex-col gap-4 md:gap-8">
                {/* Row 1: Left to Right */}
                <div className="flex w-max animate-scroll-right group gap-4 md:gap-8">
                    {topRowLogos.map((logo, index) => (
                        <div key={`r1-${index}`} className="w-32 h-20 md:w-48 md:h-28 bg-white border border-gray-200 dark:border-gray-600 shadow-sm rounded-lg flex items-center justify-center p-4 hover:border-fastway-orange hover:shadow-md transition-all">
                             <img src={logo} alt="Partner" className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex w-max animate-scroll-left group gap-4 md:gap-8">
                    {bottomRowLogos.map((logo, index) => (
                        <div key={`r2-${index}`} className="w-32 h-20 md:w-48 md:h-28 bg-white border border-gray-200 dark:border-gray-600 shadow-sm rounded-lg flex items-center justify-center p-4 hover:border-fastway-orange hover:shadow-md transition-all">
                            <img src={logo} alt="Partner" className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
