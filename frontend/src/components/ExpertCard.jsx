import { motion } from 'framer-motion';
import { ArrowUpRight, Star, ShieldCheck, Clock } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const categoryColors = {
    Doctor: { bg: 'bg-rose-500/10',    text: 'text-rose-400',    border: 'border-rose-500/20'    },
    Lawyer: { bg: 'bg-amber-500/10',   text: 'text-amber-400',   border: 'border-amber-500/20'   },
    Expert: { bg: 'bg-indigo-500/10',  text: 'text-indigo-400',  border: 'border-indigo-500/20'  },
    Other:  { bg: 'bg-white/5',        text: 'text-white/50',    border: 'border-white/10'       },
};

const ExpertCard = ({ expert, onBook, isBooking }) => {
    const colors = categoryColors[expert.category] || categoryColors.Other;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <SpotlightCard className="h-full">
                <div className="flex flex-col h-full p-7">
                    {/* Avatar */}
                    <div className="relative mb-6">
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/50 to-violet-900/50">
                            {expert.profileImage ? (
                                <img
                                    src={expert.profileImage}
                                    alt={expert.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-6xl font-black text-white/10">
                                    {expert.name?.[0]}
                                </div>
                            )}
                        </div>
                        {/* Category badge overlay */}
                        <div className="absolute top-3 left-3">
                            <span className={`badge ${colors.bg} ${colors.text} border ${colors.border}`}>
                                {expert.category}
                            </span>
                        </div>
                        {/* Experience */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                            <Clock size={12} className="text-white/50" />
                            <span className="text-xs font-semibold text-white/60">{expert.experience}y exp</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold text-white leading-tight">{expert.name}</h3>
                        <p className="text-sm font-semibold text-indigo-400">{expert.title}</p>
                        {expert.description && (
                            <p className="text-sm text-white/40 leading-relaxed line-clamp-2 pt-1">{expert.description}</p>
                        )}
                    </div>

                    {/* Rating + CTA */}
                    <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className={i < 4 ? 'text-amber-400 fill-amber-400' : 'text-white/10 fill-white/10'} />
                            ))}
                            <span className="text-xs text-white/30 font-medium ml-1">(4.0)</span>
                        </div>
                        <button
                            onClick={() => onBook(expert._id)}
                            disabled={isBooking}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isBooking ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>Book Session <ArrowUpRight size={16} /></>
                            )}
                        </button>
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

export default ExpertCard;
