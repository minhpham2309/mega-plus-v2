import React from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#D1F4E0]/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#FEF08A]/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#16A34A]"></div>
            <span className="text-[#16A34A] font-bold tracking-widest uppercase text-sm">Contact Us</span>
            <div className="w-12 h-px bg-[#16A34A]"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A3A20] mb-6 leading-tight">
            Let's Start a <span className="text-[#16A34A]">Conversation</span>
          </h2>
          
          <p className="text-gray-500 text-lg">
            Ready to explore partnership opportunities? Our team is here to answer your questions and discuss your requirements.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#0A3A20] font-bold mb-2">Head Office</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  123 Agricultural District<br />
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#0A3A20] font-bold mb-2">Email Us</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  info@megaplusagri.vn<br />
                  sales@megaplusagri.vn
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#0A3A20] font-bold mb-2">Call Us</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  +84 28 1234 5678<br />
                  +84 28 8765 4321
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#0A3A20] font-bold mb-2">Business Hours</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 8:00 AM - 12:00 PM
                </p>
              </div>
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[40px] p-10 lg:p-14 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A3A20] mb-8">Request a Quote</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="John Smith"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Company Name *</label>
                    <input 
                      type="text" 
                      placeholder="ABC Trading Co."
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 234 567 8900"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Product Interest *</label>
                  <select className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white appearance-none">
                    <option value="" disabled selected>Select a product category</option>
                    <option value="coconut">Fresh Young Coconut</option>
                    <option value="rice">Premium Vietnamese Rice</option>
                    <option value="fresh-fruits">Fresh Tropical Fruits</option>
                    <option value="frozen-fruits">IQF Frozen Fruits</option>
                    <option value="dried-fruits">Soft Dried Fruits</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Message *</label>
                  <textarea 
                    rows={4}
                    placeholder="Please tell us about your requirements, estimated volume, and destination country..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 outline-none transition-all text-gray-700 bg-gray-50/50 focus:bg-white resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="button"
                  className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold py-4 px-8 rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
