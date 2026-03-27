import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 z-20">
      <div className="section-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2rem] p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-slate-900 to-purple-600/30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-teal-500/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none"></div>
          
          <div className="relative glass border border-white/20 rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_60px_rgba(31,38,135,0.2)] bg-slate-900/40 backdrop-blur-2xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Start Booking <span className="text-gradient">Smarter</span> Today
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Ready to eliminate schedule conflicts and grow your business? Join thousands of professionals who have already made the switch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto text-lg px-8 py-4">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
