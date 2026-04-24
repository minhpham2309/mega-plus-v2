import React from 'react';
import { Leaf, Globe, Award, Users, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Bento Box */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {/* Card 1 */}
              <div className="bg-[#D1F4E0] rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square transform transition-transform hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-[#16A34A] rounded-2xl flex items-center justify-center mb-4 text-white">
                  <Leaf className="w-7 h-7" />
                </div>
                <span className="text-[#0A3A20] font-bold">Sustainable Farming</span>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#16A34A] rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square transform transition-transform hover:-translate-y-2 duration-300 translate-y-8">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-white backdrop-blur-sm">
                  <Globe className="w-7 h-7" />
                </div>
                <span className="text-white font-bold">Global Reach</span>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#FEF08A] rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square transform transition-transform hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-[#F59E0B] rounded-2xl flex items-center justify-center mb-4 text-white">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-[#854D0E] font-bold">Quality Certified</span>
              </div>
              
              {/* Card 4 */}
              <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square transform transition-transform hover:-translate-y-2 duration-300 translate-y-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-[#D1F4E0] rounded-2xl flex items-center justify-center mb-4 text-[#16A34A]">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-gray-800 font-bold">Expert Team</span>
              </div>
            </div>

            {/* Overlapping Pill */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-4">
              <div className="bg-[#F59E0B] text-black font-bold px-6 py-3 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap border-4 border-white">
                <ShieldCheck className="w-5 h-5" />
                Trusted Since 2009
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D1F4E0]/50 blur-[100px] -z-10 rounded-full"></div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#16A34A]"></div>
              <span className="text-[#16A34A] font-bold tracking-widest uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A3A20] mb-6 leading-tight">
              Cultivating Quality,<br />
              <span className="text-[#16A34A]">Delivering Reliability</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              At MEGAPLUS AGRI VIETNAM, we bridge the gap between rich Vietnamese agriculture and global market demands. We are not just suppliers; we are your dedicated supply chain partners.
            </p>
            
            <p className="text-gray-500 mb-10">
              Serving importers, wholesale distributors, supermarket chains, and global food enterprises, we guarantee premium quality, seamless international shipping, and scalable volume capacity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D1F4E0] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <h4 className="text-[#0A3A20] font-bold mb-1">Premium Quality</h4>
                  <p className="text-sm text-gray-500">Rigorous quality control at every step</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D1F4E0] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <h4 className="text-[#0A3A20] font-bold mb-1">Scalable Volume</h4>
                  <p className="text-sm text-gray-500">From containers to bulk shipments</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D1F4E0] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <h4 className="text-[#0A3A20] font-bold mb-1">Global Compliance</h4>
                  <p className="text-sm text-gray-500">Meeting international standards</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D1F4E0] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <h4 className="text-[#0A3A20] font-bold mb-1">Reliable Logistics</h4>
                  <p className="text-sm text-gray-500">On-time delivery guaranteed</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex items-center text-[#16A34A] font-bold hover:text-[#0A3A20] transition-colors group">
              Read Our Full Story
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
