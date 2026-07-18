import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, Award } from 'lucide-react';

const AnnouncementBar = () => {
  const points = [
    { text: "Lab Tested", icon: CheckCircle2 },
    { text: "100% Natural Ingredients", icon: Leaf },
    { text: "ISO & cGMP Certified", icon: Award },
    { text: "Premium Quality", icon: Award },
    { text: "Advanced Formulation", icon: CheckCircle2 },
    { text: "Wide Nutraceutical Product Range", icon: CheckCircle2 },
  ];

  // Duplicate for seamless loop on wide screens
  const duplicatedPoints = [...points, ...points, ...points, ...points];

  return (
    <div className="w-full bg-[#0d7d40] text-white py-3 overflow-hidden whitespace-nowrap relative flex items-center">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex items-center gap-12 px-6 w-max"
      >
        {duplicatedPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div key={index} className="flex items-center gap-2 font-medium tracking-wide">
              <Icon size={18} className="text-white/90" />
              <span>{point.text}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
