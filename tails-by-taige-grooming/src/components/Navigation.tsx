import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`text-2xl font-serif tracking-tight font-medium ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            {BUSINESS_INFO.name}
          </a>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#gallery" className="hover:opacity-70 transition-opacity">Gallery</a>
            <a href="#reviews" className="hover:opacity-70 transition-opacity">Reviews</a>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} 
              className={`px-6 py-2 rounded-full border transition-all ${
                isScrolled 
                  ? 'border-stone-900 hover:bg-stone-900 hover:text-white' 
                  : 'border-white hover:bg-white hover:text-stone-900'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-stone-900/95 backdrop-blur-sm flex items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center gap-8 text-white text-2xl font-serif">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-stone-400 text-lg font-sans mt-4">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
