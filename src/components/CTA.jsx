import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="rounded-3xl p-12 lg:p-16 border border-white/10 bg-slate-800 shadow-xl">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">
            Start Booking <span className="text-blue-400">Smarter</span> Today
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Ready to eliminate schedule conflicts and grow your business? Join thousands of professionals who have already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary w-full sm:w-auto px-8 py-4 text-white rounded-lg">
              Contact Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
