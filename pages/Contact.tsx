import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import Magnetic from '../components/ui/Magnetic';

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your request! We will get back to you soon.');
        setFormData({ name: '', phone: '', email: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden flex items-center justify-center relative">
            
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-fastway-orange/5 rounded-full blur-[120px]"></div>
                 <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Info */}
                    <AnimatedSection type="slide-left">
                        <div className="mb-10 lg:mb-0">
                            <span className="text-fastway-orange font-secondary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                                {t('contact.badge')}
                            </span>
                            <h2 className="text-5xl md:text-6xl uppercase font-black text-text-main dark:text-white mb-6 leading-tight">
                                {t('contact.title')}
                            </h2>
                            <p className="text-xl text-text-sub dark:text-gray-300 leading-relaxed mb-10 max-w-lg">
                                {t('contact.desc')}
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mr-4 shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-main dark:text-white uppercase tracking-wider">{t('contact.office_label')}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{t('contact.office_val')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-fastway-orange mr-4 shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-main dark:text-white uppercase tracking-wider">{t('contact.phone_label')}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            <a href="tel:+84707793068" className="hover:underline block">+84 707793068</a>
                                            <a href="tel:+84708697920" className="hover:underline block">+84 708697920</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-main dark:text-white uppercase tracking-wider">{t('contact.email_label')}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            <a href="mailto:info@megaplusvn.com" className="hover:underline block">info@megaplusvn.com</a>
                                            <a href="mailto:sales@megaplusvn.com" className="hover:underline block">sales@megaplusvn.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Form Card */}
                    <AnimatedSection type="scale" delay={200}>
                        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-fastway-orange/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-fastway-orange/20"></div>

                            <form onSubmit={handleSubmit} className="relative z-10">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{t('contact.form_name')} <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-fastway-orange focus:border-transparent transition-all dark:text-white font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{t('contact.form_phone')} <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-fastway-orange focus:border-transparent transition-all dark:text-white font-medium"
                                        placeholder="+84 90 123 4567"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{t('contact.form_email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-fastway-orange focus:border-transparent transition-all dark:text-white font-medium"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div className="text-center">
                                    <Magnetic strength={0.4}>
                                        <button
                                            type="submit"
                                            className="w-full bg-fastway-dark-blue text-white font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 text-lg uppercase tracking-wider shadow-lg hover:shadow-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-fastway-orange"
                                        >
                                            {t('common.submit_request')}
                                        </button>
                                    </Magnetic>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default Contact;