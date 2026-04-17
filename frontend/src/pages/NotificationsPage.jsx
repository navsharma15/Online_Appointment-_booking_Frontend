import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCheck, Loader2, Inbox, BellRing, BellOff } from 'lucide-react';
import API from '../services/api';
import { toast } from 'react-toastify';

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show:   { opacity: 1, y: 0,  transition: { duration: 0.4, ease: 'easeOut' } },
    exit:   { opacity: 0, x: 30, transition: { duration: 0.25 } },
};

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading]             = useState(true);
    const [filter, setFilter]               = useState('all'); // 'all' | 'unread' | 'read'

    useEffect(() => { fetchNotifications(); }, []);

    const fetchNotifications = async () => {
        setLoading(true);
        try {
            const { data } = await API.get('/notifications');
            setNotifications(data);
        } catch {
            toast.error('Failed to load notifications');
        } finally {
            setLoading(false);
        }
    };

    const markRead = async (id) => {
        try {
            await API.put(`/notifications/${id}`);
            setNotifications(ns =>
                ns.map(n => n._id === id ? { ...n, read: true } : n)
            );
        } catch {
            toast.error('Failed to mark as read');
        }
    };

    const markAllRead = async () => {
        const unread = notifications.filter(n => !n.read);
        try {
            await Promise.all(unread.map(n => API.put(`/notifications/${n._id}`)));
            setNotifications(ns => ns.map(n => ({ ...n, read: true })));
            toast.success('All notifications marked as read');
        } catch {
            toast.error('Something went wrong');
        }
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const filtered = notifications.filter(n => {
        if (filter === 'unread') return !n.read;
        if (filter === 'read')   return n.read;
        return true;
    });

    const formatTime = (dateStr) => {
        const d     = new Date(dateStr);
        const now   = new Date();
        const diffS = Math.floor((now - d) / 1000);
        if (diffS < 60)      return 'Just now';
        if (diffS < 3600)    return `${Math.floor(diffS / 60)}m ago`;
        if (diffS < 86400)   return `${Math.floor(diffS / 3600)}h ago`;
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10">

            {/* ── Header ── */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="section-label mb-4 inline-flex">Notification Center</span>
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-4">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                            {unreadCount > 0
                                ? <><span className="text-gradient leading-none">{unreadCount} New</span><br />Alerts</>
                                : <>All <span className="text-white/20">Clear</span></>
                            }
                        </h1>
                        <p className="text-white/40 mt-2 font-medium">
                            {notifications.length} total · {unreadCount} unread
                        </p>
                    </div>

                    {unreadCount > 0 && (
                        <button
                            onClick={markAllRead}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.08] text-sm font-semibold transition-all duration-300"
                        >
                            <CheckCheck size={16} />
                            Mark all as read
                        </button>
                    )}
                </div>
            </motion.div>

            {/* ── Filter Tabs ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] w-fit"
            >
                {[
                    { id: 'all',    label: 'All',    icon: Bell    },
                    { id: 'unread', label: 'Unread', icon: BellRing },
                    { id: 'read',   label: 'Read',   icon: BellOff  },
                ].map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setFilter(id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            filter === id
                                ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                                : 'text-white/40 hover:text-white'
                        }`}
                    >
                        <Icon size={15} />
                        <span>{label}</span>
                        {id === 'unread' && unreadCount > 0 && (
                            <span className="ml-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/15">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                ))}
            </motion.div>

            {/* ── Content ── */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-40 gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
                    <p className="text-white/30 text-sm font-medium">Loading notifications...</p>
                </div>
            ) : filtered.length === 0 ? (
                <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-40 gap-4"
                >
                    <div className="w-24 h-24 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-6 relative group">
                        <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Inbox size={40} className="text-white/10 group-hover:text-indigo-500/30 transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white/50">
                        {filter === 'unread' ? 'All caught up!' : 'Nothing here'}
                    </h3>
                    <p className="text-white/25 text-sm text-center max-w-xs">
                        {filter === 'unread'
                            ? 'You have no unread notifications right now.'
                            : 'No notifications in this category yet.'}
                    </p>
                </motion.div>
            ) : (
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((n) => (
                            <motion.div
                                key={n._id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                layout
                            >
                                <div className={`relative flex items-start gap-5 p-6 rounded-2xl border transition-all duration-500 ${
                                    n.read
                                        ? 'bg-white/[0.01] border-white/[0.04] opacity-50'
                                        : 'bg-white/[0.03] border-indigo-500/15 shadow-lg shadow-indigo-500/5'
                                }`}>
                                    {/* Unread dot */}
                                    {!n.read && (
                                        <span className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 animate-pulse" />
                                    )}

                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                                        n.read
                                            ? 'bg-white/[0.04] text-white/20'
                                            : 'bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-400 border border-indigo-500/15'
                                    }`}>
                                        <Bell size={20} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0 pr-4">
                                        <p className={`leading-snug font-semibold ${n.read ? 'text-white/40' : 'text-white'}`}>
                                            {n.message}
                                        </p>
                                        <p className="text-xs text-white/25 font-medium mt-2">
                                            {formatTime(n.createdAt)}
                                        </p>
                                    </div>

                                    {/* Mark read button */}
                                    {!n.read && (
                                        <button
                                            onClick={() => markRead(n._id)}
                                            className="shrink-0 self-center p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/20 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300"
                                            title="Mark as read"
                                        >
                                            <CheckCheck size={17} />
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default NotificationsPage;
