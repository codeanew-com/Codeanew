import React, { useState, useEffect } from 'react';
import Avatar1 from "../../assets/img/avatar/avatar-1.jpg";
import Avatar2 from "../../assets/img/avatar/avatar-2.jpg";
import Avatar3 from "../../assets/img/avatar/avatar-3.jpg";
import TestimonialBg from "../../assets/img/img-3.png";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae.",
    name: "Anne Brady",
    role: "Restaurant Owner",
    avatar: Avatar1,
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae.",
    name: "Antony Moore",
    role: "Business Owner",
    avatar: Avatar2,
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae.",
    name: "Emma Connor",
    role: "Marketing Director",
    avatar: Avatar3,
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (i) => setActive(i);
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const { quote, name, role, avatar } = testimonials[active];

  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${TestimonialBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-14 tracking-wide">Testimonials</h1>

          {/* Quote card */}
          <div
            key={active}
            className="bg-white rounded-xl px-8 py-7 shadow-xl max-w-lg mx-auto mb-8"
            style={{ animation: 'fadeIn 0.4s ease both' }}
          >
            {/* Quote mark */}
            <div className="text-5xl text-gold leading-none mb-3 font-serif">&ldquo;</div>
            <p className="text-base text-body leading-relaxed font-medium mb-0">{quote}</p>
          </div>

          {/* Author pill */}
          <div className="flex items-center gap-3 max-w-xs mx-auto bg-white rounded-full shadow-lg px-3 py-2 mb-10">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-gold/30"
            />
            <div className="text-left">
              <p className="font-semibold text-heading text-sm m-0">{name}</p>
              <p className="text-muted text-xs m-0">{role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white outline-none ${
                    i === active ? 'bg-gold-light scale-110' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white/20 border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
