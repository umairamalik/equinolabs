import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-12 border-t border-gray-900">
      {/* Added md:pr-28 to prevent overlap with floating WhatsApp button */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:pr-28">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-display font-black tracking-widest text-white uppercase">
            Equino<span className="text-brand-red">labs</span>.
          </a>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Equinolabs. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-brand-red transition-colors"><Facebook size={20} /></a>
          <a 
            href="https://www.instagram.com/equinolabs/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-brand-red transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;