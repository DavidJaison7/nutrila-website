
import { motion } from 'framer-motion';
import { Package, Users, Tag, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 lg:pb-32 overflow-hidden bg-soft-gray">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green opacity-5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 lg:space-y-8 pt-4 lg:pt-10 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] text-gray-900 font-royal tracking-tight">
              Best Nutraceutical <br className="hidden sm:block" />
              <span className="text-primary-green italic font-medium">Manufacturer</span> <br className="hidden sm:block" />
              In India
            </h1>

            {/* Clean company description matching image style */}
            <div className="mt-6 lg:mt-8 max-w-2xl mx-auto lg:mx-0">
              <p className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#1e293b] tracking-tight leading-tight">
                Premium <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">Third-Party </span> Manufacturing &{' '}
                <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">Private Label</span> Solutions
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 pt-4 lg:pt-2">
              <div className="flex items-center gap-3">
                <div className="bg-primary-green/10 p-2.5 rounded-lg text-primary-green">
                  <Package size={22} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">60K+</p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Package Delivered</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary-green/10 p-2.5 rounded-lg text-primary-green">
                  <Users size={22} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">200+</p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Happy Clients</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary-green/10 p-2.5 rounded-lg text-primary-green">
                  <Tag size={22} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">100+</p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">Private Label Brands</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 pt-6 lg:pt-8">
              <div className="relative group inline-block w-full sm:w-auto">
                <button className="flex items-center justify-center gap-2 relative overflow-hidden bg-primary-green text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(13,155,77,0.3)] hover:shadow-[0_0_30px_rgba(13,155,77,0.5)] hover:bg-dark-green text-center w-full sm:w-auto outline-none">
                  Explore Services <ChevronDown size={18} />
                </button>
                <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50">
                  <Link to="/services/third-party-manufacturing" className="block px-5 py-3 text-sm font-bold text-gray-700 hover:bg-primary-green/10 hover:text-primary-green transition-colors">Third-Party Manufacturing</Link>
                  <Link to="/services/private-label" className="block px-5 py-3 text-sm font-bold text-gray-700 hover:bg-primary-green/10 hover:text-primary-green transition-colors">Private Label Solutions</Link>
                </div>
              </div>
              <Link to="/contact" className="bg-transparent border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all shadow-lg text-center inline-block w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Image area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end pb-8 lg:pb-0"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] aspect-[4/3] group">
              
              {/* Define the SVG Clip Path for the Puzzle Effect */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="puzzle-mask" clipPathUnits="objectBoundingBox">
                    {/* Top Left Tall */}
                    <rect x="0.00" y="0.03" width="0.21" height="0.425" rx="0.02" ry="0.026" />
                    {/* Top Middle Wide */}
                    <rect x="0.225" y="0.00" width="0.59" height="0.26" rx="0.02" ry="0.026" />
                    {/* Top Right Tall */}
                    <rect x="0.83" y="0.03" width="0.17" height="0.505" rx="0.02" ry="0.026" />
                    
                    {/* Bottom Left Tall */}
                    <rect x="0.00" y="0.47" width="0.21" height="0.53" rx="0.02" ry="0.026" />
                    {/* Center Portrait */}
                    <rect x="0.225" y="0.275" width="0.315" height="0.465" rx="0.02" ry="0.026" />
                    {/* Mid Right Square */}
                    <rect x="0.555" y="0.275" width="0.26" height="0.26" rx="0.02" ry="0.026" />
                    
                    {/* Bottom Mid-Left Wide */}
                    <rect x="0.225" y="0.755" width="0.315" height="0.245" rx="0.02" ry="0.026" />
                    {/* Bottom Mid-Right Tall */}
                    <rect x="0.555" y="0.55" width="0.26" height="0.45" rx="0.02" ry="0.026" />
                    {/* Bottom Right Edge */}
                    <rect x="0.83" y="0.55" width="0.17" height="0.27" rx="0.02" ry="0.026" />
                  </clipPath>
                </defs>
              </svg>

              {/* Decorative background shadow/glow that follows the puzzle shape loosely */}
              <div className="absolute inset-0 bg-primary-green/10 rounded-[40px] transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8 blur-lg"></div>

              {/* Inner image container with parallax scroll effect and clip-path */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-10"
                style={{ clipPath: 'url(#puzzle-mask)', WebkitClipPath: 'url(#puzzle-mask)' }}
              >
                <img 
                  src="/HomePage.png" 
                  alt="Nutraceutical Manufacturing" 
                  className="w-full h-full object-cover opacity-100 scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
