import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/ui/AnimatedSection';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const categories = [
  { id: 'all', label: 'products.cat_all' },
  { id: 'saydeo', label: 'products.cat_saydeo', icon: '🍋' },
  { id: 'iqf', label: 'products.cat_iqf', icon: '❄️' },
  { id: 'fresh', label: 'products.cat_fresh', icon: '🍍' },
  { id: 'spices', label: 'products.cat_spices', icon: '🌿' },
  { id: 'coffee', label: 'products.cat_coffee', icon: '☕' },
];

const products = [
  {
    id: 1,
    badge: 'HỮU CƠ',
    badgeColor: 'bg-[#406845]',
    category: 'SẤY DẺO',
    categoryId: 'saydeo',
    title: 'Thơm sấy dẻo Queen Long An',
    desc: 'Dứa Queen ngọt tự nhiên, sấy dẻo chuẩn vàng, không chất bảo quản.',
    packaging: 'Thùng: 5 / 10 kg',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    badge: 'MỚI',
    badgeColor: 'bg-[#C65B33]',
    category: 'SẤY DẺO',
    categoryId: 'saydeo',
    title: 'Chanh dây sấy dẻo Tây Nguyên',
    desc: 'Chanh dây tím Gia Lai sấy giữ vị chua thanh, màu tím đặc trưng. Giàu vitamin C tự nhiên.',
    packaging: 'Thùng: 1 / 5 kg',
    image: 'https://images.unsplash.com/photo-1590004945761-0ae2ab20a59b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    badge: 'BÁN CHẠY',
    badgeColor: 'bg-[#7E5E40]',
    category: 'SẤY DẺO',
    categoryId: 'saydeo',
    title: 'Chuối sấy dẻo Già Nam',
    desc: 'Chuối già Nam Bộ chín vàng, sấy dẻo ngọt tự nhiên. Dai mềm, không thêm đường.',
    packaging: 'Thùng: 5 / 10 kg',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    badge: 'XUẤT KHẨU',
    badgeColor: 'bg-[#1C4E80]',
    category: 'IQF ĐÔNG LẠNH',
    categoryId: 'iqf',
    title: 'Xoài cắt miếng IQF đông lạnh',
    desc: 'Xoài cắt hạt lựu / miếng, cấp đông IQF -40°C ngay sau thu hoạch. Giữ nguyên dinh dưỡng và màu sắc.',
    packaging: 'Thùng: 10 / 20 kg',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    badge: 'XUẤT KHẨU',
    badgeColor: 'bg-[#1C4E80]',
    category: 'IQF ĐÔNG LẠNH',
    categoryId: 'iqf',
    title: 'Dứa cắt khoanh IQF đông lạnh',
    desc: 'Dứa MD2 & Queen cắt khoanh / miếng tiêu chuẩn, cấp đông nhanh IQF, không chất bảo quản.',
    packaging: 'Thùng: 10 kg',
    image: 'https://images.unsplash.com/photo-1587883012610-e3df17d41270?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    badge: 'GLOBALGAP',
    badgeColor: 'bg-[#406845]',
    category: 'TRÁI CÂY TƯƠI',
    categoryId: 'fresh',
    title: 'Xoài tươi Cát Hòa Lộc Tiền Giang',
    desc: 'Xoài Cát Hòa Lộc thơm béo, ngọt thanh. Xuất khẩu sang Nhật, Hàn, EU. Mùa vụ tháng 3-7.',
    packaging: 'Mùa: T3 - T7',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 7,
    badge: 'BÁN CHẠY',
    badgeColor: 'bg-[#7E5E40]',
    category: 'TRÁI CÂY TƯƠI',
    categoryId: 'fresh',
    title: 'Thanh long ruột đỏ Bình Thuận',
    desc: 'VietGAP, 400-600g/quả, xuất khẩu quanh năm sang Trung Quốc, EU, Mỹ.',
    packaging: 'Quanh năm',
    image: 'https://images.unsplash.com/photo-1563842345511-fb05a3068eaf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 8,
    badge: 'XUẤT KHẨU',
    badgeColor: 'bg-[#7E5E40]',
    category: 'GIA VỊ',
    categoryId: 'spices',
    title: 'Quế ống Yên Bái – Cassia nguyên chất',
    desc: 'Tinh dầu cao 3-5%, vỏ dày, thơm nồng. Cung cấp dạng ống, vụn, bột theo yêu cầu.',
    packaging: 'Bao: 25 / 50 kg',
    image: 'https://images.unsplash.com/photo-1596765757754-056a00f0742f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 9,
    badge: 'HỮU CƠ',
    badgeColor: 'bg-[#406845]',
    category: 'GIA VỊ',
    categoryId: 'spices',
    title: 'Hoa hồi Lạng Sơn nguyên cánh',
    desc: 'Tinh dầu anethole phong phú, độ sạch cao. Dùng chế biến thực phẩm, dược liệu, chiết xuất.',
    packaging: 'Bao: 25 / 50 kg',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f40ce88f4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 10,
    badge: 'NGON NHẤT TG',
    badgeColor: 'bg-[#7E5E40]',
    category: 'NGŨ CỐC',
    categoryId: 'spices',
    title: 'Gạo ST25 Sóc Trăng – Giải Nhất TG 2019',
    desc: 'Thơm dứa đặc trưng, hạt dài trắng trong. Độ ẩm ≤14%, tấm ≤5%. MOQ 20 tấn / container.',
    packaging: 'Bao: 5 / 25 / 50 kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 11,
    badge: 'BÁN CHẠY',
    badgeColor: 'bg-[#7E5E40]',
    category: 'CÀ PHÊ',
    categoryId: 'coffee',
    title: 'Robusta G1 Đắk Lắk – Nhân xanh',
    desc: 'Buôn Ma Thuột G1, độ ẩm ≤12.5%, sàng 13+. Xuất khẩu chuẩn ICO. MOQ 1 container 20ft.',
    packaging: 'Bao GrainPro 60 kg',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 12,
    badge: 'SPECIALTY',
    badgeColor: 'bg-[#406845]',
    category: 'CÀ PHÊ',
    categoryId: 'coffee',
    title: 'Arabica Typica Cầu Đất Đà Lạt',
    desc: 'Trồng 1.500m, honey & washed process. Hương hoa trà, vị cam quýt, acidity sáng. Specialty grade.',
    packaging: 'Bao GrainPro 30 / 60 kg',
    image: 'https://images.unsplash.com/photo-1514432324607-a125290ca577?auto=format&fit=crop&q=80&w=600'
  }
];

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.categoryId === activeCategory);

  useGSAP(() => {
    // Hero timeline without scrollTrigger so it plays unconditionally
    const tl = gsap.timeline();

    tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.info-bar', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDF8EB] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-12 overflow-hidden bg-[#354A35]">
        {/* Subtle leaf background pattern (simulated with CSS pattern for now, or just a dark green space) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M50 0 C70 20 80 40 50 60 C20 40 30 20 50 0 Z" fill="currentColor" transform="scale(0.5) rotate(45) translate(50, 50)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
            </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
            <div className="max-w-4xl pt-12 pb-16">
              <div className="hero-badge inline-block border border-[#A4AF9A] text-[#D8E1CE] px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-8">
                 {t('products.hero_badge')}
              </div>
              <h1 className="hero-title text-5xl md:text-7xl text-white font-serif leading-[1.1] mb-6 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: t('products.hero_title') }} />
              <p className="hero-desc text-lg md:text-xl text-[#B9C6B1] max-w-2xl mb-12 font-light leading-relaxed">
                {t('products.hero_desc')}
              </p>
              
              <div className="hero-buttons flex flex-wrap gap-4">
                <button className="bg-[#D9612C] hover:bg-[#C65B33] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-colors shadow-lg">
                  {t('products.btn_quote')}
                </button>
                <button className="border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 rounded-full text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-all backdrop-blur-sm">
                  {t('products.btn_profile')}
                </button>
              </div>
            </div>
        </div>

        {/* Info Bar at bottom of Hero */}
        <div className="info-bar bg-[#1A1A1A] w-full relative z-10 py-5 mt-4">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-[#D4B872] font-medium">
                  <div className="flex items-center gap-2"><span className="text-xl">🌱</span> {t('products.info_natural')}</div>
                  <div className="flex items-center gap-2"><span className="text-xl">🏅</span> {t('products.info_cert')}</div>
                  <div className="flex items-center gap-2"><span className="text-xl">🚢</span> {t('products.info_export')}</div>
                  <div className="flex items-center gap-2"><span className="text-xl">❄️</span> {t('products.info_iqf')}</div>
                  <div className="flex items-center gap-2"><span className="text-xl">⏱️</span> {t('products.info_response')}</div>
              </div>
            </div>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section className="py-8 bg-[#FDF8EB]">
        <div className="container mx-auto px-6 lg:px-12">
            
            {/* Category Filter Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#E1D6C5] pb-4 mb-10">
                <div className="flex items-center gap-8 text-sm font-semibold tracking-wider text-[#4A433A] uppercase overflow-x-auto w-full md:w-auto hide-scrollbar">
                    <span className="text-[#8B8476] mr-2 shrink-0">{t('products.category_label')}</span>
                    {categories.map(cat => (
                        <button 
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`shrink-0 transition-colors px-4 py-2 rounded-full ${activeCategory === cat.id ? 'bg-[#1A1A1A] text-white' : 'hover:bg-[#EBE3D3] hover:text-[#D9612C]'}`}
                        >
                            {cat.icon && <span className="mr-2">{cat.icon}</span>}
                            {t(cat.label)}
                        </button>
                    ))}
                </div>
                <div className="text-sm text-[#8B8476] mt-4 md:mt-0 font-medium whitespace-nowrap">
                    {filteredProducts.length} {t('products.products_count')}
                </div>
            </div>

            {/* Main Title */}
            <AnimatedSection type="fade-up" className="mb-12">
                 <h2 className="text-4xl text-[#3A332A] font-serif mb-4">{t('products.section_title')}</h2>
                 <div className="w-full h-px bg-[#E1D6C5]"></div>
            </AnimatedSection>
            
            {/* Featured Product */}
            {activeCategory === 'all' && (
              <AnimatedSection type="fade-up" className="mb-10">
                  <div className="flex flex-col lg:flex-row bg-[#2C1E16] min-h-[450px] rounded-[40px] overflow-hidden">
                      {/* Left: Image (using a good Unsplash mango placeholder) */}
                      <div className="lg:w-1/2 relative bg-[#4A3320]">
                          <img 
                              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop" 
                              alt="Xoài sấy dẻo" 
                              className="absolute inset-0 w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C1E16]/80 lg:to-[#2C1E16]"></div>
                          <div className="absolute top-6 left-6 text-[#8B8476] text-xs uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full">{t('products.featured_title')}</div>
                      </div>
                      
                      {/* Right: Info */}
                      <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center text-[#FDF8EB]">
                          <div className="text-[#D4B872] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rotate-45 bg-[#D4B872]"></span> {t('products.featured_badge')}
                          </div>
                          <h3 className="text-4xl md:text-5xl font-serif text-[#FDF8EB] mb-2 leading-tight">{t('products.featured_title')}</h3>
                          <h4 className="text-2xl md:text-3xl font-serif italic text-[#C0A887] mb-6">{t('products.featured_subtitle')}</h4>
                          <p className="text-[#A5998A] text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                              {t('products.featured_desc')}
                          </p>
                          
                          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6 mb-10 text-sm">
                              <div>
                                  <div className="text-[#8B8476] uppercase tracking-wider text-xs mb-1">{t('products.feature_moisture')}</div>
                                  <div className="font-bold text-[#FDF8EB]">18-22%</div>
                              </div>
                              <div>
                                  <div className="text-[#8B8476] uppercase tracking-wider text-xs mb-1">{t('products.feature_packing')}</div>
                                  <div className="font-bold text-[#FDF8EB]">5 / 10 kg</div>
                              </div>
                              <div>
                                  <div className="text-[#8B8476] uppercase tracking-wider text-xs mb-1">{t('products.feature_shelf_life')}</div>
                                  <div className="font-bold text-[#FDF8EB]">12 {t('products.months') || (document.documentElement.lang === 'vi' ? 'tháng' : 'months')}</div>
                              </div>
                          </div>
                      
                          <div className="flex flex-wrap gap-4 mt-auto">
                              <button className="bg-[#D9612C] hover:bg-[#C65B33] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-colors">
                                {t('products.btn_quote')}
                              </button>
                              <button className="border border-white/20 hover:border-white/50 text-[#D4B872] hover:text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-colors">
                                {t('products.btn_specs')}
                              </button>
                          </div>
                      </div>
                  </div>
              </AnimatedSection>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map((product, index) => (
                    <AnimatedSection key={product.id} type="fade-up" delay={index * 50}>
                        <div className="bg-[#F8F3E6] border border-[#EBE3D3] rounded-3xl hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer overflow-hidden">
                            {/* Image Box */}
                            <div className="relative aspect-square bg-[#EAE3D4] overflow-hidden">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                
                                {/* Badges */}
                                <div className="absolute inset-0 p-4 flex justify-between items-start pointer-events-none">
                                    <div className={`${product.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                                        {t(`products.badge_${product.id}`) || product.badge}
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#A5998A] hover:text-[#D9612C] transition-colors pointer-events-auto backdrop-blur-sm shadow-sm">
                                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-[10px] font-bold text-[#8B8476] tracking-widest uppercase mb-3">
                                    {t(`products.cat_${product.categoryId}`)}
                                </div>
                                <h4 className="text-xl font-serif text-[#2C1E16] mb-3 leading-snug group-hover:text-[#3A5A40] transition-colors">
                                    {t(`products.product_${product.id}_title`) || product.title}
                                </h4>
                                <p className="text-[#6D655A] text-xs leading-relaxed mb-6 flex-grow">
                                    {t(`products.product_${product.id}_desc`) || product.desc}
                                </p>
                                
                                {/* Footer */}
                                <div className="pt-4 border-t border-[#EAE3D4] flex items-center justify-between mt-auto">
                                    <span className="text-[#8B8476] text-[11px] italic">
                                        {t(`products.product_${product.id}_pack`) || product.packaging}
                                    </span>
                                    <button className="bg-[#314132] hover:bg-[#253226] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors">
                                        {t('products.btn_quote')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
            
            {/* Load More */}
            {filteredProducts.length > 0 && (
                <div className="mt-16 text-center border-t border-[#E1D6C5] pt-12">
                     <button className="border border-[#C0B4A0] hover:border-[#8B8476] text-[#4A433A] hover:bg-[#F0EBE0] px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all">
                        {t('products.btn_load_more')}
                     </button>
                </div>
            )}
        </div>
      </section>

    </div>
  );
};

export default Products;
