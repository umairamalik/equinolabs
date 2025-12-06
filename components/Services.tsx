import React from 'react';
import { motion } from 'framer-motion';
import { SectionId, Service } from '../types';
import { Code, Settings, Monitor, Rocket, Search, UserPlus, Globe, Database, Smartphone } from 'lucide-react';

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Websites & Web Apps',
    description: 'High-performance, scalable React and Next.js applications tailored to your business needs.',
    icon: 'Monitor'
  },
  {
    id: 'fixes',
    title: 'Website Fixes',
    description: 'Expert debugging and optimization to get your existing site back to perfect health.',
    icon: 'Settings'
  },
  {
    id: 'software',
    title: 'Custom Software',
    description: 'Bespoke software solutions to streamline your internal processes and workflows.',
    icon: 'Database'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Strategic campaigns that cut through the noise and deliver measurable ROI.',
    icon: 'Rocket'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Technical and content SEO to dominate search rankings and drive organic traffic.',
    icon: 'Search'
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description: 'Data-driven strategies to identify and convert high-quality prospects.',
    icon: 'UserPlus'
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'Engaging content and community management across all major social platforms.',
    icon: 'Smartphone'
  },
  {
    id: 'tech-support',
    title: 'Technical Support',
    description: '24/7 reliability ensuring your digital assets are always online and secure.',
    icon: 'Code'
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={32} />,
  Settings: <Settings size={32} />,
  Database: <Database size={32} />,
  Rocket: <Rocket size={32} />,
  Search: <Search size={32} />,
  UserPlus: <UserPlus size={32} />,
  Smartphone: <Smartphone size={32} />,
  Code: <Code size={32} />,
  Globe: <Globe size={32} />
};

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-brand-gray relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-black/50 hidden lg:block pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-1/2"
        >
          <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">High-End Digital Services</h2>
          <p className="text-gray-400 text-lg">
            We don't just build; we accelerate. From complex back-end architectures to stunning front-end interfaces, 
            Equinolabs covers the full spectrum of digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-brand-black border border-gray-800 hover:border-brand-red transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-gray-500 group-hover:text-brand-red transition-colors duration-300 mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;