const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#080812]">
            {/* Ambient blobs */}
            <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-slow" />
            <div className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full bg-violet-600/8 blur-[150px] animate-float" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-fuchsia-600/5 blur-[120px] animate-float-delay" />
            
            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
