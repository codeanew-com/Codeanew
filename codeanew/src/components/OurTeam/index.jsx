import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getTeamMembers } from '../../api/services/team';
import { getImageUrl } from '../../api/helpers';

const TeamSkeleton = () => (
  <div className="bg-white rounded-xl shadow-card overflow-hidden animate-pulse">
    <div className="w-full aspect-square bg-gray-200" />
    <div className="px-5 py-4 text-center">
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-2" />
      <div className="h-3 bg-gray-100 rounded w-1/2 mx-auto" />
    </div>
  </div>
);

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeamMembers();
        setMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  const socialLinks = (member) => [
    { icon: faFacebook, href: member.facebook, label: 'Facebook', hoverClass: 'hover:bg-facebook' },
    { icon: faTwitter,  href: member.twitter,  label: 'Twitter',  hoverClass: 'hover:bg-twitter'  },
    { icon: faLinkedin, href: member.linkedin,  label: 'LinkedIn', hoverClass: 'hover:bg-linkedin'  },
  ].filter(s => s.href);

  return (
    <section className="py-20 bg-bg-light" id="team">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h1>Our Team</h1>
          <p>Meet the experts behind our success.</p>
        </div>

        {error && (
          <div className="text-center text-muted py-8">
            Unable to load team members.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <TeamSkeleton key={i} />
              ))
            : members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-card hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative group overflow-hidden">
                    <img
                      src={getImageUrl(member.photo)}
                      alt={member.name}
                      className="w-full object-cover aspect-square"
                    />
                    {socialLinks(member).length > 0 && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-start justify-start p-3">
                        <div className="flex flex-col gap-1.5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {socialLinks(member).map(({ icon, href, label, hoverClass }) => (
                            <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              className={`w-9 h-9 flex items-center justify-center rounded bg-black/30 text-white text-sm transition-colors duration-200 ${hoverClass}`}
                            >
                              <FontAwesomeIcon icon={icon} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="px-5 py-4 text-center">
                    <h5 className="text-lg font-semibold text-heading m-0 mb-1">
                      {member.name}
                    </h5>
                    <p className="text-sm text-muted m-0">{member.role}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
