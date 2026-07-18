import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    {
      question: "What is your Minimum Order Quantity (MOQ)?",
      answer: "Our MOQ varies depending on the product type (tablets, capsules, powders, etc.) and packaging requirements. We offer flexible MOQs to support both startups and established brands. Contact our sales team for specific product MOQs."
    },
    {
      question: "Are your manufacturing facilities certified?",
      answer: "Yes, our state-of-the-art manufacturing facilities are strictly cGMP compliant and ISO certified. We maintain the highest standards of quality control and safety in every batch."
    },
    {
      question: "Do you offer custom formulations for private labels?",
      answer: "Absolutely. Our expert R&D team can help you develop custom formulations tailored to your target market, or you can choose from our extensive catalog of proven, ready-to-market formulas."
    },
    {
      question: "What is the typical turnaround time for an order?",
      answer: "For standard formulations, the turnaround time is typically 4-6 weeks from design approval to delivery. Custom formulations may take 6-8 weeks due to additional R&D and stability testing."
    },
    {
      question: "Do you assist with packaging and label design?",
      answer: "Yes! We provide end-to-end solutions, including packaging selection and label design compliance. We ensure your products not only look premium but also comply with regulatory guidelines like FSSAI."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">FAQs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-600">Find answers to common questions about our manufacturing process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'border-primary-green bg-primary-green/5 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-semibold text-lg ${activeIndex === index ? 'text-primary-green' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${activeIndex === index ? 'bg-primary-green text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-primary-green/10 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
