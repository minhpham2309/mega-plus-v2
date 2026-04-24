import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import WhoWeServe from './pages/WhoWeServe';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Quote from './pages/Quote';
import { LanguageProvider } from './contexts/LanguageContext';
import SmoothScrollLayout from './components/layout/SmoothScrollLayout';
import LivingBackground from './components/ui/LivingBackground';
import GlobalEffects from './components/ui/GlobalEffects';

const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <Header />
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/products" element={<Products />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        {/* Grain Overlay - Topmost Z-Index */}
        <div className="noise-overlay" />
        
        {/* Living Background - Lowest Z-Index */}
        <LivingBackground />

        <SmoothScrollLayout>
            {/* The System: Injects animations into the DOM */}
            <GlobalEffects />
            <AppContent />
        </SmoothScrollLayout>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;