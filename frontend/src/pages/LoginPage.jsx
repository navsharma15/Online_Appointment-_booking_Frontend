import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, Sparkles } from 'lucide-react';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const LoginPage = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [showPw, setShowPw]   = useState(false);
    const [loading, setLoading] = useState(false);
    const { login }  = useAuth();
    const navigate   = useNavigate();

    const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await API.post('/auth/login', form);
            login(data);
            toast.success('Welcome back! 👋');
            navigate(data.isProfileComplete ? '/dashboard' : '/complete-profile');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="w-full max-w-md">
                {/* Card */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="relative rounded-3xl border border-white/[0.07] overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(40px)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 pointer-events-none" />
                    <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 relative z-10" />

                    <div className="p-10">
                        {/* Logo & Title */}
                        <motion.div variants={item} className="flex flex-col items-center mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-5 relative group">
                                <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <Sparkles size={24} className="text-white relative z-10" />
                            </div>
                            <h1 className="text-3xl font-black tracking-tight text-white">Welcome back</h1>
                            <p className="text-white/40 text-sm mt-2 font-medium">Sign in to continue to apoboi</p>
                        </motion.div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email */}
                            <motion.div variants={item} className="space-y-2">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="input-field pl-12"
                                        value={form.email}
                                        onChange={set('email')}
                                    />
                                </div>
                            </motion.div>

                            {/* Password */}
                            <motion.div variants={item} className="space-y-2">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                    <input
                                        type={showPw ? 'text' : 'password'}
                                        required
                                        placeholder="••••••••"
                                        className="input-field pl-12 pr-12"
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
                            </motion.div>

                            {/* Submit */}
                            <motion.div variants={item} className="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary w-full py-4 text-base gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <> <LogIn size={20} /> Sign In </>
                                    )}
                                </button>
                            </motion.div>
                        </form>

                        {/* Footer */}
                        <motion.p variants={item} className="text-center text-sm text-white/30 mt-8 font-medium">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                                Create one free
                            </Link>
                        </motion.p>
                    </div>
                </motion.div>

                {/* Below card: subtle text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-center text-xs text-white/15 mt-6 font-medium"
                >
                    By continuing, you agree to apoboi's Terms & Privacy Policy.
                </motion.p>
            </div>
        </div>
    );
};

export default LoginPage;
