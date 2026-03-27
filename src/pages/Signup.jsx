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
        {/* Left Side: Brand Story */}
        <div className="hidden lg:flex relative overflow-hidden bg-slate-950 border-r border-white/5">
          {/* Main Visual Image with subtle zoom */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Medical Team" 
              className="w-full h-full object-cover mix-blend-overlay animate-pulse-slow"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-teal-500/10 z-0"></div>

          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <motion.div 
              animate={{ 
                x: [0, -20, 0], 
                y: [0, 20, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 left-1/4 w-40 h-40 bg-teal-500/10 blur-[100px] rounded-full"
            ></motion.div>

            {/* Floating Specialist Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute top-[30%] right-[10%] p-4 glass-card bg-white/5 border-white/10 backdrop-blur-md flex items-center gap-3 shadow-2xl rotate-2"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Provider Network</p>
                <p className="text-white text-xs font-bold">+500 Specialists Joined</p>
              </div>
            </motion.div>

            {/* Floating Security Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="absolute bottom-[20%] left-[15%] p-3 glass-card bg-white/5 border-white/10 backdrop-blur-md flex items-center gap-3 shadow-2xl -rotate-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-white text-[10px] font-bold">Encrypted Data Access</p>
            </motion.div>
          </div>

          <div className="relative z-20 w-full p-16 flex flex-col justify-between h-full">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 text-white group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center p-[1px] shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all"
                >
                  <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <span className="text-2xl font-bold tracking-tight">DocPortal</span>
              </Link>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                  <Sparkles className="w-3 h-3 animate-spin-slow" />
                  Free Professional Tier
                </div>
                <h2 className="text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Join the Future of <br />
                  <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Digital Care</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Smart Availability", desc: "Automated syncing with your professional calendar." },
                  { title: "Patient Portfolios", desc: "Keep track of history and preferences automatically." },
                  { title: "Team Collaboration", desc: "Coordinate across multiple departments effortlessly." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/5 border border-teal-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-tight group-hover:text-teal-400 transition-colors uppercase text-[11px] mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed max-w-[280px]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-400 text-xs font-medium">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, zIndex: 50 }}
                    className={`w-9 h-9 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden shadow-lg`}
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i+14}`} alt="user" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <span className="font-semibold tracking-tight text-[11px] uppercase text-slate-500">Join 5,000+ medical professionals already onboarded.</span>
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

