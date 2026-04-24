
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const logos = [
    "https://i.pinimg.com/1200x/62/6b/ef/626befa7c05b04e14b8151265e8cd464.jpg",
    "https://i.pinimg.com/1200x/36/6e/60/366e600dc86c28b1e8f08e611f01a8d2.jpg",
    "https://tienvietexpress.com/wp-content/uploads/2020/10/bang-gia-gui-hang-tnt.jpg",
    "https://i.pinimg.com/736x/4f/d8/34/4fd834b4684285db8a968982188b7032.jpg",
    "https://i.pinimg.com/1200x/c9/e5/b3/c9e5b3ff5caec4895b9b6e73108a947b.jpg",
    "https://i.pinimg.com/1200x/ec/5b/00/ec5b0035b31ebec16106ea043a38eda3.jpg",
    "https://i.pinimg.com/1200x/29/c3/65/29c365f7be441296f820e595d47ad278.jpg",
    "https://i.pinimg.com/1200x/0f/44/ad/0f44adbd0f0935d39e56231ead3c0a34.jpg",
    "https://i.pinimg.com/736x/69/c5/a1/69c5a158d55a591b00349c048855d994.jpg",
    "https://i.pinimg.com/736x/70/4f/93/704f93ff575ab0f81f79af0f663f41d6.jpg",
    "https://i.pinimg.com/736x/bf/dc/8f/bfdc8f1b9de0ae05feb716f96c43066e.jpg",
    "https://i.pinimg.com/1200x/a2/82/68/a28268227b74e42f39e9280794d127dd.jpg",
    "https://nguyendang.net.vn/wp-content/uploads/2021/03/Hang-tau-hapag-lloyd-Hapag-Lloyd-AG.jpg"
];

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
