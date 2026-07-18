import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, Target, FlaskConical } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/worker packing bottle.jpeg" 
            alt="Nutrila Laboratory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary-green font-bold tracking-widest uppercase text-sm mb-4 block">About Nutrila Lifecare</span>
            <h1 className="text-5xl md:text-7xl font-bold font-royal text-white mb-6 leading-tight">
              Pioneering the <br/><span className="text-secondary-orange">Future of Wellness</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We are India's premier nutraceutical manufacturer, dedicated to bridging the gap between scientific innovation and human health through uncompromising quality and state-of-the-art manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img 
                  src="/Coating.jpeg" 
                  alt="Nutraceutical Coating Process" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-xs shadow-xl">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center text-primary-green">
                      <Shield size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">ISO & cGMP</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Certified manufacturing excellence guaranteeing global standards.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <div>
                <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Our Story</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-royal leading-tight">
                  Driven by Science. <br/>Rooted in Quality.
                </h3>
              </div>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  Founded with a vision to revolutionize the health supplement industry, Nutrila Lifecare has grown into one of India's most trusted names in third-party manufacturing and private labeling. 
                </p>
                <p>
                  We understand that your brand's reputation rests on the quality of the product inside the bottle. That's why we don't just manufacture; we partner with you. From sourcing the finest raw ingredients globally to deploying rigorous, multi-stage quality testing, we ensure every batch meets the highest benchmarks of purity and potency.
                </p>
                <p>
                  Our mission is simple: To empower wellness brands with superior, science-backed nutraceuticals, enabling them to scale effortlessly and deliver real health benefits to consumers worldwide.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="text-primary-green mt-1">
                    <Target size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Mission</h4>
                    <p className="text-sm text-gray-600">Delivering premium formulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary-green mt-1">
                    <FlaskConical size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Innovation</h4>
                    <p className="text-sm text-gray-600">Constant R&D for better health.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-green/5"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users size={32} />, stat: "200+", label: "Happy Clients" },
              { icon: <Award size={32} />, stat: "100+", label: "Brands Launched" },
              { icon: <Globe size={32} />, stat: "60K+", label: "Packages Delivered" },
              { icon: <Shield size={32} />, stat: "100%", label: "Quality Guaranteed" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center group hover:bg-white/10 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-green/20 text-primary-green mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">{item.stat}</h4>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Our Infrastructure</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-royal mb-6">State-of-the-Art Manufacturing Facility</h3>
            <p className="text-gray-600 text-lg">
              Located in Parwanoo, Himachal Pradesh, our facility is equipped with cutting-edge technology and adheres to the strictest environmental and hygiene standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md group"
            >
              <div className="h-64 overflow-hidden">
                <img src="/Puching machine.jpg" alt="Tablet Punching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">High-Speed Production</h4>
                <p className="text-gray-600">Advanced punching and encapsulation machinery capable of fulfilling massive bulk orders without compromising precision.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md group"
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img src="/Alu Alu Packing.jpg" alt="Alu Alu Packing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Packaging</h4>
                <p className="text-gray-600">Automated Alu Alu blister packaging lines that provide the ultimate barrier against moisture, ensuring maximum shelf life.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md group"
            >
              <div className="h-64 overflow-hidden">
                <img src="/Coating.jpeg" alt="Quality Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Rigorous Quality Lab</h4>
                <p className="text-gray-600">In-house testing laboratories where raw materials and finished products undergo extensive physical and chemical analysis.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
