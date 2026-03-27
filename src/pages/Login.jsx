import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Lock, ArrowRight, Github, Chrome, Eye, EyeOff, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Artificial delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));

    const result = login(email, password);
    
    if (result.success) {
      if (result.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } else {
      setError(result.message);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 lg:p-8 overflow-hidden bg-slate-950">
      {/* Background Bokeh Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000 duration-[5000ms]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1100px] relative z-10 grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-slate-900/40 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        {/* Left Side: Pure Visual & Animation Experience */}
        <div className="hidden lg:flex relative overflow-hidden bg-slate-950 border-r border-white/5">
          {/* Main Computer Visual with subtle animation */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Workspace" 
              className="w-full h-full object-cover mix-blend-luminosity brightness-50"
            />
          </motion.div>
          
          {/* Layered Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/40 to-blue-500/20 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80 z-0"></div>

          {/* Sophisticated Floating Animation System */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

            {/* Main Pulsing Glows */}
            <motion.div 
              animate={{ 
                x: [0, 40, 0], 
                y: [0, -40, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 blur-[120px] rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ 
                x: [0, -50, 0], 
                y: [0, 50, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 blur-[130px] rounded-full"
            ></motion.div>

            {/* Floating Subtle Tech Icons (No text) */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-[15%] p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md opacity-30 shadow-2xl"
            >
              <Lock className="w-10 h-10 text-blue-400" />
            </motion.div>

            <motion.div 
              animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-[15%] p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md opacity-30 shadow-2xl"
            >
              <Chrome className="w-10 h-10 text-indigo-400" />
            </motion.div>

            {/* Central Animated Core */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-48 h-48 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center p-8">
                 <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 animate-pulse flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white/40 animate-spin-slow" />
                 </div>
              </div>
            </motion.div>

            {/* Visual Equalizer / Data Streams */}
            <div className="absolute bottom-12 left-12 flex items-end gap-1.5 opacity-40">
               {[...Array(12)].map((_, i) => (
                 <motion.div 
                    key={i}
                    animate={{ height: [8, Math.random() * 40 + 10, 8] }}
                    transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-full"
                 />
               ))}
            </div>
          </div>

          {/* Branding Icon Only (No text as requested) */}
          <div className="relative z-20 w-full p-16 flex flex-col justify-between h-full bg-transparent">
            <div>
              <Link to="/" className="inline-flex items-center group">
                <motion.div 
                   whileHover={{ scale: 1.1, rotate: 5 }}
                   className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center p-[1px] shadow-2xl shadow-blue-500/20"
                >
                  <div className="w-full h-full bg-slate-900 rounded-[1.4rem] flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Authentication Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col bg-slate-900/40 backdrop-blur-3xl overflow-y-auto">




          {/* Back Button with subtle styling */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-10 group md:self-start">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[10px]">Back To Home</span>
          </Link>

          <div className="mb-10 lg:hidden flex flex-col items-center">
             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-[1px] mb-4">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Login Portal</h1>
            <p className="text-slate-400 text-sm">Welcome back! Access your professional dashboard.</p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Work Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-medium text-slate-300">Secret Password</label>
                <a href="#" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">Forgot Access?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-purple-400 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
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

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-900/20 transform transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Connect to Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative z-10 px-4 bg-transparent text-slate-500 text-[10px] font-bold uppercase tracking-widest">Enterprise Sign In</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Github</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
              <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Awaiting registration? <Link to="/signup" className="text-blue-400 font-bold hover:underline underline-offset-4 ml-1">Request Workspace Access</Link>
          </p>

          {/* Quick Access Note */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <div className="flex flex-wrap gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
              <div className="flex flex-col">
                <span className="text-blue-900 mb-1">Demo Patient:</span>
                <span className="text-slate-500">user@gmail.com / 1234</span>
              </div>
              <div className="flex flex-col">
                <span className="text-purple-900 mb-1">Demo Specialist:</span>
                <span className="text-slate-500">admin@gmail.com / admin123</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

