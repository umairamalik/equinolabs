import React, { useState, useEffect } from 'react';
import { Menu, X, FlaskConical } from 'lucide-react';
import { SectionId, Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Check if it's the Case Studies link
    if (href === '#case-studies') {
      onNavigate('case-study');
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Default behavior for other links (Main Home Page)
    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for state update to mount home components before scrolling
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#') {
           window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      setIsMobileMenuOpen(false);
      return;
    }

    // Standard smooth scroll if already on home
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    } else if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', href: `#${SectionId.HOME}` },
    { label: 'Services', href: `#${SectionId.SERVICES}` },
    { label: 'Work', href: `#${SectionId.WORK}` },
    { label: 'About', href: `#${SectionId.ABOUT}` },
    { label: 'Case Studies', href: `#case-studies` }, // Special Link
    { label: 'Contact', href: `#${SectionId.CONTACT}` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled || currentPage === 'case-study' ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-gray' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[101]">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="text-2xl font-display font-black tracking-widest text-white uppercase flex items-center gap-2 cursor-pointer z-[102]"
        >
          Equino<span className="text-brand-red">labs</span>.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer relative z-[102] ${
                currentPage === 'case-study' && link.label === 'Case Studies' ? 'text-brand-red' : 'text-gray-300 hover:text-brand-red'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`#${SectionId.CONTACT}`}
            onClick={(e) => handleNavClick(e, `#${SectionId.CONTACT}`)}
            className="px-6 py-2 border-2 border-brand-red text-brand-red font-bold uppercase text-xs tracking-widest hover:bg-brand-red hover:text-white transition-all duration-300 rounded-sm cursor-pointer relative z-[102]"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-red transition-colors cursor-pointer relative z-[102]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-brand-gray p-6 md:hidden flex flex-col gap-4 shadow-2xl z-[100]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-bold uppercase text-white hover:text-brand-red cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;