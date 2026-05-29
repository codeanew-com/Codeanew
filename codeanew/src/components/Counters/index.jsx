import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountersBg from "../../assets/img/backgrounds/counters-bg.png";
import { stats } from "../../constants/stats";

function useAnimatedCount(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const startTime = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.round(progress * end));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
}

function StatCounter({ icon, end, label }) {
  const [count, ref] = useAnimatedCount(end, 2000);
  return (
    <div ref={ref} className="flex items-start gap-5 group">
      <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/15 transition-colors">
        <FontAwesomeIcon icon={icon} className="icon-gold text-2xl" />
      </div>
      <div>
        <p className="text-4xl font-bold text-white m-0 leading-none mb-1">
          {count}<span className="text-gold-light">+</span>
        </p>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/75 m-0">
          {label}
        </p>
      </div>
    </div>
  );
}

const Counters = () => (
  <section
    className="relative py-24 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${CountersBg})` }}
  >
    <div className="absolute inset-0 bg-navy/80" />
    <div className="relative z-10 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {stats.map(({ icon, end, label }) => (
          <StatCounter key={label} icon={icon} end={end} label={label} />
        ))}
      </div>
    </div>
  </section>
);

export default Counters;
