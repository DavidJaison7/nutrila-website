import { useState } from 'react';
import { Mail, Phone, MapPin, Share2, MessageCircle, Globe, Leaf, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText('https://www.nutrila.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-6 relative overflow-hidden">
      {/* Top Left Leaf */}
      <div className="absolute left-0 top-0 text-primary-green/20 pointer-events-none transform -translate-x-1/2 -translate-y-1/4">
        <Leaf size={120} className="transform rotate-90" />
      </div>
      
      {/* Top Right Leaf */}
      <div className="absolute right-0 top-0 text-primary-green/20 pointer-events-none transform translate-x-1/2 -translate-y-1/4">
        <Leaf size={140} className="transform -rotate-90" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-primary-green flex items-center mb-4">
              <img src="/Nutrila svg LOGO.png" alt="Nutrila" className="h-10 object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Leading nutraceutical manufacturer in India offering premium third-party manufacturing and private label solutions globally.
            </p>
            <div className="flex gap-4 pt-2">
              <button 
                onClick={handleShare}
                title="Copy website link"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors duration-300"
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
              </button>
              <Link to="/contact" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors duration-300">
                <MessageCircle size={16} />
              </Link>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors duration-300">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h4 className="text-lg font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 text-sm hover:text-primary-green transition-colors">Home</Link></li>
              <li className="relative group">
                <button className="text-gray-400 text-sm hover:text-primary-green transition-colors flex items-center gap-1 outline-none">
                  Services <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 bottom-full mb-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-[#1a1a1a] rounded-lg shadow-2xl border border-gray-800 overflow-hidden py-2 z-50">
                  <Link to="/services/third-party-manufacturing" className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-primary-green transition-colors">Third-Party Manufacturing</Link>
                  <Link to="/services/private-label" className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-primary-green transition-colors">Private Label Solutions</Link>
                </div>
              </li>
              <li><Link to="/#shop" className="text-gray-400 text-sm hover:text-primary-green transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-primary-green transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-primary-green transition-colors">Contact</Link></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="md:justify-self-end">
            <h4 className="text-lg font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-green mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">Khasra no-953/270, opp. Dusshera Ground, Sector 5, Parwanoo, Himachal Pradesh 173220</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-green flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 78076 88954</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-green flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">nutrilalifecare@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-primary-green flex-shrink-0" size={18} />
                <a href="https://www.nutrila.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-primary-green transition-colors">www.nutrila.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          {/* Left corner leaf */}
          <div className="absolute left-0 bottom-0 text-primary-green/20 pointer-events-none transform -translate-x-1/2 translate-y-1/2">
            <Leaf size={100} className="transform rotate-45" />
          </div>

          <div className="flex items-center gap-4 z-10">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Nutrila Life Care. All Rights Reserved. Designed by Dzinteq
            </p>
          </div>

          <div className="flex gap-6 text-sm z-10">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

          {/* Right corner leaf */}
          <div className="absolute right-0 bottom-0 text-primary-green/20 pointer-events-none transform translate-x-1/2 translate-y-1/2">
            <Leaf size={120} className="transform -rotate-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
