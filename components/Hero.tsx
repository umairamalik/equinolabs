import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(SectionId.SERVICES);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={SectionId.HOME}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-red/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-red font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base"
        >
          Digital Agency & Software Solutions
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white uppercase leading-tight mb-8"
        >
          Equino<br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Labs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
        >
          We engineer top-notch web apps, fix broken code, and drive growth with precision digital marketing.
          Modern. Classic. Essential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          {/* <a
            href={`#${SectionId.WORK}`}
            className="px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_0_20px_rgba(217,4,41,0.4)]"
          >
            Our Work
          </a> */}
          <a
            href={`#${SectionId.CONTACT}`}
            className="px-8 py-4 border border-gray-700 text-white font-bold uppercase tracking-widest text-sm hover:border-white transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20"
      >
        <a href={`#${SectionId.SERVICES}`} onClick={handleScrollDown} aria-label="Scroll down">
          <ChevronDown className="text-gray-500 w-8 h-8 hover:text-brand-red transition-colors cursor-pointer" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;