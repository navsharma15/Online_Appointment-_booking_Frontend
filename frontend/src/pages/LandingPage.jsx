import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Users, Zap, Globe, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SpotlightCard from '../components/SpotlightCard';

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};
const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stats = [
    { value: '10K+', label: 'Sessions Booked' },
    { value: '500+', label: 'Verified Experts' },
    { value: '50+', label: 'Specializations' },
    { value: '99%', label: 'Satisfaction Rate' },
];

const features = [
    {
        icon: Globe,
        color: 'from-blue-500 to-cyan-500',
        glow: 'rgba(59,130,246,0.2)',
        title: 'Global Expert Access',
        desc: 'Connect with world-class professionals across all sectors — instantly, from anywhere.',
        span: 'md:col-span-8',
    },
    {
        icon: Zap,
        color: 'from-amber-500 to-orange-500',
        glow: 'rgba(245,158,11,0.2)',
        title: 'Real-Time Booking',
        desc: 'Instant confirmation and zero-friction scheduling.',
        span: 'md:col-span-4',
    },
    {
        icon: Shield,
        color: 'from-emerald-500 to-teal-500',
        glow: 'rgba(16,185,129,0.2)',
        title: 'Verified & Secure',
        desc: 'Every expert is manually verified. Your data is always protected.',
        span: 'md:col-span-4',
    },
    {
        icon: Users,
        color: 'from-violet-500 to-purple-600',
        glow: 'rgba(139,92,246,0.2)',
        title: '10,000+ Success Stories',
        desc: 'Join thousands of users who found their perfect expert match through apoboi.',
        span: 'md:col-span-8',
    },
];

const LandingPage = () => {
    const { user } = useAuth();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <div>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
            >
                {/* Decorative ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[900px] h-[900px] rounded-full border border-indigo-500/5 animate-spin-slow" />
                    <div className="absolute w-[650px] h-[650px] rounded-full border border-violet-500/5" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
                </div>

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    {/* Eyebrow */}
                    <motion.div variants={item} className="flex justify-center mb-8">
                        <span className="section-label">
                            <Sparkles size={13} />
                            Next-Generation Appointment Platform
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={item}
                        className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
                    >
                        Book the World's{' '}
                        <span className="text-gradient">Best Experts.</span>
                        <br />
                        <span className="text-white/25">Effortlessly.</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-lg md:text-2xl text-white/40 font-medium leading-relaxed max-w-2xl mx-auto mb-14"
                    >
                        apoboi connects you with verified professionals — doctors, lawyers, engineers, and consultants — in one beautiful, unified platform.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
                        {user ? (
                            <Link to="/dashboard" className="btn-primary text-lg px-10 py-4 gap-3">
                                Open Dashboard <ArrowRight size={22} />
                            </Link>
                        ) : (
                            <>
                                <Link to="/signup" className="btn-primary text-lg px-10 py-4 gap-3">
                                    Get Started Free <ArrowRight size={22} />
                                </Link>
                                <Link to="/login" className="btn-ghost text-lg px-10 py-4">
                                    Sign In
                                </Link>
                            </>
                        )}
                    </motion.div>

                    {/* Social proof */}
                    <motion.div variants={item} className="flex justify-center mt-12">
                        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]">
                            <div className="flex -space-x-2">
                                {['#6366f1','#8b5cf6','#ec4899','#f59e0b'].map((c, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080812] flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                                <p className="text-xs text-white/40 font-medium">Trusted by 10,000+ users</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── CATEGORIES ───────────────────────────────────────── */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-label mb-6 inline-flex">Explore Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-6">
                            Find the Right{' '}
                            <span className="text-gradient">Professional.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Doctor', icon: '🩺', color: 'from-rose-500/20 to-rose-600/20', border: 'border-rose-500/20', text: 'text-rose-400' },
                            { name: 'Lawyer', icon: '⚖️', color: 'from-amber-500/20 to-amber-600/20', border: 'border-amber-500/20', text: 'text-amber-400' },
                            { name: 'Expert', icon: '🎓', color: 'from-indigo-500/20 to-indigo-600/20', border: 'border-indigo-500/20', text: 'text-indigo-400' },
                            { name: 'Other', icon: '✨', color: 'from-emerald-500/20 to-emerald-600/20', border: 'border-emerald-500/20', text: 'text-emerald-400' },
                        ].map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link 
                                    to={`/dashboard?category=${cat.name}`}
                                    className={`group relative flex flex-col items-center p-10 rounded-[2.5rem] bg-gradient-to-br ${cat.color} ${cat.border} border backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all duration-500 overflow-hidden`}
                                >
                                    <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors" />
                                    <span className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{cat.icon}</span>
                                    <h3 className={`text-2xl font-black tracking-tight ${cat.text}`}>{cat.name}</h3>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest mt-2 group-hover:text-white/50 transition-colors">Browse All</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ────────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map(({ value, label }) => (
                        <div key={label} className="card-glass p-8 text-center">
                            <p className="text-4xl md:text-5xl font-black text-gradient mb-2">{value}</p>
                            <p className="text-sm text-white/40 font-medium">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ── BENTO FEATURES ───────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-label mb-6 inline-flex">Why apoboi?</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-6">
                        Everything you need,{' '}
                        <span className="text-gradient">in one place.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-5"
                >
                    {features.map(({ icon: Icon, color, glow, title, desc, span }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${span} min-h-[280px]`}
                        >
                            <SpotlightCard className="h-full">
                                <div className="relative h-full p-10 flex flex-col justify-between overflow-hidden">
                                    {/* BG glow */}
                                    <div
                                        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                                        style={{ background: glow }}
                                    />
                                    <div>
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-8 shadow-lg`}>
                                            <Icon size={26} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">{title}</h3>
                                        <p className="text-white/40 font-medium leading-relaxed text-base">{desc}</p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── CTA BANNER ───────────────────────────────────────── */}
            {!user && (
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden p-16 text-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 100%)',
                            border: '1px solid rgba(99,102,241,0.2)',
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                                Ready to book your first session?
                            </h2>
                            <p className="text-white/40 text-lg font-medium mb-10 max-w-xl mx-auto">
                                Join thousands of users connecting with experts on apoboi every day.
                            </p>
                            <Link to="/signup" className="btn-primary text-lg px-12 py-5 gap-3 inline-flex">
                                Start for Free <ArrowRight size={22} />
                            </Link>
                        </div>
                    </motion.div>
                </section>
            )}
        </div>
    );
};

export default LandingPage;
