import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarDays, CheckCircle, Smartphone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      icon: <MousePointerClick className="w-6 h-6 text-blue-400" />,
      title: 'Choose Service',
      description: 'Select the type of appointment or service you need from our customized menu.',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      num: '02',
      icon: <CalendarDays className="w-6 h-6 text-teal-400" />,
      title: 'Select Date & Time',
      description: 'Pick an available slot that works best for your schedule.',
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      num: '03',
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
      title: 'Confirm Booking',
      description: 'Review your details and confirm. It takes only a few seconds.',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      num: '04',
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: 'Get Reminder',
      description: 'Receive automated notifications so you never miss an appointment.',
      gradient: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-slate-900/50 backdrop-blur-sm z-10 border-y border-white/5">
      <div className="section-container relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Four simple steps to seamless scheduling.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/20 via-teal-500/50 to-purple-500/20 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Icon Container */}
                <div className="w-24 h-24 rounded-full glass flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-slate-900">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative flex items-center justify-center bg-slate-900 w-[88px] h-[88px] rounded-full border border-white/10">
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-lg border-2 border-slate-900">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
