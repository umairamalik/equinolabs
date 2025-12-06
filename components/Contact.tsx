import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionId, ChatMessage } from '../types';
import { Send, Bot, User, Mail, MapPin, Phone, MessageCircle, Globe } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';

const Contact: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "Hello! I'm EquiBot. Ask me about our services or describe your project for a quick estimate." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Changed from tracking an element to tracking the container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Only scroll the container internally, not the whole window
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText
    };

    setChatHistory(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const historyForAI = chatHistory.map(msg => ({ role: msg.role, text: msg.text }));
      const responseText = await generateAIResponse(userMsg.text, historyForAI);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setChatHistory(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-brand-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Let's Build Something Great</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Traditional Contact Info */}
          <div className="flex flex-col gap-8">
             <div className="bg-brand-gray p-8 border-l-4 border-brand-red">
                <h3 className="text-2xl font-bold text-white mb-6">Operations</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Globe className="text-brand-red w-6 h-6 mt-1" />
                    <div>
                      <p className="text-gray-400 font-bold">Remote-First Agency</p>
                      <p className="text-gray-500 text-sm">Serving clients globally from the cloud.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-brand-red w-6 h-6" />
                    <a href="mailto:hello@equinolabs.com" className="text-white hover:text-brand-red transition-colors">hello@equinolabs.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-brand-red w-6 h-6" />
                    <p className="text-gray-400">+91 88991 57496</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageCircle className="text-brand-red w-6 h-6" />
                    <a 
                      href="https://wa.me/918899157496" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-500 transition-colors font-bold"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
             </div>

             <div className="bg-brand-gray p-8 flex-grow">
               <h3 className="text-xl font-bold text-white mb-4">Send us a message</h3>
               <form className="space-y-4">
                 <input type="text" placeholder="Your Name" className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:border-brand-red outline-none transition-colors" />
                 <input type="email" placeholder="Your Email" className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:border-brand-red outline-none transition-colors" />
                 <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-brand-black border border-gray-800 p-4 text-white focus:border-brand-red outline-none transition-colors"></textarea>
                 <button className="px-8 py-4 bg-white text-brand-black font-bold uppercase hover:bg-brand-red hover:text-white transition-all w-full">Send Message</button>
               </form>
             </div>
          </div>

          {/* AI Chat Widget */}
          <div className="bg-brand-gray border border-gray-800 h-[600px] flex flex-col relative overflow-hidden shadow-2xl">
            <div className="bg-brand-red p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold">EquiBot AI</h3>
                  <p className="text-white/80 text-xs">Always Online • Ask about services</p>
                </div>
              </div>
            </div>

            <div 
              ref={chatContainerRef}
              className="flex-grow p-6 overflow-y-auto space-y-4 scroll-smooth"
            >
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-brand-red text-white rounded-br-none'
                        : 'bg-brand-black border border-gray-800 text-gray-300 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-brand-black border border-gray-800 p-4 rounded-lg rounded-bl-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-brand-black border-t border-gray-800">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-grow bg-brand-gray text-white p-3 border border-gray-700 focus:border-brand-red outline-none rounded-sm"
                />
                <button
                  type="submit"
                  disabled={isTyping}
                  className="bg-brand-red text-white p-3 hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;