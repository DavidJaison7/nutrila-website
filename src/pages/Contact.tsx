import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 relative overflow-hidden flex items-center justify-center">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-soft-gray -z-10"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-10 lg:gap-y-16">
          
          {/* Header Section (Left Top) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-1 lg:row-start-1 flex flex-col justify-end"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-royal text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Lets Get <br />
              <span className="text-primary-green">in touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-800">
              Ask Anything You Want To Know
            </p>
          </motion.div>

          {/* Contact Info & Map (Left Bottom) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-start-1 lg:row-start-2 flex flex-col"
          >
            <div className="space-y-4 mb-10">
              {/* Email Card */}
              <div className="flex items-center justify-between bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Email Us</p>
                    <p className="font-semibold text-gray-900">nutrilalifecare@gmail.com</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-primary-green flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-colors">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Call Us</p>
                    <p className="font-semibold text-gray-900">+91 78076 88954</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>

              {/* Location Card */}
              <div className="flex items-center justify-between bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-secondary-orange flex items-center justify-center group-hover:bg-secondary-orange group-hover:text-white transition-colors">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Our Headquarter</p>
                    <p className="font-semibold text-gray-900 text-sm leading-tight">Khasra no-953/270, opp. Dusshera Ground, Sector 5, Parwanoo, Himachal Pradesh - 173220</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
            </div>

            {/* Map Embed */}
            <div className="relative rounded-2xl overflow-hidden border border-white/40 shadow-sm bg-white/60 p-2 flex-grow h-full min-h-[450px]">
              <iframe
                src="https://maps.google.com/maps?q=Nutrila+Lifecare,+Sector+5,+Parwanoo,+Himachal+Pradesh+173220&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem', minHeight: '450px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-start-2 lg:row-start-2 relative"
          >
            {/* Outer decorative border matching design */}
            <div className="absolute -inset-6 rounded-[3.5rem] bg-gray-100/50 backdrop-blur-3xl -z-10 shadow-sm border border-white/80"></div>
            
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Contact Us</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="johndoe@gmail.com" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 flex items-center gap-2 border-r pr-2 border-gray-200">
                        <span className="text-lg">🇮🇳</span>
                        <span className="text-sm font-medium text-gray-600">+91</span>
                      </div>
                      <input 
                        type="tel" 
                        placeholder="XXX XXX XXXX" 
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-24 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      placeholder="enter your subject" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="enter your text..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-primary-green hover:bg-dark-green text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-primary-green/30 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-500 leading-relaxed flex items-start gap-2 mt-6">
                  <span className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold">i</span>
                  <span>
                    By submitting this message, you agree to our <a href="#" className="font-semibold text-gray-900 hover:underline">Privacy Policy</a>. We respect your data and will never share your information without your consent.
                  </span>
                </p>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
