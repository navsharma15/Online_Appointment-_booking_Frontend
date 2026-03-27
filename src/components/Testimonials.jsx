import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Clinic Manager',
      image: 'https://i.pravatar.cc/150?img=47',
      text: "ApointHub has completely transformed how we manage patient bookings. The automated reminders have reduced our no-shows by 40%. It's incredibly easy to use."
    },
    {
      name: 'David Chen',
      role: 'Fitness Coach',
      image: 'https://i.pravatar.cc/150?img=11',
      text: "I used to spend hours every week just scheduling clients. Now, they book themselves through my custom link. The integration with my calendar is flawless."
    },
    {
      name: 'Amanda Rivera',
      role: 'Salon Owner',
      image: 'https://i.pravatar.cc/150?img=44',
      text: "The beautifully designed booking page gives my clients a premium experience before they even walk through the door. Highly recommend for any service business!"
    },
    {
      name: 'Michael Ross',
      role: 'Consultant',
      image: 'https://i.pravatar.cc/150?img=33',
      text: "Seamless synchronization across all my devices. I can check my schedule on the go and never worry about double-booking. It's a lifesaver."
    },
    {
      name: 'Jessica Taylor',
      role: 'Therapist',
      image: 'https://i.pravatar.cc/150?img=20',
      text: "The security features give me peace of mind knowing my clients' data is safe. The interface is intuitive, and the customer support is top-notch."
    }
  ];

  // Duplicating for infinite scroll effect
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Loved by <span className="text-gradient">Professionals</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg"
        >
          See what our customers have to say about their experience with ApointHub.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full group">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: [0, -1920] }} // Adjust based on estimated width
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {doubledTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[350px] flex-shrink-0 glass-card p-8 border border-white/10 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
                />
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients for fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonials;
