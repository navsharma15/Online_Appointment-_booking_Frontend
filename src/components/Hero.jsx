import React from 'react';
import { Calendar, Bell, CheckCircle2, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - TEXT */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-medium text-blue-200">v2.0 is now live</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
              Simplify Your <br />
              <span className="text-blue-400">Scheduling</span> <br />
              with Ease
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl">
              Book, manage, and track your appointments effortlessly with our smart online booking system. Focus on your business while we handle your calendar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Get Started Free
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-6 text-sm text-slate-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User avatar" />
                  </div>
                ))}
              </div>
              <p>Loved by 10,000+ businesses</p>
            </div>
          </div>

          {/* RIGHT COLUMN - SIMPLE UI */}
          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center -mb-20 lg:mb-0">
             <div className="w-[90%] max-w-[450px] bg-slate-800 border border-white/10 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto w-1/2 h-3 bg-white/5 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                   <div className="h-40 bg-slate-700/50 rounded-lg flex items-center justify-center border border-white/5">
                      <Calendar className="w-12 h-12 text-blue-500/50" />
                   </div>
                   <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
                      <div className="h-4 w-full bg-slate-700 rounded"></div>
                      <div className="h-4 w-5/6 bg-slate-700 rounded"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
