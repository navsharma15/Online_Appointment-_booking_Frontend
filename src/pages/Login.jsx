import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Lock, ArrowRight, Github, Chrome, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-950">
      {/* Background Bokeh Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000 duration-[5000ms]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px] relative z-10"
      >
        {/* Back to Home Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group ml-2">
          <div className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
            <ArrowRight className="w-4 h-4 rotate-180" />
          </div>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Login Card */}
        <div className="glass-card p-8 lg:p-10 bg-slate-900/40 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-[1px] shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-6 hover:scale-110 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[13px] flex items-center justify-center backdrop-blur-sm bg-opacity-80">
                <Calendar className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400 text-sm">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-medium text-slate-300">Password</label>
                <a href="#" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">Forgot Password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-purple-400 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-0 transition-all cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer select-none">Remember for 30 days</label>
            </div>

            <button className="w-full btn-primary py-4 text-lg shadow-[0_10px_30px_rgba(59,130,246,0.3)] mt-2">
              Sign In
            </button>
          </form>

          <div className="relative my-8 text-center text-sm">
            <div className="absolute inset-0 flex items-center px-8 pointer-events-none">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative z-10 bg-slate-900/60 px-4 text-slate-500 backdrop-blur-sm">OR CONTINUE WITH</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl hover:bg-white/10 transition-all transform active:scale-95 group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Github</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl hover:bg-white/10 transition-all transform active:scale-95 group">
              <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Don't have an account? <Link to="/signup" className="text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-wider ml-1">Sign Up</Link>
          </p>
        </div>

        {/* Simple Footer under card */}
        <p className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} ApointHub. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
