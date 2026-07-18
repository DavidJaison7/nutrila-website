
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Whey Protein Isolate",
      price: "₹999.99",
      rating: 5,
      image: "product_01.webp"
    },
    {
      name: "Multivitamin Complex",
      price: "₹299.99",
      rating: 4.5,
      image: "product_02.webp"
    },
    {
      name: "BCAA Energy Formula",
      price: "₹499.99",
      rating: 5,
      image: "product_03.webp"
    },
    {
      name: "Pre-Workout Booster",
      price: "₹699.99",
      rating: 4.8,
      image: "product_04.webp"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Featured Products</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Selling Supplements</h3>
          <p className="text-gray-600 text-lg">
            Discover our premium range of scientifically formulated health and wellness products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative bg-gray-50 rounded-xl aspect-square mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={`/${product.image}`} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Add to Cart Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary-green text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-dark-green shadow-lg">
                    <ShoppingCart size={24} />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < Math.floor(product.rating) ? "text-secondary-orange fill-secondary-orange" : "text-gray-300"} 
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-green transition-colors">{product.name}</h4>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-transparent border-2 border-primary-green text-primary-green px-8 py-3 rounded-full font-medium hover:bg-primary-green hover:text-white transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
