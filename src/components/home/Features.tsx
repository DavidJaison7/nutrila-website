
import { motion } from 'framer-motion';
import { Pill, Leaf, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Pill size={32} />,
      title: "Wide Product Range",
      description: "We manufacture a complete range of supplements including tablets, capsules, protein powders, effervescent tablets, and sachets."
    },
    {
      icon: <Shield size={32} />,
      title: "cGMP Certified",
      description: "Our state-of-the-art facility adheres strictly to Good Manufacturing Practices for highest safety standards."
    },
    {
      icon: <Leaf size={32} />,
      title: "Natural Ingredients",
      description: "We source only premium, lab-tested natural ingredients to ensure efficacy and purity."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Turnaround",
      description: "Efficient manufacturing processes guarantee quick delivery times for your brand."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Manufacturing Capabilities</h3>
          <p className="text-gray-600 text-lg">
            We deliver excellence through our state-of-the-art facility, rigorous quality control, and dedicated team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center text-primary-green mb-6 group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
