import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Briefcase, FileText, Award, Image, ChevronDown,
    Sparkles, CheckCircle, ArrowRight, User, Edit3, ArrowLeft
} from 'lucide-react';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const CATEGORIES = ['Doctor', 'Lawyer', 'Expert', 'Other'];

const STEPS = [
    { id: 1, label: 'Basic Info'    },
    { id: 2, label: 'Your Bio'      },
    { id: 3, label: 'Profile Image' },
];

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
};
const it = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const CompleteProfilePage = () => {
    const { user, updateUserInfo } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Determine if this is edit mode (profile is already complete and user is on /profile)
    const isEditMode = Boolean(user?.isProfileComplete && location.pathname.includes('/profile'));
    const [forceEdit, setForceEdit] = useState(false);
    const isEditing = forceEdit || !isEditMode;

    const [step, setStep]       = useState(1);
    const [form, setForm]       = useState({
        category:     'Doctor',
        title:        '',
        experience:   '',
        description:  '',
        profileImage: '',
    });
    const [loading, setLoading] = useState(false);

    // Pre-fill form with existing user data if editing
    useEffect(() => {
        if (user && user.isProfileComplete) {
            setForm({
                category:     user.category || 'Doctor',
                title:        user.title || '',
                experience:   user.experience?.toString() || '',
                description:  user.description || '',
                profileImage: user.profileImage || '',
            });
        }
    }, [user]);

    const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const { data } = await API.put('/users/profile', {
                ...form,
                experience: Number(form.experience),
            });
            updateUserInfo(data);
            toast.success(isEditMode ? 'Profile updated! ✨' : 'Profile complete! Welcome 🎉');
            if (isEditMode) {
                setForceEdit(false);
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            toast.error(err.response?.data?.message || 'Failed to save profile');
        } finally {
            setLoading(false);
        }
    };

    const canNext = () => {
        if (step === 1) return form.category && form.title.trim() && form.experience;
        if (step === 2) return form.description.trim().length >= 20;
        return true;
    };

    // ─── Profile View Mode (already complete, just viewing) ───
    if (isEditMode && !isEditing) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 py-24">
                <div className="w-full max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 items-center justify-center shadow-lg shadow-indigo-500/30 mb-5 relative group">
                            <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <User size={24} className="text-white relative z-10" />
                        </div>
                        <h1 className="text-3xl font-black tracking-tight">My Profile</h1>
                        <p className="text-white/40 text-sm mt-2 font-medium">Your professional information</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-3xl border border-white/[0.07] overflow-hidden relative"
                        style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(40px)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
                        <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 relative z-10" />
                        
                        <div className="p-8 space-y-6">
                            {/* Profile Image */}
                            <div className="flex justify-center">
                                {user.profileImage ? (
                                    <div className="relative">
                                        <img
                                            src={user.profileImage}
                                            alt="Profile"
                                            className="w-28 h-28 rounded-3xl object-cover border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#080812]">
                                            <CheckCircle size={14} className="text-white" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-4xl font-black text-white">
                                        {user.name?.[0]}
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                                <p className="text-indigo-400 font-semibold text-sm mt-1">{user.title}</p>
                            </div>

                            {/* Info Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1">Category</p>
                                    <p className="text-white font-semibold">{user.category}</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1">Experience</p>
                                    <p className="text-white font-semibold">{user.experience} years</p>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-2">Bio</p>
                                <p className="text-white/60 text-sm leading-relaxed">{user.description}</p>
                            </div>

                            {/* Email */}
                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1">Email</p>
                                <p className="text-white/60 text-sm">{user.email}</p>
                            </div>

                            {/* Edit & Back Buttons */}
                            <div className="flex gap-4 pt-2">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="btn-ghost flex-1 py-3.5 gap-2"
                                >
                                    <ArrowLeft size={18} /> Back
                                </button>
                                <button
                                    onClick={() => { setForceEdit(true); setStep(1); }}
                                    className="btn-primary flex-1 py-3.5 gap-2"
                                >
                                    <Edit3 size={18} /> Edit Profile
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // ─── Edit / Onboarding Mode ───
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="w-full max-w-lg">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 items-center justify-center shadow-lg shadow-indigo-500/30 mb-5 relative group">
                        <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        {isEditMode ? <Edit3 size={24} className="text-white relative z-10" /> : <User size={24} className="text-white relative z-10" />}
                    </div>
                    <h1 className="text-3xl font-black tracking-tight">
                        {isEditMode ? 'Edit Profile' : 'Complete Your Profile'}
                    </h1>
                    <p className="text-white/40 text-sm mt-2 font-medium">
                        {step === 1 && 'Tell us your professional details.'}
                        {step === 2 && 'Write a short bio so clients know you.'}
                        {step === 3 && 'Add a profile photo to stand out.'}
                    </p>
                </motion.div>

                {/* Step indicators */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    {STEPS.map((s, i) => (
                        <div key={s.id} className="flex items-center gap-3">
                            <button
                                onClick={() => s.id < step && setStep(s.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                    step === s.id
                                        ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                                        : step > s.id
                                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                                        : 'bg-white/[0.04] text-white/25 border border-white/[0.06]'
                                }`}
                            >
                                {step > s.id
                                    ? <CheckCircle size={13} />
                                    : <span>{s.id}</span>
                                }
                                <span className="hidden sm:block">{s.label}</span>
                            </button>
                            {i < STEPS.length - 1 && (
                                <div className={`w-12 h-0.5 rounded-full transition-colors duration-500 ${step > s.id ? 'bg-indigo-500/40' : 'bg-white/10'}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Card */}
                <motion.div
                    key={step}
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="rounded-3xl border border-white/[0.07] overflow-hidden relative"
                    style={{ background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(40px)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
                    <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 relative z-10" />
                    <div className="p-8 space-y-6">

                        {/* ── STEP 1: Basic Info ── */}
                        {step === 1 && (
                            <>
                                <motion.div variants={it} className="space-y-2">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                        Professional Category
                                    </label>
                                    <div className="relative">
                                        <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                        <select
                                            className="input-field pl-12 pr-10 appearance-none cursor-pointer"
                                            value={form.category}
                                            onChange={set('category')}
                                        >
                                            {CATEGORIES.map(c => (
                                                <option key={c} value={c} className="bg-[#0f0f1a]">{c}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                                    </div>
                                </motion.div>

                                <motion.div variants={it} className="space-y-2">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                        Job Title / Specialization
                                    </label>
                                    <div className="relative">
                                        <Award size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                        <input
                                            type="text"
                                            placeholder="e.g. Senior Cardiologist"
                                            className="input-field pl-12"
                                            value={form.title}
                                            onChange={set('title')}
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={it} className="space-y-2">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                        Years of Experience
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 text-sm font-bold pointer-events-none">yrs</span>
                                        <input
                                            type="number"
                                            min="0"
                                            max="60"
                                            placeholder="0"
                                            className="input-field pl-12"
                                            value={form.experience}
                                            onChange={set('experience')}
                                        />
                                    </div>
                                </motion.div>
                            </>
                        )}

                        {/* ── STEP 2: Bio ── */}
                        {step === 2 && (
                            <motion.div variants={it} className="space-y-2">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                    Professional Bio
                                </label>
                                <div className="relative">
                                    <FileText size={18} className="absolute left-4 top-5 text-white/25 pointer-events-none" />
                                    <textarea
                                        rows={7}
                                        placeholder="Tell potential clients about your expertise, credentials, and how you can help them..."
                                        className="input-field pl-12 resize-none"
                                        value={form.description}
                                        onChange={set('description')}
                                    />
                                </div>
                                <div className="text-right">
                                    <span className={`text-xs font-medium ${form.description.length >= 20 ? 'text-emerald-400' : 'text-white/25'}`}>
                                        {form.description.length} chars {form.description.length < 20 && '(min 20)'}
                                    </span>
                                </div>
                            </motion.div>
                        )}

                        {/* ── STEP 3: Profile Image ── */}
                        {step === 3 && (
                            <>
                                <motion.div variants={it} className="space-y-2">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest ml-1">
                                        Profile Image URL
                                    </label>
                                    <div className="relative">
                                        <Image size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                                        <input
                                            type="url"
                                            placeholder="https://your-image-link.com/photo.jpg"
                                            className="input-field pl-12"
                                            value={form.profileImage}
                                            onChange={set('profileImage')}
                                        />
                                    </div>
                                </motion.div>

                                {/* Preview */}
                                {form.profileImage && (
                                    <motion.div
                                        variants={it}
                                        className="flex justify-center mt-4"
                                    >
                                        <div className="relative">
                                            <img
                                                src={form.profileImage}
                                                alt="Preview"
                                                className="w-32 h-32 rounded-3xl object-cover border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10"
                                                onError={(e) => { e.target.src = ''; e.target.style.display = 'none'; }}
                                            />
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#080812]">
                                                <CheckCircle size={14} className="text-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {!form.profileImage && (
                                    <motion.div variants={it} className="flex justify-center">
                                        <div className="w-32 h-32 rounded-3xl bg-white/[0.04] border-2 border-dashed border-white/[0.1] flex flex-col items-center justify-center gap-2 text-white/20">
                                            <Image size={32} />
                                            <span className="text-xs font-medium">No image yet</span>
                                        </div>
                                    </motion.div>
                                )}
                            </>
                        )}

                        {/* Navigation buttons */}
                        <motion.div variants={it} className="flex gap-4 pt-2">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(s => s - 1)}
                                    className="btn-ghost flex-1 py-3.5"
                                >
                                    Back
                                </button>
                            ) : isEditMode ? (
                                <button
                                    type="button"
                                    onClick={() => setForceEdit(false)}
                                    className="btn-ghost flex-1 py-3.5"
                                >
                                    Cancel
                                </button>
                            ) : null}

                            {step < 3 ? (
                                <button
                                    type="button"
                                    disabled={!canNext()}
                                    onClick={() => setStep(s => s + 1)}
                                    className="btn-primary flex-1 py-3.5 gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    Continue <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={handleSubmit}
                                    className="btn-primary flex-1 py-3.5 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <> <Sparkles size={18} /> {isEditMode ? 'Save Changes' : 'Complete Profile'} </>
                                    )}
                                </button>
                            )}
                        </motion.div>
                    </div>
                </motion.div>

                <p className="text-center text-xs text-white/15 mt-6 font-medium">
                    {isEditMode ? 'Changes will be visible to other users immediately.' : 'You can update your profile later from your profile page.'}
                </p>
            </div>
        </div>
    );
};

export default CompleteProfilePage;
