import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-7 z-50 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-gold outline-none"
      style={{ background: 'linear-gradient(140deg, #F0A500, #E8C440)' }}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faAngleUp} className="text-gray-800 text-lg" />
    </button>
  );
};

export default ScrollUpButton;
