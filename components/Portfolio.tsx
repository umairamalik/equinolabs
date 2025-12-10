
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
    title: 'MindVille – Modern Mental Wellness Platform',
    category: 'Wellness Website',
    imageUrl: mindvilleImg,
   link: 'https://mindville.in/'
 },
  {
    id: 'p2',
  title: 'KaarKash – Kashmiri Handicrafts E-commerce Website',
    category: 'Online Store Development',
   imageUrl: karkashImg,
    link: 'https://kaarkash.com/'
   },
   {
    id: 'p3',
     title: 'VuiVui – Specialty Coffee & Café E-commerce Website',
     category: 'E-commerce / Food & Beverage Website',
    imageUrl: vuicoffeeImg,
     link: 'https://vuivui.in/'
   },
   {
    id: 'p4',
     title: 'MindVille – Mental Wellness & Self-Care E-commerce Site',
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

  return (
    <section id={SectionId.WORK} className="py-24 bg-brand-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Selected Works</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Digital Excellence <br/><span className="text-gray-600">Delivered.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            From enterprise-grade platforms to high-conversion marketing campaigns, explore how we transform visions into digital reality.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              onClick={(e) => handleClick(e, item)}
              target={item.link.startsWith('#') ? undefined : "_blank"}
              rel={item.link.startsWith('#') ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-[400px] bg-gray-900 overflow-hidden cursor-pointer rounded-sm border border-gray-800 block"
            >
              {/* Image */}
            <img 
  src={item.imageUrl} 
  alt={item.title} 
  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105 opacity-80"
/>


              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Hidden Action - Revealed on Hover */}
                <div 
                  className={`flex items-center gap-2 text-white font-bold uppercase text-xs tracking-widest transition-all duration-300 ${
                    hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  View {item.link === '#case-study' ? 'Case Study' : 'Project'} <ArrowRight size={16} className="text-brand-red" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.link === '#case-study' ? (
                   <FileText className="text-white w-6 h-6" />
                ) : (
                   <ExternalLink className="text-white w-6 h-6" />
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href={`#${SectionId.CONTACT}`}
            className="inline-block px-10 py-4 border border-brand-red text-white font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;