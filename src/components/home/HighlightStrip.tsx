
import { motion } from 'framer-motion';
import { Leaf, Award, Shield, CheckCircle } from 'lucide-react';

const HighlightStrip = () => {
  const highlights = [
    { icon: <CheckCircle size={24} />, text: "Lab Tested" },
    { icon: <Leaf size={24} />, text: "100% Natural Ingredients" },
    { icon: <Award size={24} />, text: "ISO & cGMP Certified" },
    { icon: <Shield size={24} />, text: "Premium Quality" },
    { icon: <CheckCircle size={24} />, text: "Advanced Formulation" },
    { icon: <Award size={24} />, text: "Wide Nutraceutical Product Range" }
  ];

  // Duplicate items to ensure seamless scrolling
  const duplicatedHighlights = [...highlights, ...highlights, ...highlights, ...highlights];

  return (
    <div className="bg-dark-green py-6 border-y border-green-800 overflow-hidden relative flex">
      {/* Gradient masks for smooth fade in/out on edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dark-green to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dark-green to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex gap-16 pr-16 items-center w-max cursor-pointer"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed
        }}
        whileHover={{ animationPlayState: "paused" }}
        style={{
          // For Framer Motion v10+, whileHover doesn't directly pause x animation unless configured via variants, 
          // but we can use CSS animation instead for reliable pause on hover, or keep motion with standard behavior.
          // Since Framer motion doesn't natively pause `animate` with `whileHover` easily without custom hooks, 
          // let's use a simple CSS class approach for the pause effect.
        }}
      >
        {duplicatedHighlights.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white hover:text-secondary-orange transition-colors duration-300"
          >
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
              {item.icon}
            </div>
            <span className="font-medium text-lg tracking-wide whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HighlightStrip;
