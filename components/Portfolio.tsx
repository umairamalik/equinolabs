
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionId, PortfolioItem, Page } from '../types';
import { ExternalLink, ArrowRight, FileText } from 'lucide-react';
import criminalImg from "../assets/images/edgescreening.png";

import mindvilleImg from "../assets/images/mindville.png";
import karkashImg from "../assets/images/KaarKash.png";
import vuicoffeeImg from "../assets/images/VuiCoffee.png";
import mindvilleshopImg from "../assets/images/mindvilleshop.png";
interface PortfolioProps {
  onNavigate: (page: Page) => void;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'case-study-criminal',
    title: 'Criminal Research Tool',
    category: 'AI & Legal Tech',
    // Updated image to represent investigation/research (Magnifying glass)
    imageUrl: criminalImg,
    link: '#case-study'
  },
 {
    id: 'p1',
    title: 'MindVille',
    category: 'Wellness Website',
    imageUrl: mindvilleImg,
   link: 'https://mindville.in/'
 },
  {
    id: 'p2',
  title: 'KaarKash ',
    category: 'Online Store Development',
   imageUrl: karkashImg,
    link: 'https://kaarkash.com/'
   },
   {
    id: 'p3',
     title: 'VuiVui ',
     category: 'E-commerce / Food & Beverage Website',
    imageUrl: vuicoffeeImg,
     link: 'https://vuivui.in/'
   },
   {
    id: 'p4',
     title: 'MindVille-Shop',
     category: 'Wellness & Self-Care Website',
    imageUrl: mindvilleshopImg,
     link: 'https://mindville.shop/'
   },
//   {
//     id: 'p5',
//     title: 'Aero Dynamics',
//     category: 'Brand & SEO',
//     imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     link: '#'
//   }
];

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent, item: PortfolioItem) => {
    // If it's the internal Case Study link, prevent default and use navigation handler
    if (item.link === '#case-study') {
      e.preventDefault();
      onNavigate('case-study');
      window.scrollTo(0, 0); // Instant scroll for page change
    }
  };
return(
    <section id={SectionId.WORK} className="py-24 bg-brand-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:w-2/3 mx-auto text-center"
        >
          <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Selected Works</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Digital Excellence <br/><span className="text-gray-600">Delivered.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore how we transform visions into digital reality.
          </p>
        </motion.div>

        {/* Portfolio Grid - Browser Window Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              {/* Title - Above Card */}
              <h3 className="text-xl md:text-2xl font-bold text-brand-red mb-6 text-center uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>

              {/* Browser Window Mockup */}
              <a 
                href={item.link}
                onClick={(e) => handleClick(e, item)}
                target={item.link.startsWith('#') ? undefined : "_blank"}
                rel={item.link.startsWith('#') ? undefined : "noopener noreferrer"}
                className="w-full relative block mb-8 transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="bg-[#121212] rounded-lg overflow-hidden shadow-2xl border border-gray-800 hover:border-brand-red/30 transition-colors">
                  {/* Browser Bar */}
                  <div className="h-8 bg-[#1a1a1a] flex items-center px-4 gap-2 border-b border-gray-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    {/* Address Bar Mock - Decorative */}
                    <div className="hidden md:block ml-4 flex-grow max-w-[200px] h-3 bg-white/5 rounded-full"></div>
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden group-hover:opacity-90 transition-opacity">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </a>

              {/* Action Button - Below Card */}
              <a 
                href={item.link}
                onClick={(e) => handleClick(e, item)}
                className="bg-white text-brand-black w-full max-w-[240px] py-4 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-red hover:text-white transition-all duration-300 rounded-sm shadow-lg hover:shadow-brand-red/20 text-center"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a 
            href={`#${SectionId.CONTACT}`}
            className="inline-block px-10 py-4 border border-gray-700 text-white font-bold uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;