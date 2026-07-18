import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Factory, Beaker, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThirdPartyManufacturing = () => {
  return (
    <div className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-green-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[150%] bg-orange-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse"></span>
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Premium Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-royal text-gray-900 leading-[1.1] mb-6">
                Third-Party <br />
                <span className="text-primary-green">Manufacturing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Partner with Nutrila Lifecare to manufacture high-quality, scientifically formulated nutraceutical products under your own brand name. 
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-primary-green hover:bg-dark-green text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-green/30 flex items-center gap-2">
                  Partner With Us <ArrowRight size={20} />
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
                <img src="/worker packing bottle.jpeg" alt="Manufacturing Facility" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs animate-bounce-slow">
                <div className="w-14 h-14 rounded-full bg-orange-50 text-secondary-orange flex items-center justify-center flex-shrink-0">
                  <Factory size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">ISO & cGMP</h4>
                  <p className="text-sm text-gray-500">Certified Facility</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Our Formulations</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Expert Nutraceutical Development</h3>
            <p className="text-lg text-gray-600">
              We specialize in building advanced nutraceutical product medicines tailored to modern healthcare needs. <span className="font-semibold text-primary-green">While the examples below highlight some of our popular requests, they represent just a small fraction of what we can produce.</span> From vitamins to specialized compounds, our manufacturing capabilities cover a vast spectrum of health supplements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[
              {
                title: "B-Complex Formulations",
                desc: "High-quality, bioavailable B-complex vitamins essential for energy metabolism, neurological function, and overall vitality.",
                icon: <Beaker size={24} />,
                img: "/third-party/img-1.jpg"
              },
              {
                title: "Carbonyl Iron",
                desc: "Highly pure iron supplements designed for maximum absorption and minimal gastrointestinal side effects.",
                icon: <ShieldCheck size={24} />,
                img: "/third-party/img-2.jpg"
              },
              {
                title: "N-Acetyl Cysteine (NAC)",
                desc: "Potent antioxidant formulations supporting respiratory health, liver function, and cellular defense.",
                icon: <CheckCircle size={24} />,
                img: "/third-party/img-3.jpg"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 text-primary-green flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-green group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.desc}
                </p>
                <div className="rounded-xl overflow-hidden aspect-video bg-gray-200">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
            {/* And Many More Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary-green/5 rounded-3xl p-8 border border-primary-green/20 flex flex-col items-center justify-center text-center hover:bg-primary-green/10 transition-all h-full"
            >
              <div className="w-16 h-16 rounded-full bg-primary-green text-white flex items-center justify-center mb-6 shadow-md">
                <ArrowRight size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">...And Many More</h4>
              <p className="text-gray-600 leading-relaxed">
                Whether you need specialized immunity boosters, weight management supplements, protein powders, or custom multivitamin blends, our R&D team can formulate and manufacture it for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alu Alu Packaging Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDIwaDQwdjFINHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+Cjwvc3ZnPg==')]"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Grid */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden border-2 border-gray-700/50 shadow-2xl aspect-[4/5]">
                  <img src="/third-party/img-4.jpg" alt="Alu Alu Packaging 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden border-2 border-gray-700/50 shadow-2xl aspect-square">
                  <img src="/third-party/sachet.jpg" alt="Sachet Packaging" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border-2 border-gray-700/50 shadow-2xl aspect-square">
                  <img src="/third-party/img-5.jpg" alt="Alu Alu Packaging 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden border-2 border-gray-700/50 shadow-2xl aspect-[4/5]">
                  <img src="/third-party/img-6.jpg" alt="Alu Alu Packaging 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-10"
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700">
                <Package size={16} className="text-secondary-orange" />
                <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Custom Packaging</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-royal mb-6 leading-tight">
                Premium Packaging with <span className="text-secondary-orange">Your Brand</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Presentation and protection matter. We offer superior packaging solutions designed to provide the ultimate barrier against moisture, oxygen, and light, ensuring extended shelf life for your nutraceuticals.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "Customized client brand printing on foil",
                  "High-resolution detailing and premium design finish",
                  "Exceptional barrier protection for sensitive medicines",
                  "Various formats including sachets, bottles, and blister packs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                      <CheckCircle size={16} className="text-primary-green" />
                    </div>
                    <span className="text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Discuss Your Requirements <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Marquee Decoration */}
      <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
        <div className="flex w-full whitespace-nowrap">
          <motion.div 
            className="flex items-center gap-12 text-3xl md:text-5xl font-bold font-royal text-gray-900 uppercase tracking-widest"
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <span>Tablets</span> <span className="text-primary-green/20">•</span>
            <span>Capsules</span> <span className="text-primary-green/20">•</span>
            <span>Syrups</span> <span className="text-primary-green/20">•</span>
            <span>Protein Powders</span> <span className="text-primary-green/20">•</span>
            <span>Sachets</span> <span className="text-primary-green/20">•</span>
            <span>Softgels</span> <span className="text-primary-green/20">•</span>
            <span>Drops</span> <span className="text-primary-green/20">•</span>
            {/* Duplicate for seamless looping */}
            <span>Tablets</span> <span className="text-primary-green/20">•</span>
            <span>Capsules</span> <span className="text-primary-green/20">•</span>
            <span>Syrups</span> <span className="text-primary-green/20">•</span>
            <span>Protein Powders</span> <span className="text-primary-green/20">•</span>
            <span>Sachets</span> <span className="text-primary-green/20">•</span>
            <span>Softgels</span> <span className="text-primary-green/20">•</span>
            <span>Drops</span> <span className="text-primary-green/20">•</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ThirdPartyManufacturing;
