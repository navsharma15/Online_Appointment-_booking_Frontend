import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const SpotlightCard = ({ children, className = '' }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.12), transparent 70%)`;

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-500 ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default SpotlightCard;
