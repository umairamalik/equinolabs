import React, { useState, useRef, useEffect } from 'react';
import { SectionId, ChatMessage } from '../types';
import { Send, Bot, Mail, Globe, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "Hello! I'm EquiBot. Ask me about our services or describe your project for a quick estimate." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const getSimulatedResponse = (text: string): string => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('quote') || lowerText.includes('money')) {
      return "Since every project is unique, we provide bespoke quotes. Please fill out the form or chat on WhatsApp for a quick estimate.";
    }
    if (lowerText.includes('service') || lowerText.includes('web') || lowerText.includes('app') || lowerText.includes('software') || lowerText.includes('design')) {
      return "We specialize in Websites, Web Apps, Custom Software, SEO, and Digital Marketing. What specifically are you looking to build?";
    }
    if (lowerText.includes('seo') || lowerText.includes('marketing') || lowerText.includes('traffic')) {
      return "Our data-driven SEO and marketing strategies are designed to maximize ROI. We'd love to audit your current site.";
    }
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return "Hello! Welcome to Equinolabs. How can I help you elevate your digital presence today?";
    }
    if (lowerText.includes('contact') || lowerText.includes('call') || lowerText.includes('email') || lowerText.includes('number')) {
      return "You can contact our team directly via the form here, or click the WhatsApp button for an instant response.";
    }
    if (lowerText.includes('location') || lowerText.includes('where') || lowerText.includes('address') || lowerText.includes('office')) {
      return "We are a 100% remote agency. This allows us to work with the best talent globally and serve clients worldwide without geographical limits.";
    }
    return "That sounds interesting! To discuss this in detail, please connect with our engineering team via WhatsApp using the button below.";
  };

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

    // Simulate network delay and "thinking"
    setTimeout(() => {
      const responseText = getSimulatedResponse(userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setChatHistory(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
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
                <h3 className="text-2xl font-bold text-white mb-6">Remote First</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Globe className="text-brand-red w-6 h-6 mt-1" />
                    <div>
                      <p className="text-gray-400">Operating Globally</p>
                      <p className="text-gray-400">Serving clients worldwide</p>
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
                  <h3 className="text-white font-bold">EquiBot</h3>
                  <p className="text-white/80 text-xs">Always Online • Ask about services</p>
                </div>
              </div>
            </div>

            <div className="flex-grow p-6 overflow-y-auto space-y-4">
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
              <div ref={messagesEndRef} />
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