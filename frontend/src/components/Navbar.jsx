import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Bell, Calendar, LayoutGrid, Sparkles, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    const navLinks = user ? [
        { name: 'Discover', path: '/dashboard', icon: LayoutGrid },
        { name: 'Sessions', path: '/appointments', icon: Calendar },
        { name: 'Alerts', path: '/notifications', icon: Bell },
    ] : [];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-[#080812]/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 group-hover:scale-110 transition-all duration-300">
                            <Sparkles size={18} className="text-white" />
                        </div>
                        <span className="text-lg font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                            apoboi
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                        {navLinks.map(({ name, path, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                    isActive(path)
                                        ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                                        : 'text-white/50 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <Icon size={16} />
                                {name}
                            </Link>
                        ))}
                        {!user && (
                            <>
                                <Link to="/login" className="px-4 py-2 rounded-xl text-sm font-semibold text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="ml-1 px-5 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300">
                                    Get Started
                                </Link>
                            </>
                        )}
                    </nav>

                    {/* Desktop Right Actions */}
                    {user && (
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                to="/profile"
                                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.08] transition-all duration-300"
                            >
                                <div className="w-7 h-7 rounded-lg overflow-hidden border border-white/10">
                                    {user.profileImage ? (
                                        <img src={user.profileImage} alt="profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                                            <User size={14} className="text-white" />
                                        </div>
                                    )}
                                </div>
                                <span className="text-sm font-semibold text-white/70">{user.name?.split(' ')[0]}</span>
                            </Link>
                            <button
                                onClick={logout}
                                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/30 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
                                title="Sign out"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/60 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-0 right-0 z-40 p-4 bg-[#080812]/95 backdrop-blur-2xl border-b border-white/5"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map(({ name, path, icon: Icon }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                                        isActive(path)
                                            ? 'bg-gradient-to-r from-indigo-500/20 to-violet-600/20 text-indigo-300 border border-indigo-500/20'
                                            : 'text-white/50 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <Icon size={18} />
                                    {name}
                                </Link>
                            ))}
                            {!user && (
                                <>
                                    <Link to="/login" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/50 hover:text-white hover:bg-white/5 transition-all">Sign In</Link>
                                    <Link to="/signup" className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 to-violet-600 text-white">Get Started</Link>
                                </>
                            )}
                            {user && (
                                <button onClick={logout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-500/10 transition-all">
                                    <LogOut size={18} /> Sign Out
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
