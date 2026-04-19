import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Clock, CheckCircle2, XCircle, Loader2,
    ArrowDownCircle, ArrowUpCircle, Inbox, UserCheck
} from 'lucide-react';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const statusConfig = {
    pending:  { label: 'Pending',   classes: 'badge badge-yellow'  },
    accepted: { label: 'Confirmed', classes: 'badge badge-green'   },
    rejected: { label: 'Declined',  classes: 'badge badge-red'     },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit:   { opacity: 0, x: -20, transition: { duration: 0.25 } },
};

const AppointmentsPage = () => {
    const { user }  = useAuth();
    const [appointments, setAppointments] = useState([]);
    const [loading,      setLoading]      = useState(true);
    const [respondingId, setRespondingId] = useState(null);
    const [tab, setTab] = useState('all'); // 'all' | 'incoming' | 'outgoing'

    useEffect(() => { fetchAppointments(); }, []);

    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const { data } = await API.get('/appointments');
            setAppointments(data);
        } catch {
            toast.error('Failed to load sessions');
        } finally {
            setLoading(false);
        }
    };

    const handleResponse = async (id, status) => {
        setRespondingId(id);
        try {
            await API.post('/appointments/respond', { appointmentId: id, status });
            toast.success(status === 'accepted' ? 'Session confirmed! 🎉' : 'Session declined');
            fetchAppointments();
        } catch {
            toast.error('Action failed — please retry');
        } finally {
            setRespondingId(null);
        }
    };

    const filtered = appointments.filter(a => {
        if (tab === 'incoming') return a.receiverId._id === user._id;
        if (tab === 'outgoing') return a.senderId._id   === user._id;
        return true;
    });

    const incoming = appointments.filter(a => a.receiverId._id === user._id);
    const outgoing = appointments.filter(a => a.senderId._id   === user._id);
    const pending  = incoming.filter(a => a.status === 'pending').length;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">

            {/* ── Header ── */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="section-label mb-4 inline-flex">Appointment Manager</span>
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-4">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                            My <span className="text-gradient">Sessions</span>
                        </h1>
                        <p className="text-white/40 mt-2 font-medium">
                            {appointments.length} total &nbsp;·&nbsp;
                            {pending > 0
                                ? <span className="text-amber-400 font-semibold">{pending} awaiting your response</span>
                                : <span>no pending requests</span>
                            }
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* ── Stat chips ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-3 gap-4"
            >
                {[
                    { label: 'Total',    value: appointments.length, color: 'from-indigo-600/10 to-violet-600/10', border: 'border-indigo-500/20', glow: 'rgba(99,102,241,0.1)' },
                    { label: 'Incoming', value: incoming.length,     color: 'from-rose-600/10 to-orange-600/10',   border: 'border-rose-500/20',   glow: 'rgba(244,63,94,0.1)'  },
                    { label: 'Outgoing', value: outgoing.length,     color: 'from-emerald-600/10 to-teal-600/10',  border: 'border-emerald-500/20', glow: 'rgba(16,185,129,0.1)' },
                ].map(({ label, value, color, border, glow }) => (
                    <div key={label} className={`relative group p-6 rounded-[2rem] bg-gradient-to-br ${color} border ${border} overflow-hidden backdrop-blur-md`}>
                        <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-50" style={{ background: glow }} />
                        <p className="text-4xl font-black text-white relative z-10 tracking-tighter transition-transform group-hover:scale-110 duration-500">{value}</p>
                        <p className="text-[10px] text-white/40 font-bold mt-2 uppercase tracking-[0.2em] relative z-10">{label}</p>
                    </div>
                ))}
            </motion.div>

            {/* ── Tabs ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] w-fit"
            >
                {[
                    { id: 'all',      label: 'All Sessions', icon: Calendar         },
                    { id: 'incoming', label: 'Incoming',     icon: ArrowDownCircle  },
                    { id: 'outgoing', label: 'Outgoing',     icon: ArrowUpCircle    },
                ].map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            tab === id
                                ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                                : 'text-white/40 hover:text-white'
                        }`}
                    >
                        <Icon size={15} />
                        <span className="hidden sm:block">{label}</span>
                    </button>
                ))}
            </motion.div>

            {/* ── Content ── */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-40 gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
                    <p className="text-white/30 text-sm font-medium">Loading sessions...</p>
                </div>
            ) : filtered.length === 0 ? (
                <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-40 gap-4"
                >
                    <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-2">
                        <Inbox size={36} className="text-white/20" />
                    </div>
                    <h3 className="text-xl font-bold text-white/50">No sessions here</h3>
                    <p className="text-white/25 text-sm text-center max-w-xs">
                        {tab === 'incoming'  ? 'No one has sent you a booking request yet.'
                        : tab === 'outgoing' ? 'You haven\'t sent any booking requests yet.'
                                             : 'Book your first session from the Discover page.'}
                    </p>
                </motion.div>
            ) : (
                <div className="space-y-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((apt) => {
                            const isIncoming = apt.receiverId._id === user._id;
                            const other      = isIncoming ? apt.senderId : apt.receiverId;
                            const isPending  = apt.status === 'pending';
                            const cfg        = statusConfig[apt.status] ?? statusConfig.pending;

                            return (
                                <motion.div
                                    key={apt._id}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    layout
                                >
                                    <div className="card-glass p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">

                                        {/* Avatar */}
                                        <div className="relative shrink-0">
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/50 to-violet-900/50 border border-white/10">
                                                {other.profileImage ? (
                                                    <img src={other.profileImage} alt={other.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-2xl font-black text-white/20">
                                                        {other.name?.[0]}
                                                    </div>
                                                )}
                                            </div>
                                            {/* Direction indicator */}
                                            <div className={`absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full border-2 border-[#080812] flex items-center justify-center ${
                                                isIncoming ? 'bg-blue-500' : 'bg-violet-600'
                                            }`}>
                                                {isIncoming
                                                    ? <ArrowDownCircle size={14} className="text-white" />
                                                    : <ArrowUpCircle   size={14} className="text-white" />
                                                }
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-3 mb-1.5">
                                                <h3 className="text-lg font-bold text-white truncate">{other.name}</h3>
                                                <span className={cfg.classes}>{cfg.label}</span>
                                                {isIncoming && isPending && (
                                                    <span className="badge badge-indigo animate-pulse">Action needed</span>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3 text-sm text-white/40 font-medium">
                                                <span className="flex items-center gap-1.5">
                                                    <UserCheck size={14} className="text-indigo-400/70" />
                                                    {other.category} · {other.title || 'Expert'}
                                                </span>
                                                <span>·</span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock size={14} />
                                                    {new Date(apt.createdAt).toLocaleDateString('en-US', {
                                                        month: 'short', day: 'numeric', year: 'numeric'
                                                    })}
                                                </span>
                                                <span>·</span>
                                                <span className="text-white/20 text-xs font-mono">#{apt._id.slice(-6).toUpperCase()}</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                                            {isIncoming && isPending ? (
                                                <>
                                                    <button
                                                        onClick={() => handleResponse(apt._id, 'accepted')}
                                                        disabled={respondingId === apt._id}
                                                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
                                                    >
                                                        {respondingId === apt._id
                                                            ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            : <><CheckCircle2 size={16} /> Confirm</>
                                                        }
                                                    </button>
                                                    <button
                                                        onClick={() => handleResponse(apt._id, 'rejected')}
                                                        disabled={respondingId === apt._id}
                                                        className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/30 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 disabled:opacity-50"
                                                        title="Decline"
                                                    >
                                                        <XCircle size={20} />
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="text-xs font-semibold text-white/20 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                                    {isIncoming ? 'Received' : 'Requested'}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default AppointmentsPage;
