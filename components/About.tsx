import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-brand-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 border-[10px] border-brand-black shadow-2xl">
              <img src="https://picsum.photos/600/800?random=10" alt="About Equinolabs" className="w-full h-auto" />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-brand-red z-0 hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Architects of the <br/><span className="text-gray-500">Digital Future</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Equinolabs isn't just a digital agency; we are a dedicated team of engineers, designers, and strategists obsessed with perfection. We believe in code that is clean, designs that are timeless, and marketing that converts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Award Winning Support', 'Agile Development', 'Data-Driven SEO', 'Cross-Platform Apps'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-red w-5 h-5 flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href={`#${SectionId.CONTACT}`} className="text-white font-bold uppercase tracking-widest border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors">
                Meet the Team
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;