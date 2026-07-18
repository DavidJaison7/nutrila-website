import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isScrolled ? 'bg-gray-900 shadow-md py-4' : 'bg-gray-900 py-6';

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '#',
      dropdown: [
        { name: 'Third-Party Manufacturing', path: '/services/third-party-manufacturing' },
        { name: 'Private Label Solutions', path: '/services/private-label' }
      ]
    },
    { name: 'Shop', path: '/#shop' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center w-1/4">
            <img 
              src="/Nutrila svg LOGO.png" 
              alt="Nutrila" 
              className="h-10 object-contain" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <a href={link.path} className="text-white font-medium hover:text-primary-green transition-colors tracking-wide flex items-center gap-1">
                    {link.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </a>
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                    {link.dropdown.map(drop => (
                      <Link key={drop.name} to={drop.path} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-green transition-colors font-medium">
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={link.name} 
                  href={link.path}
                  className="text-white font-medium hover:text-primary-green transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          
          {/* Right Action Icons */}
          <div className="hidden md:flex items-center justify-end w-1/4 border-l border-white/20 pl-6 gap-6 text-white">
            <button className="hover:text-primary-green transition-colors relative">
              <ShoppingCart size={22} />
              {currentUser && <span className="absolute -top-2 -right-2 bg-secondary-orange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>}
            </button>
            <div className="flex items-center gap-4">
              {currentUser ? (
                <>
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-primary-green overflow-hidden flex items-center justify-center">
                      {currentUser.photoURL ? (
                        <img src={currentUser.photoURL} alt="User" className="w-full h-full object-cover" />
                      ) : (
                        <User size={16} className="text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium hidden lg:block group-hover:text-primary-green transition-colors">
                      {currentUser.displayName || currentUser.email?.split('@')[0] || 'My Account'}
                    </span>
                  </div>
                  <button onClick={logout} className="text-white/70 text-sm font-medium hover:text-red-400 transition-colors">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white text-sm font-medium hover:text-primary-green transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-1.5 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4 text-white w-1/4 justify-end">
            <button className="hover:text-primary-green transition-colors relative">
              <ShoppingCart size={22} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 shadow-2xl flex flex-col"
            >
              <div className="p-5 flex justify-between items-center border-b border-gray-800">
                <img src="/Nutrila svg LOGO.png" alt="Nutrila" className="h-8 object-contain" />
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              
              {currentUser && (
                <div className="py-4 px-6 border-b border-gray-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-primary-green overflow-hidden flex items-center justify-center">
                    {currentUser.photoURL ? (
                      <img src={currentUser.photoURL} alt="User" className="w-full h-full object-cover" />
                    ) : (
                      <User size={20} className="text-white" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">
                      {currentUser.displayName || 'Welcome back'}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {currentUser.email}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-col py-4 px-6 space-y-4">
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <div key={link.name} className="border-b border-gray-800 pb-2 flex flex-col">
                      <span className="text-lg text-white font-medium mb-2">{link.name}</span>
                      <div className="flex flex-col pl-4 space-y-2 border-l border-gray-700 ml-2">
                        {link.dropdown.map(drop => (
                          <Link 
                            key={drop.name} 
                            to={drop.path} 
                            className="text-gray-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      key={link.name} 
                      href={link.path}
                      className="text-lg text-white font-medium border-b border-gray-800 pb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
              <div className="mt-auto p-6 flex flex-col gap-4 text-white border-t border-gray-800 pt-6">
                {currentUser ? (
                  <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="block w-full text-center border border-red-500/50 text-red-400 py-2 rounded-md font-medium hover:bg-red-500/10">
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center border border-gray-700 text-white py-2 rounded-md font-medium hover:bg-gray-800">
                      Login
                    </Link>
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-primary-green text-white py-2 rounded-md font-medium hover:bg-dark-green">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
