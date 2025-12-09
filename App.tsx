import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CaseStudy from './components/CaseStudy';
import { Page, SectionId } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleContactClick = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById(SectionId.CONTACT);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-brand-black text-white selection:bg-brand-red selection:text-white min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Services />
            <Portfolio onNavigate={setCurrentPage} />
            <Work />
            <Contact />
          </>
        ) : (
          <CaseStudy 
            onBack={() => setCurrentPage('home')} 
            onContact={handleContactClick}
          />
        )}
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;