// import React from 'react';
// import { SectionId } from '../types';
// import { Star, Quote } from 'lucide-react';

// const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       name: "Sarah Jenkins",
//       role: "CTO, FinCore",
//       text: "Equinolabs didn't just fix our code; they re-architected our entire platform. The performance boost was immediate.",
//       rating: 5
//     },
//     {
//       name: "David Chen",
//       role: "Founder, Urban Realty",
//       text: "Their lead generation strategies are unmatched. We saw a 300% increase in qualified inquiries within two months.",
//       rating: 5
//     },
//     {
//       name: "Elena Rodriguez",
//       role: "Director, Aero Dynamics",
//       text: "Professional, timely, and incredibly skilled. The best remote development team we've ever worked with.",
//       rating: 5
//     }
//   ];

//   return (
//     <section id={SectionId.TESTIMONIALS} className="py-24 bg-brand-black relative border-t border-gray-900">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Testimonials</h4>
//           <h2 className="text-3xl md:text-5xl font-display font-bold text-white">What Our Clients Say</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <div key={i} className="bg-gray-900/50 p-8 border border-gray-800 relative group hover:border-brand-red transition-colors duration-300">
//               <Quote className="absolute top-6 right-6 text-gray-700 w-8 h-8 group-hover:text-brand-red transition-colors" />
//               <div className="flex gap-1 mb-6">
//                 {[...Array(t.rating)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 text-brand-red fill-brand-red" />
//                 ))}
//               </div>
//               <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
//               <div>
//                 <h4 className="text-white font-bold text-lg">{t.name}</h4>
//                 <p className="text-gray-500 text-sm">{t.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;