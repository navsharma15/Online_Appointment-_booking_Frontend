import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, BellRing, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CalendarCheck className="w-8 h-8 text-blue-400" />,
      title: 'Easy Booking',
      description: 'Streamlined scheduling process that allows your clients to book appointments 24/7 with zero hassle.',
      colorClasses: {
        glow: 'bg-blue-500/10 group-hover:bg-blue-500/30',
        iconBg: 'bg-blue-500/10 border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
      }
    },
    {
      icon: <BellRing className="w-8 h-8 text-teal-400" />,
      title: 'Real-Time Alerts',
      description: 'Automated SMS and email reminders reduce no-shows and keep everyone on the same page.',
      colorClasses: {
        glow: 'bg-teal-500/10 group-hover:bg-teal-500/30',
        iconBg: 'bg-teal-500/10 border-teal-500/20 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]'
      }
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security ensures your data and your clients\' information is always protected.',
      colorClasses: {
        glow: 'bg-purple-500/10 group-hover:bg-purple-500/30',
        iconBg: 'bg-purple-500/10 border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } }
  };

  return (
    <section id="features" className="relative py-24 z-20">
      <div className="section-container">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Powerful Features for Modern <span className="text-gradient">Businesses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Everything you need to manage your appointments, team, and clients in one beautiful, easy-to-use platform.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[50px] rounded-full transition-all duration-500 ${feature.colorClasses.glow}`}></div>
              
              <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${feature.colorClasses.iconBg}`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Features;
