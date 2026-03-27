import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ limit, suffix = '+', title, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(limit.replace(/,/g, ''));
      if (start === end) return;
      
      let timer = setInterval(() => {
        start += Math.ceil(end / (duration * 60)); // 60 fps
        if (start > end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, limit, duration]);

  const displayCount = count.toLocaleString();

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-8 glass-card bg-slate-900/40 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        {displayCount}{suffix}
      </h3>
      <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
        {title}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="relative py-20 z-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard limit="10" suffix="K+" title="Active Users" delay={0.1} />
          <StatCard limit="50" suffix="K+" title="Total Bookings" delay={0.3} />
          <StatCard limit="99" suffix="%" title="Satisfaction Rate" delay={0.5} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
