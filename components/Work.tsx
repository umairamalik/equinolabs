import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Activity, Globe, Server, ShieldCheck, Wifi, CheckCircle } from 'lucide-react';

const Work: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeLog, setActiveLog] = useState(0);

  // Simulation Logs
  const logs = [
    { text: "INITIALIZING CORE SYSTEMS...", status: "COMPLETE" },
    { text: "OPTIMIZING SEO ALGORITHMS...", status: "PROCESSING" },
    { text: "COMPILING REACT COMPONENTS...", status: "DONE" },
    { text: "ESTABLISHING SECURE CONNECTION...", status: "SECURE" },
    { text: "GENERATING LEADS...", status: "ACTIVE" },
    { text: "DEPLOYING TO CLOUD...", status: "UPLOADING" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLog((prev) => (prev + 1) % logs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Canvas Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.clientWidth;
    let height = canvas.height = canvas.clientHeight;

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = width < 768 ? 40 : 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Grid Background
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 1;
      
      // Update and Draw Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#D90429';
        ctx.fill();

        // Connect Particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(217, 4, 41, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id={SectionId.ABOUT} className="relative py-24 bg-brand-black overflow-hidden flex items-center justify-center border-y border-gray-900 min-h-[80vh]">
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Radial Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-black pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Who We Are Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Who We Are</h4>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Architects of the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-900">Digital Future</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Equinolabs isn't just a digital agency; we are a dedicated team of engineers, designers, and strategists obsessed with perfection. We believe in code that is clean, designs that are timeless, and marketing that converts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {['Award Winning Support', 'Agile Development', 'Data-Driven SEO', 'Cross-Platform Apps'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-brand-red w-5 h-5 flex-shrink-0" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Simulation HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:ml-12"
        >
          {/* Glassmorphism Card */}
          <div className="bg-brand-black/80 backdrop-blur-md border border-brand-red/30 p-8 rounded-sm shadow-[0_0_50px_rgba(217,4,41,0.1)] relative overflow-hidden">
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
              <h3 className="text-white font-mono uppercase text-sm flex items-center gap-2">
                <Server size={16} className="text-brand-red" />
                System Status: LIVE
              </h3>
              <span className="text-xs text-brand-red animate-pulse">● REC</span>
            </div>

            <div className="space-y-4 font-mono text-sm">
               {logs.map((log, index) => (
                 <div 
                   key={index} 
                   className={`flex justify-between items-center p-3 border-l-2 transition-all duration-300 ${
                     index === activeLog 
                       ? 'bg-brand-red/10 border-brand-red text-white scale-105' 
                       : 'border-transparent text-gray-500'
                   }`}
                 >
                   <span className="truncate mr-4">{log.text}</span>
                   <span className={`text-xs px-2 py-1 rounded ${
                     log.status === 'DONE' || log.status === 'COMPLETE' || log.status === 'SECURE' ? 'bg-green-900/30 text-green-500' :
                     log.status === 'PROCESSING' || log.status === 'UPLOADING' ? 'bg-yellow-900/30 text-yellow-500' :
                     'bg-brand-red/20 text-brand-red'
                   }`}>
                     {log.status}
                   </span>
                 </div>
               ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 grid grid-cols-3 gap-2">
               <div className="bg-gray-900 p-2 text-center rounded flex flex-col items-center">
                  <Globe size={16} className="text-gray-400 mb-1" />
                  <span className="text-[10px] text-gray-500">GLOBAL</span>
               </div>
               <div className="bg-gray-900 p-2 text-center rounded flex flex-col items-center">
                  <ShieldCheck size={16} className="text-gray-400 mb-1" />
                  <span className="text-[10px] text-gray-500">SECURE</span>
               </div>
               <div className="bg-gray-900 p-2 text-center rounded flex flex-col items-center">
                  <Wifi size={16} className="text-gray-400 mb-1" />
                  <span className="text-[10px] text-gray-500">ONLINE</span>
               </div>
            </div>
          </div>
          
          {/* Decorative Elements around HUD */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-brand-red opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-brand-red opacity-50"></div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </section>
  );
};

export default Work;