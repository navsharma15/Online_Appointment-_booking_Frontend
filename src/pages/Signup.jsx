import React, { useState } from 'react';
import { Calendar, User, Mail, Lock, ArrowRight, Eye, EyeOff, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-950">
      {/* Back Home Button on Top */}
      <Link 
        to="/" 
        className="mb-4 flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-slate-900 px-4 py-2 rounded-lg border border-white/5 shadow-sm"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-xl shadow-2xl p-6">
        
        {/* Logo and Titles */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center mb-3">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">Create Workspace</h1>
          <p className="text-slate-400 text-xs mt-1">Start your journey today.</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-300">
            <div className="space-y-1">
              <label>First Name</label>
              <input 
                type="text" 
                placeholder="John" 
                className="w-full bg-slate-800 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="space-y-1">
              <label>Last Name</label>
              <input 
                type="text" 
                placeholder="Doe" 
                className="w-full bg-slate-800 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-300">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </div>
              <input 
                type="email" 
                placeholder="you@hospital.com" 
                className="w-full bg-slate-800 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="space-y-1 text-xs font-medium text-slate-300">
            <label>Security Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••" 
                className="w-full bg-slate-800 border border-white/10 rounded-lg py-2 pl-10 pr-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2 mt-2 p-3 bg-slate-800/50 rounded-lg border border-white/5">
            <input 
              type="checkbox" 
              id="terms" 
              className="mt-0.5 w-3.5 h-3.5 rounded border-white/10 bg-slate-900 text-teal-500 focus:ring-teal-500 focus:ring-offset-0"
            />
            <label htmlFor="terms" className="text-[10px] text-slate-500 cursor-pointer select-none leading-relaxed">
              I agree to the <a href="#" className="underline text-slate-400">Terms of Service</a> and confirm our <a href="#" className="underline text-slate-400">Privacy Policy</a> about data.
            </label>
          </div>

          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors mt-4 text-sm shadow-lg shadow-teal-900/10 group">
            Complete Onboarding
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="text-xs text-slate-400">
            Already verified? <Link to="/login" className="text-teal-400 font-bold hover:underline ml-1">Sign In</Link>
          </p>
        </div>

        {/* Demo Signup Hint */}
        <div className="mt-6 p-3 bg-teal-500/5 rounded-lg border border-teal-500/10">
          <p className="text-[10px] font-bold text-teal-400 uppercase tracking-wider mb-2">Demo Hints:</p>
          <div className="grid grid-cols-2 gap-4 text-[10px] text-slate-400">
            <div>
              <p className="text-slate-300 font-bold underline mb-1">User:</p>
              <p>name@gmail.com</p>
              <p>Pass: 1234</p>
            </div>
            <div>
              <p className="text-slate-300 font-bold underline mb-1">Admin:</p>
              <p>adminname@gmail.com</p>
              <p>Pass: 1234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
