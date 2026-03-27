import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, CheckCircle2, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - TEXT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-400/30 bg-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-200">v2.0 is now live</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Simplify Your <br />
              <span className="text-gradient">Scheduling</span> <br />
              with Ease
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Book, manage, and track your appointments effortlessly with our smart online booking system. Focus on your business while we handle your calendar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Get Started Free
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Loved by 10,000+ businesses</p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - DEVICES UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center -mb-20 lg:mb-0"
          >
            {/* Glow behind devices */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/30 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
            
            {/* Laptop Mockup */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute left-0 lg:-left-12 top-[10%] w-[85%] max-w-[500px] glass-card border border-white/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="mx-auto w-1/2 h-4 bg-white/5 rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-2">
                  <div className="h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/5 rounded-xl"></div>
                  <div className="h-8 bg-white/5 rounded-lg"></div>
                  <div className="h-8 bg-white/5 rounded-lg"></div>
                  <div className="h-8 bg-white/5 rounded-lg"></div>
                </div>
                <div className="col-span-2 space-y-3">
                  <div className="h-8 w-1/2 bg-white/10 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-white/5 border border-white/5 rounded-xl"></div>
                    <div className="h-16 bg-white/5 border border-white/5 rounded-xl"></div>
                  </div>
                  <div className="h-24 bg-white/5 border border-white/5 rounded-xl w-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Mockup */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 lg:-right-4 bottom-[10%] w-[45%] max-w-[220px] glass backdrop-blur-3xl border border-white/30 rounded-[2rem] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] z-20 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none"
            >
              <div className="bg-slate-900/90 rounded-[1.5rem] p-4 h-full border border-white/5">
                <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                  <div className="w-20 h-4 bg-white/10 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 w-full bg-white-5 border border-white/10 rounded-xl p-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400/20 to-teal-400/20"></div>
                      <div className="space-y-1 flex-1">
                        <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                        <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[5%] right-[10%] w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] z-30 bg-blue-500/10 backdrop-blur-xl"
            >
              <Calendar className="w-6 h-6 text-blue-400" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[25%] -left-[5%] w-16 h-16 glass rounded-2xl flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(20,184,166,0.3)] z-30 bg-teal-500/10 backdrop-blur-xl"
            >
              <CheckCircle2 className="w-8 h-8 text-teal-400" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-[5%] right-[30%] w-12 h-12 glass rounded-full flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(139,92,246,0.3)] z-30 bg-purple-500/10 backdrop-blur-xl relative"
            >
              <Bell className="w-5 h-5 text-purple-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-900"></div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
