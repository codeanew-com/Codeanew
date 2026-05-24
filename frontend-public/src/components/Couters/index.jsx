import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import CountersBg from '../../assets/img/img-5.png';

const stats = [
  { icon: faAward,       end: 967, label: 'Awards Winning'  },
  { icon: faCalendarAlt, end: 24,  label: 'Done Projects'   },
  { icon: faUser,        end: 120, label: 'Happy Clients'   },
];

const Counters = () => (
  <section
    className="relative py-24 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${CountersBg})` }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gray-900/80" />

    <div className="relative z-10 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {stats.map(({ icon, end, label }) => (
          <div
            key={label}
            className="flex items-start gap-5 group"
          >
            {/* Icon box */}
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/15 transition-colors">
              <FontAwesomeIcon icon={icon} className="icon-gold text-2xl" />
            </div>

            {/* Count + label */}
            <div>
              <p className="text-4xl font-bold text-white m-0 leading-none mb-1">
                <CountUp end={end} duration={4} enableScrollSpy scrollSpyOnce />
                <span className="text-gold-light">+</span>
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/75 m-0">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Counters;
