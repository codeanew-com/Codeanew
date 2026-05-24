import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Avatar1 from "../../assets/img/team/1.webp";
import Avatar2 from "../../assets/img/team/2.webp";
import Avatar3 from "../../assets/img/team/3 (1).webp";
import Avatar4 from "../../assets/img/team/4 (1).webp";

const members = [
  { name: 'Khalid',       role: 'Business Manager', img: Avatar1 },
  { name: 'Abdul Rahman', role: 'Sales Manager',     img: Avatar2 },
  { name: 'Mohammed',     role: 'IT Manager',        img: Avatar3 },
  { name: 'Walid',        role: 'Business Analysis', img: Avatar4 },
];

const socialLinks = [
  { icon: faFacebook, href: '#', label: 'Facebook', hoverClass: 'hover:bg-facebook' },
  { icon: faTwitter,  href: '#', label: 'Twitter',  hoverClass: 'hover:bg-twitter'  },
  { icon: faGoogle,   href: '#', label: 'Google',   hoverClass: 'hover:bg-google-red' },
];

const OurTeam = () => (
  <section className="py-20 bg-bg-light" id="team">
    <div className="container mx-auto px-4">
      <div className="section-title">
        <h1>Our Team</h1>
        <p>Meet the experts behind our success.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map(({ name, role, img }) => (
          <div
            key={name}
            className="bg-white rounded-xl shadow-card hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Photo */}
            <div className="relative group overflow-hidden">
              <img src={img} alt={name} className="w-full object-cover aspect-square" />

              {/* Social overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-start justify-start p-3">
                <div className="flex flex-col gap-1.5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {socialLinks.map(({ icon, href, label, hoverClass }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`w-9 h-9 flex items-center justify-center rounded bg-black/30 text-white text-sm transition-colors duration-200 ${hoverClass}`}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="px-5 py-4 text-center">
              <h5 className="text-lg font-semibold text-heading m-0 mb-1">{name}</h5>
              <p className="text-sm text-muted m-0">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeam;
