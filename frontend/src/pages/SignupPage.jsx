import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, UserPlus, Sparkles, CheckCircle } from 'lucide-react';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } }
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const requirements = [
    { test: (p) => p.length >= 8,                    label: 'At least 8 characters' },
    { test: (p) => /[A-Z]/.test(p) && /[a-z]/.test(p), label: 'Upper & lowercase letters' },
    { test: (p) => /[0-9]/.test(p),                  label: 'One number'             },
    { test: (p) => /[!@#$%^&*]/.test(p),             label: 'One special character'  },
];

const SignupPage = () => {
    const [form, setForm]       = useState({ name: '', email: '', password: '' });
    const [showPw, setShowPw]   = useState(false);
    const [errors, setErrors]   = useState({});
    const [loading, setLoading] = useState(false);
    const { login }  = useAuth();
    const navigate   = useNavigate();

    const set = (k) => (e) => {
        setForm(f => ({ ...f, [k]: e.target.value }));
        if (errors[k]) setErrors(e => ({ ...e, [k]: '' }));
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim() || form.name.trim().length < 2)    errs.name     = 'Name must be at least 2 characters';
        if (!/^\S+@\S+\.\S+$/.test(form.email))                  errs.email    = 'Please enter a valid email';
        if (requirements.some(r => !r.test(form.password)))       errs.password = 'Password does not meet all requirements';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        try {
            const { data } = await API.post('/auth/register', form);
            login(data);
            toast.success('Account created! 🎉');
            navigate('/complete-profile');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const pwStrength = requirements.filter(r => r.test(form.password)).length;
    const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="w-full max-w-md">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="relative rounded-3xl border border-white/[0.07] overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(40px)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
                    <div className="h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-violet-500 relative z-10" />

                    <div className="p-10">
                        {/* Header */}
                        <motion.div variants={item} className="flex flex-col items-center mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-5 relative group">
                                <div className="absolute inset-0 rounded-2xl bg-emerald-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <UserPlus size={24} className="text-white relative z-10" />
                            </div>
                            <h1 className="text-3xl font-black tracking-tight text-white">Create account</h1>
                            <p className="text-white/40 text-sm mt-2 font-medium">Join thousands of users on apoboi</p>
                        </motion.div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <motion.div variants={item} className="space-y-2">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Alexander Sterling"
                                        className={`input-field pl-12 ${errors.name ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                        value={form.name}
                                        onChange={set('name')}
                                    />
                                </div>
                                {errors.name && <p className="text-red-400 text-xs font-medium ml-1">{errors.name}</p>}
                            </motion.div>

                            {/* Email */}
                            <motion.div variants={item} className="space-y-2">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className={`input-field pl-12 ${errors.email ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                        value={form.email}
                                        onChange={set('email')}
                                    />
                                </div>
                                {errors.email && <p className="text-red-400 text-xs font-medium ml-1">{errors.email}</p>}
                            </motion.div>

                            {/* Password */}
                            <motion.div variants={item} className="space-y-2">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">Password</label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                    <input
                                        type={showPw ? 'text' : 'password'}
                                        required
                                        placeholder="••••••••"
                                        className={`input-field pl-12 pr-12 ${errors.password ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                        value={form.password}
                                        onChange={set('password')}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPw(v => !v)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                                    >
                                        {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>

                                {/* Strength bar */}
                                {form.password && (
                                    <div className="space-y-2 pt-1">
                                        <div className="flex gap-1.5">
                                            {[0, 1, 2, 3].map(i => (
                                                <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < pwStrength ? strengthColors[pwStrength - 1] : 'bg-white/10'}`} />
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-1.5">
                                            {requirements.map(r => (
                                                <div key={r.label} className="flex items-center gap-1.5">
                                                    <CheckCircle size={11} className={r.test(form.password) ? 'text-emerald-400' : 'text-white/15'} />
                                                    <span className={`text-[11px] font-medium ${r.test(form.password) ? 'text-emerald-400' : 'text-white/30'}`}>
                                                        {r.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {errors.password && <p className="text-red-400 text-xs font-medium ml-1">{errors.password}</p>}
                            </motion.div>

                            {/* Submit */}
                            <motion.div variants={item} className="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary w-full py-4 text-base gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ background: 'linear-gradient(135deg, #10b981, #6366f1)' }}
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <> <Sparkles size={20} /> Create My Account </>
                                    )}
                                </button>
                            </motion.div>
                        </form>

                        <motion.p variants={item} className="text-center text-sm text-white/30 mt-8 font-medium">
                            Already have an account?{' '}
                            <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                                Sign in
                            </Link>
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignupPage;
