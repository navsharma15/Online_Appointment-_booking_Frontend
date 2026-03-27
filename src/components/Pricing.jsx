import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$0',
      period: '/month',
      description: 'Perfect for individuals getting started with online scheduling.',
      features: ['1 User Account', 'Up to 50 Appointments/mo', 'Basic Email Reminders', 'Community Support'],
      highlight: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses needing more power and customization.',
      features: ['5 User Accounts', 'Unlimited Appointments', 'SMS & Email Reminders', 'Custom Branding', 'Priority Support'],
      highlight: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/month',
      description: 'For large teams requiring advanced security and integrations.',
      features: ['Unlimited Users', 'Advanced Analytics', 'API Access', 'Dedicated Account Manager', '24/7 Phone Support'],
      highlight: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="relative py-24 z-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            No hidden fees. No surprises. Choose the plan that fits your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight 
                  ? 'glass-card border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.3)] bg-gradient-to-b from-slate-900/90 to-blue-900/20 scale-105 z-10' 
                  : 'glass bg-slate-900/60 border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider drop-shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className={`mr-3 rounded-full p-1 ${plan.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
