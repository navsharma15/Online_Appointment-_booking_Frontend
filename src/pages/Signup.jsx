import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Lock, CheckCircle2, ArrowRight, Github, Chrome, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      {/* Background Bokeh Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[140px] mix-blend-screen animate-pulse duration-[7000ms]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] mix-blend-screen animate-pulse delay-2000 duration-[7000ms]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[500px] relative z-10"
      >
        {/* Back to Home Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group ml-2">
          <div className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
            <ArrowRight className="w-4 h-4 rotate-180" />
          </div>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Signup Card */}
        <div className="glass-card p-8 lg:p-10 bg-slate-900/40 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center p-[1px] shadow-[0_0_20px_rgba(20,184,166,0.4)] mb-6 hover:scale-110 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[13px] flex items-center justify-center backdrop-blur-sm bg-opacity-80">
                <Calendar className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-slate-400 text-sm">Join thousands of professionals scaling their business.</p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">First Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Last Name</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Work Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
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

            <div className="flex items-start gap-3 mt-4 px-1">
              <div className="flex items-center h-5">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-teal-500 focus:ring-teal-500/50 focus:ring-offset-0 transition-all cursor-pointer"
                />
              </div>
              <label htmlFor="terms" className="text-xs text-slate-400 cursor-pointer select-none leading-relaxed">
                I agree to the <a href="#" className="text-blue-400 font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 font-medium hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button className="w-full btn-primary py-4 text-lg bg-gradient-to-r from-blue-500 to-teal-500 shadow-[0_10px_30px_rgba(20,184,166,0.2)] mt-2">
              Get Started Free
            </button>
          </form>

          <div className="relative my-8 text-center text-sm">
            <div className="absolute inset-0 flex items-center px-8 pointer-events-none">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative z-10 bg-slate-900/40 px-4 text-slate-500 backdrop-blur-sm">OR SIGN UP WITH</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl hover:bg-white/10 transition-all transform active:scale-95 group">
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Github</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl hover:bg-white/10 transition-all transform active:scale-95 group">
              <Chrome className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Already have an account? <Link to="/login" className="text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-wider ml-1">Sign In</Link>
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          Powered by industry-leading security and encryption.
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
