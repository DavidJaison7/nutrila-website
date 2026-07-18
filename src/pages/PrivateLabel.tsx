import { motion } from 'framer-motion';
import { Tag, Zap, Shield, Sparkles, ArrowRight, Layers, Palette, Truck, CheckCircle, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivateLabel = () => {
  return (
    <div className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[150%] bg-green-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <Tag size={16} className="text-secondary-orange" />
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Turnkey Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-royal text-gray-900 leading-[1.1] mb-6">
                Launch Your Brand With <span className="text-primary-green">Confidence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Skip the lengthy R&D process. Choose from our proven, high-quality formulations and launch your own nutraceutical brand quickly with our premium Private Label Solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-primary-green hover:bg-dark-green text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-green/30 flex items-center gap-2">
                  Request Catalog <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-gray-100">
                <img src="/labelling2.webp" alt="Premium Packaging" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs animate-bounce-slow">
                <div className="w-14 h-14 rounded-full bg-green-50 text-primary-green flex items-center justify-center flex-shrink-0">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Your Brand Here</h4>
                  <p className="text-sm text-gray-500">Premium Label Design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Why Private Label?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Smart Way to Build Your Business</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Speed to Market",
                desc: "Bypass months of formulation and testing. Our products are already developed, tested, and ready to be branded with your logo.",
                icon: <Zap size={28} />
              },
              {
                title: "Low Minimum Orders",
                desc: "Start small and scale fast. We offer competitive MOQs so you can test the market without massive upfront inventory risks.",
                icon: <Layers size={28} />
              },
              {
                title: "Proven Formulations",
                desc: "Leverage our expertise. Every formula is backed by scientific research and manufactured in our ISO & cGMP certified facility.",
                icon: <Shield size={28} />
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-primary-green/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 text-primary-green flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-Brand Showcase */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-secondary-orange uppercase tracking-wider mb-2">Product Showcase</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-royal mb-4">Ready-to-Brand Formulas</h3>
              <p className="text-gray-400 text-lg">
                High-quality nutraceuticals waiting for your logo. We handle the manufacturing; you handle the marketing.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-secondary-orange transition-colors group">
              View Full Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Whey Protein Isolate", img: "/product_01.webp", format: "Powder" },
              { name: "Multivitamin Complex", img: "/product_02.webp", format: "Capsules" },
              { name: "BCAA Energy Formula", img: "/product_03.webp", format: "Powder" },
              { name: "Pre-Workout Booster", img: "/product_04.webp", format: "Sachet" }
            ].map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-800 rounded-3xl p-6 border border-gray-700 hover:border-secondary-orange/50 transition-colors group"
              >
                <div className="bg-white rounded-2xl aspect-square mb-6 flex items-center justify-center p-4 relative overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-gray-900/10 backdrop-blur-md border border-gray-900/20 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {product.format}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                <p className="text-sm text-gray-400">Available for immediate private labeling.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600">
              Launching your own brand has never been easier. We guide you from concept to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            {[
              { step: "01", title: "Select", desc: "Choose from our extensive catalog of proven formulas.", icon: <CheckCircle size={24} /> },
              { step: "02", title: "Design", desc: "Our team helps you create premium, compliant labels.", icon: <Palette size={24} /> },
              { step: "03", title: "Produce", desc: "We manufacture and package your order in our facility.", icon: <Factory size={24} /> },
              { step: "04", title: "Deliver", desc: "Your branded products arrive, ready to hit the market.", icon: <Truck size={24} /> }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-primary-green mb-6 shadow-xl shadow-gray-200/50 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};



export default PrivateLabel;
