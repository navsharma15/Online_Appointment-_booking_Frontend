import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Lock, CheckCircle2, ArrowRight, Github, Chrome, Eye, EyeOff, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 lg:p-8 overflow-hidden bg-slate-950">
      {/* Background Bokeh Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-20%] w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[140px] mix-blend-screen animate-pulse duration-[7000ms]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] mix-blend-screen animate-pulse delay-2000 duration-[7000ms]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1200px] relative z-10 grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-slate-900/40 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        {/* Left Side: Pure Visual & Animation Experience */}
        <div className="hidden lg:flex relative overflow-hidden bg-slate-950 border-r border-white/5">
          {/* Main Computer Visual with subtle animation */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Technology Workspace" 
              className="w-full h-full object-cover mix-blend-overlay brightness-40"
            />
            
            {/* Project Title "On Screen" Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute top-[42%] left-[48%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="relative group">
                {/* Screen Glow */}
                <div className="absolute -inset-4 bg-teal-500/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Text styled as Screen UI */}
                <h3 className="relative text-lg md:text-xl font-black tracking-tight text-white/40 font-mono uppercase italic border-y border-white/5 py-1 px-4 backdrop-blur-[2px] leading-tight text-center">
                   Connecting Care <br/> 
                   <span className="text-white/60 tracking-widest">With Precision</span>
                </h3>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Layered Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-teal-500/20 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80 z-0"></div>

          {/* Sophisticated Floating Animation System */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

            {/* Main Pulsing Glows */}
            <motion.div 
              animate={{ 
                x: [0, -40, 0], 
                y: [0, 40, 0],
                scale: [1, 1.25, 1]
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-teal-500/20 blur-[120px] rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ 
                x: [0, 50, 0], 
                y: [0, -50, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/20 blur-[130px] rounded-full"
            ></motion.div>

            {/* Floating Subtle Tech Icons (No text) */}
            <motion.div 
              animate={{ y: [-20, 20, -20], rotate: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-[15%] p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md opacity-30 shadow-2xl transition-all"
            >
              <User className="w-10 h-10 text-teal-400" />
            </motion.div>

            <motion.div 
              animate={{ y: [25, -25, 25], rotate: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-[15%] p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md opacity-30 shadow-2xl transition-all"
            >
              <CheckCircle2 className="w-10 h-10 text-blue-400" />
            </motion.div>

            {/* Central Animated Core */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-full border border-teal-500/10 bg-teal-500/5 backdrop-blur-3xl"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-teal-500/30 to-blue-500/30 animate-pulse flex items-center justify-center">
                 <Sparkles className="w-14 h-14 text-white/40 animate-spin-slow" />
              </div>
            </motion.div>

            {/* Data Stream Visualizer (Equalizer) */}
            <div className="absolute bottom-16 right-16 flex items-end gap-2 opacity-30">
               {[...Array(15)].map((_, i) => (
                 <motion.div 
                    key={i}
                    animate={{ height: [10, Math.random() * 50 + 10, 10] }}
                    transition={{ duration: 1.2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 bg-gradient-to-t from-teal-500 to-blue-500 rounded-full"
                 />
               ))}
            </div>
          </div>

          {/* Minimal Branding (Icon Only) */}
          <div className="relative z-20 w-full p-16 flex flex-col justify-between h-full bg-transparent">
            <div>
              <Link to="/" className="inline-flex items-center group">
                <motion.div 
                   whileHover={{ scale: 1.15, rotate: -8 }}
                   className="w-16 h-16 rounded-[1.8rem] bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center p-[1px] shadow-2xl shadow-teal-500/20"
                >
                  <div className="w-full h-full bg-slate-900 rounded-[1.7rem] flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col bg-slate-900/40 backdrop-blur-3xl overflow-y-auto">

          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-10 group md:self-start">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[10px]">Back To Home</span>
          </Link>

          <div className="mb-10 lg:hidden flex justify-center">
             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Create Professional Workspace</h1>
            <p className="text-slate-400 text-sm italic leading-relaxed">"Start your journey towards a more organized practice today."</p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-5 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  placeholder="john@hospital.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Security Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-6 bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="flex items-center h-5">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 rounded border-white/10 bg-slate-900 text-teal-500 focus:ring-teal-500/50 focus:ring-offset-0 transition-all cursor-pointer"
                />
              </div>
              <label htmlFor="terms" className="text-[11px] text-slate-500 cursor-pointer select-none leading-relaxed">
                I agree to the <a href="#" className="underline text-slate-300 hover:text-white transition-colors">Terms of Service</a> and confirm that I have read the <a href="#" className="underline text-slate-300 hover:text-white transition-colors">Privacy Policy</a> about data encryption.
              </label>
            </div>

            <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white font-bold py-4 rounded-2xl shadow-xl shadow-teal-900/10 transform transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group">
              Complete Onboarding
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative z-10 px-4 bg-transparent text-slate-600 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Secure Provider Portal</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Github</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
              <Chrome className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Already verified? <Link to="/login" className="text-teal-400 font-bold hover:underline underline-offset-4 ml-1">Sign In to Dashboard</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;

