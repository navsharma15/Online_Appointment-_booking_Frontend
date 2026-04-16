import React, { useState } from 'react';
import { Calendar, User, Mail, Lock, Phone, ArrowRight, Eye, EyeOff, Home, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const userData = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      password: formData.password,
      phone: formData.phone
    };

    const result = await signup(userData);

    if (result.success) {
      alert('Account created successfully! Please sign in.');
      navigate('/login');
    } else {
      setError(result.message);
    }
    setIsLoading(false);
  };

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
        <div className="flex flex-col items-center mb-6 px-10 text-center">
          <div className="relative mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Calendar className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900 shadow-sm animate-pulse"></div>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight font-outfit">
            Apoint<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Hub</span>
          </h1>
          <p className="text-slate-400 text-xs mt-1">Start your journey today.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSignup}>
          <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-300">
            <div className="space-y-1">
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John" 
                required
                className="w-full bg-slate-800 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="space-y-1">
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe" 
                required
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com" 
                required
                className="w-full bg-slate-800 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-300">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Phone className="w-4 h-4" />
              </div>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890" 
                required
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••" 
                required
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

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors mt-4 text-sm shadow-lg shadow-teal-900/10 group disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Complete Onboarding"}
            {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="text-xs text-slate-400">
            Already verified? <Link to="/login" className="text-teal-400 font-bold hover:underline ml-1">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
