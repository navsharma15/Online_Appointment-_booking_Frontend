import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, SlidersHorizontal, Users, LayoutGrid, List } from 'lucide-react';
import API from '../services/api';
import { toast } from 'react-toastify';
import ExpertCard from '../components/ExpertCard';
import { useAuth } from '../context/AuthContext';

const categories = ['All', 'Doctor', 'Lawyer', 'Expert', 'Other'];

const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(searchParams.get('category') || 'All');
    const [searchTerm, setSearchTerm] = useState('');
    const [bookingId, setBookingId] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { user } = useAuth();

    useEffect(() => {
        setPage(1); // Reset to page 1 on filter/search change
    }, [filter, searchTerm]);

    useEffect(() => {
        const timer = setTimeout(fetchUsers, 300);
        return () => clearTimeout(timer);
    }, [filter, searchTerm, page]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const { data } = await API.get(`/users?category=${filter}&search=${searchTerm}&page=${page}&limit=9`);
            // Extra client-side filter to ensure current logged-in user isn't listed
            const filteredUsers = data.users.filter(u => u._id !== user?._id);
            setUsers(filteredUsers);
            setTotalPages(data.pages);
        } catch (err) {
            toast.error('Failed to load experts');
        } finally {
            setLoading(false);
        }
    };

    const handleBook = async (receiverId) => {
        setBookingId(receiverId);
        try {
            await API.post('/appointments/request', { receiverId });
            toast.success('Session request sent! 🎉');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Failed to send request');
        } finally {
            setBookingId(null);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between relative"
            >
                <div className="relative z-10">
                    <span className="section-label mb-5 inline-flex">Expert Registry</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 leading-[0.9]">
                        Find Your{' '}
                        <span className="text-gradient">Perfect Expert</span>
                    </h1>
                    <p className="text-white/40 mt-5 font-medium max-w-lg">
                        {loading && !users.length ? 'Scanning global experts...' : `Browse our curated directory of verified professionals ready to help you.`}
                    </p>
                </div>

                {/* Search + View Toggle */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-96 group">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-indigo-400 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, title or skills..."
                            className="input-field pl-12 pr-4 bg-white/[0.02] border-white/[0.06] focus:bg-white/[0.05] focus:border-indigo-500/30 transition-all rounded-2xl"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex p-1.5 gap-1 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-indigo-500 text-white shadow-lg' : 'text-white/30 hover:text-white'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-indigo-500 text-white shadow-lg' : 'text-white/30 hover:text-white'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-3 flex-wrap"
            >
                <SlidersHorizontal size={16} className="text-white/30 shrink-0" />
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            filter === cat
                                ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                                : 'bg-white/[0.04] text-white/50 border border-white/[0.06] hover:border-white/20 hover:text-white hover:bg-white/[0.08]'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Content */}
            {loading && users.length === 0 ? (
                <div className={
                    viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                        : 'flex flex-col gap-5 max-w-3xl mx-auto'
                }>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-[380px] rounded-3xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                        </div>
                    ))}
                </div>
            ) : users.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-40 gap-4"
                >
                    <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4">
                        <Users size={36} className="text-white/20" />
                    </div>
                    <h3 className="text-xl font-bold text-white/60">No experts found</h3>
                    <p className="text-white/30 text-sm font-medium">Try adjusting your search or category filter.</p>
                    <button
                        onClick={() => { setFilter('All'); setSearchTerm(''); }}
                        className="mt-4 px-6 py-2 rounded-xl bg-white/5 text-white/60 hover:bg-white/10 transition-all font-semibold border border-white/10"
                    >
                        Clear all filters
                    </button>
                </motion.div>
            ) : (
                <>
                    <div className={
                        viewMode === 'grid'
                            ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                            : 'flex flex-col gap-5 max-w-3xl mx-auto w-full'
                    }>
                        <AnimatePresence mode="popLayout">
                            {users.map((u) => (
                                <ExpertCard
                                    key={u._id}
                                    expert={u}
                                    onBook={handleBook}
                                    isBooking={bookingId === u._id}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 pt-10">
                            <button
                                disabled={page === 1 || loading}
                                onClick={() => setPage(p => p - 1)}
                                className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08] disabled:opacity-20 transition-all"
                            >
                                <Users size={20} className="rotate-180" style={{ transform: 'scaleX(-1)' }} /> 
                                {/* Placeholder icon for Prev, user used Users icon for layout toggle, I'll use simple arrows if possible but will stick to lucide */}
                                <Search size={20} className="hidden" /> {/* just to have lucide available */}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            
                            <div className="flex gap-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setPage(i + 1)}
                                        className={`w-10 h-10 rounded-xl font-bold transition-all ${
                                            page === i + 1 
                                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
                                            : 'bg-white/[0.04] text-white/30 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                disabled={page === totalPages || loading}
                                onClick={() => setPage(p => p + 1)}
                                className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08] disabled:opacity-20 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Dashboard;

