import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Search, ShieldCheck, FileText, Cpu, CheckCircle, Clock, Zap, BarChart } from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
  onContact: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack, onContact }) => {
  // Force scroll to top when component mounts to prevent mobile scroll issues
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-black text-white pt-24 pb-12 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-5xl">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-brand-red transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </button>

        {/* Header */}
        <header className="mb-20 border-b border-gray-800 pb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">
              Case Study — AI Intelligence System
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
              Criminal Research & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Intelligence Tool</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              An AI-assisted intelligence system designed to help legal teams and investigators extract, organize, and evaluate criminal case data in minutes, not hours.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <span className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-xs font-bold uppercase tracking-wide text-gray-300">
              Legal Tech
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-xs font-bold uppercase tracking-wide text-gray-300">
              AI / NLP
            </span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-xs font-bold uppercase tracking-wide text-gray-300">
              Data Extraction
            </span>
          </motion.div>
        </header>

        {/* The Problem & Solution Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-brand-gray p-8 border-l-4 border-brand-red">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-brand-red text-sm">01</span>
              The Problem
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Analysts spent 2–4 hours manually gathering data for a single case.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Data scattered across PDFs, websites, and physical records.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Prone to human error and difficult to consolidate.</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-gray p-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-500 text-sm">02</span>
              The Solution
            </h3>
            <p className="text-gray-400 mb-6">
              We engineered a centralized web-based dashboard powered by NLP transformers to automate the intake and analysis of legal documents.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 p-3 rounded">
                <span className="block text-white font-bold text-lg">95%+</span>
                <span className="text-xs text-gray-500 uppercase">Data Accuracy</span>
              </div>
              <div className="bg-black/40 p-3 rounded">
                <span className="block text-white font-bold text-lg">15 min</span>
                <span className="text-xs text-gray-500 uppercase">Per Case</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-brand-red" />,
                title: "Smart Search Engine",
                desc: "Relevance scoring & fuzzy matching for keywords, IPC sections, and accused details."
              },
              {
                icon: <Database className="w-8 h-8 text-brand-red" />,
                title: "Record Parsing",
                desc: "Automatic extraction from PDFs using NLP to convert unstructured text into database fields."
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-red" />,
                title: "AI Summaries",
                desc: "Auto-generate briefing notes and highlight important legal points instantly."
              },
              {
                icon: <BarChart className="w-8 h-8 text-brand-red" />,
                title: "Comparison Engine",
                desc: "Side-by-side comparison of cases to identify modus operandi similarities."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
                title: "Admin Dashboard",
                desc: "Validate extracted fields, add manual annotations, and export reports (PDF/CSV)."
              },
              {
                icon: <Cpu className="w-8 h-8 text-brand-red" />,
                title: "Tech Stack",
                desc: "React, Python (Django), PostgreSQL, SpaCy + Transformers, Render."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#121212] p-8 border border-gray-800 hover:border-brand-red/50 transition-colors group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-gradient-to-r from-brand-red/10 to-transparent p-12 rounded-sm border border-brand-red/20 mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-brand-red/20 pb-4 inline-block">Impact Analysis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-white mb-2">70%</div>
              <div className="text-xs uppercase tracking-widest text-brand-red">Productivity Boost</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">10m</div>
              <div className="text-xs uppercase tracking-widest text-brand-red">Avg. Research Time</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">Zero</div>
              <div className="text-xs uppercase tracking-widest text-brand-red">Manual Errors</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">Auto</div>
              <div className="text-xs uppercase tracking-widest text-brand-red">Report Generation</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Want to build similar intelligence tools for your business?</p>
          <button 
            onClick={onContact}
            className="px-10 py-4 bg-brand-red text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all shadow-[0_0_20px_rgba(217,4,41,0.4)]"
          >
            Contact Equinolabs
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default CaseStudy;