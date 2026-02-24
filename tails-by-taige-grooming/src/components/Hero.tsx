import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui';
import { BUSINESS_INFO } from '../constants';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden bg-stone-100 flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
          alt="Happy dog grooming" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 text-sm md:text-base tracking-[0.2em] uppercase font-medium"
        >
          {BUSINESS_INFO.tagline}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-8 tracking-tight leading-tight"
        >
          {BUSINESS_INFO.name}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto text-white/90"
        >
          {BUSINESS_INFO.subhead} Experience premium grooming services in Santa Clara, Utah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} variant="primary" className="bg-white text-stone-900 border-white hover:bg-stone-100 hover:text-stone-900">
            Book Appointment
          </Button>
          <Button href="#services" variant="outline" className="text-white border-white hover:bg-white hover:text-stone-900">
            View Services
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
