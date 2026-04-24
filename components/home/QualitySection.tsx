import React from 'react';
import { ShieldCheck, Award, Leaf, CheckCircle, Recycle, Route, TrendingUp } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const QualitySection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection type="slide-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-[#16A34A]"></div>
                <span className="text-[#16A34A] font-bold tracking-widest uppercase text-sm">Quality & Sustainability</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A3A20] mb-6 leading-tight">
                Committed to <span className="text-[#16A34A]">Excellence</span> &<br />
                Environmental<br />
                Responsibility
              </h2>
              
              <p className="text-gray-600 mb-10 text-lg">
                Quality isn't just a standard—it's our foundation. Every product undergoes rigorous testing and certification to ensure it meets the highest international standards.
              </p>
            </AnimatedSection>
            
            {/* Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { icon: ShieldCheck, label: 'ISO 22000' },
                { icon: Award, label: 'HACCP' },
                { icon: Leaf, label: 'GlobalGAP' },
                { icon: CheckCircle, label: 'FDA' }
              ].map((badge, idx) => (
                <AnimatedSection key={idx} type="scale" delay={idx * 100}>
                  <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-gray-100 h-full">
                    <badge.icon className="w-6 h-6 text-[#16A34A] mb-2" />
                    <span className="text-xs font-bold text-gray-800">{badge.label}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            {/* Horizontal Cards */}
            <div className="space-y-4">
              <AnimatedSection type="fade-up" delay={200}>
                <div className="bg-[#F0FDF4] rounded-2xl p-6 flex items-start gap-4 border border-[#DCFCE7]">
                  <div className="w-10 h-10 rounded-xl bg-[#16A34A] flex items-center justify-center flex-shrink-0 text-white">
                    <Recycle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#0A3A20] font-bold mb-1">Sustainable Sourcing</h4>
                    <p className="text-sm text-gray-600">Partnering with eco-conscious farms that prioritize environmental stewardship.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection type="fade-up" delay={400}>
                <div className="bg-[#F0FDF4] rounded-2xl p-6 flex items-start gap-4 border border-[#DCFCE7]">
                  <div className="w-10 h-10 rounded-xl bg-[#16A34A] flex items-center justify-center flex-shrink-0 text-white">
                    <Route className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#0A3A20] font-bold mb-1">Reduced Carbon Footprint</h4>
                    <p className="text-sm text-gray-600">Optimized logistics routes and eco-friendly packaging solutions.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Right: Stats Box */}
          <div className="w-full lg:w-1/2 relative">
            <AnimatedSection type="fade-in">
              <div className="bg-[#D1F4E0] rounded-[40px] p-10 lg:p-16 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: '100%', label: 'Traceability' },
                    { val: '24/7', label: 'Quality Monitoring' },
                    { val: '50+', label: 'Quality Checkpoints' },
                    { val: '0%', label: 'Compromise' }
                  ].map((stat, idx) => (
                    <AnimatedSection key={idx} type="scale" delay={idx * 150}>
                      <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                        <div className="text-4xl font-black text-[#16A34A] mb-2">{stat.val}</div>
                        <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Overlapping Pill */}
            <AnimatedSection type="3d-flip" delay={800} className="absolute -bottom-6 right-10 z-20">
              <div className="bg-[#F59E0B] text-black px-8 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                <TrendingUp className="w-6 h-6" />
                <div>
                  <div className="font-black text-xl leading-none">99.8%</div>
                  <div className="text-xs font-medium opacity-80">Customer Satisfaction</div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D1F4E0]/30 blur-[120px] -z-10 rounded-full"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
