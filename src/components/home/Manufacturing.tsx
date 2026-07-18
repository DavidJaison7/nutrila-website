
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
  const solutions = [
    {
      title: "Third-Party Manufacturing",
      description: "Scale your brand with our state-of-the-art manufacturing facilities. We handle everything from raw material procurement to final packaging.",
      image: "Packagin.jpeg",
      link: "/services/third-party-manufacturing"
    },
    {
      title: "Private Label Solutions",
      description: "Launch your own line of premium nutraceuticals. Choose from our proven formulations and customize with your brand identity.",
      image: "Blister Pack.jpg",
      link: "/services/private-label"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Manufacturing Excellence</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200 flex items-center justify-center text-gray-400">
                <img 
                  src={`/${solution.image}`} 
                  alt={solution.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h4>
                <p className="text-gray-600 mb-6 flex-grow">{solution.description}</p>
                <Link to={solution.link} className="flex items-center gap-2 text-primary-green font-semibold group-hover:text-dark-green transition-colors w-max">
                  Click Here To Learn More <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-dark-green transition-colors">
            View All Services <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
