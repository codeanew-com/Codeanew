import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import WhiteLogo from '../../assets/img/logos/black-logo.png';
import BlackLogo from '../../assets/img/logos/logo.png';

const NavbarComponent = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const dropdownRef                   = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setCompanyOpen(false);
  };

  const navLinkClass = scrolled
    ? 'text-gray-700 hover:text-gold'
    : 'text-white hover:text-gold-light';

  const baseNavLink = `px-4 py-2.5 text-[13px] font-semibold tracking-[1.5px] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded`;

  return (
    <header
      className={`sticky-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[var(--shadow-nav)]' : 'bg-transparent'
      }`}
      id="main-header-2"
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-18">

          {/* Logo */}
          <RouterLink
            to="/"
            className="flex items-center flex-shrink-0 mr-10"
            onClick={closeMenus}
          >
            <img
              src={scrolled ? BlackLogo : WhiteLogo}
              alt="Codeanew"
              className="h-10 w-auto transition-all duration-300"
            />
          </RouterLink>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            <RouterLink
              to="/"
              className={`${baseNavLink} ${navLinkClass}`}
              onClick={closeMenus}
            >
              Home
            </RouterLink>

            {/* Company dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCompanyOpen((o) => !o)}
                className={`${baseNavLink} ${navLinkClass} flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded={companyOpen}
              >
                Company
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {companyOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[180px] border border-gray-100 overflow-hidden z-50 animate-[fadeIn_0.15s_ease]">
                  <RouterLink
                    to="/about"
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold hover:translate-x-1 transition-all duration-150"
                    onClick={closeMenus}
                  >
                    About Us
                  </RouterLink>
                  <RouterLink
                    to="/our-process"
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold hover:translate-x-1 transition-all duration-150"
                    onClick={closeMenus}
                  >
                    Our Process
                  </RouterLink>
                </div>
              )}
            </div>

            <RouterLink
              to="/services"
              className={`${baseNavLink} ${navLinkClass}`}
              onClick={closeMenus}
            >
              Services
            </RouterLink>

            <RouterLink
              to="/contact-us"
              className={`ml-3 px-5 py-2 rounded text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold outline-none ${
                scrolled
                  ? 'bg-gradient-to-r from-gold to-gold-light text-gray-800 shadow-sm hover:opacity-90'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
              }`}
              onClick={closeMenus}
            >
              Start a Project
            </RouterLink>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto py-4 flex flex-col">
            <RouterLink
              to="/"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-gold hover:bg-gray-50 rounded transition-colors"
              onClick={closeMenus}
            >
              Home
            </RouterLink>

            {/* Mobile Company accordion */}
            <div>
              <button
                className="w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-gold hover:bg-gray-50 rounded flex items-center justify-between transition-colors"
                onClick={() => setCompanyOpen((o) => !o)}
              >
                Company
                <svg className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyOpen && (
                <div className="pl-6 flex flex-col border-l-2 border-gold ml-4 mb-1">
                  <RouterLink to="/about"       className="py-2 text-sm text-gray-600 hover:text-gold transition-colors" onClick={closeMenus}>About Us</RouterLink>
                  <RouterLink to="/our-process" className="py-2 text-sm text-gray-600 hover:text-gold transition-colors" onClick={closeMenus}>Our Process</RouterLink>
                </div>
              )}
            </div>

            <RouterLink
              to="/services"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-gold hover:bg-gray-50 rounded transition-colors"
              onClick={closeMenus}
            >
              Services
            </RouterLink>

            <RouterLink
              to="/contact-us"
              className="mx-4 mt-3 btn-theme text-center py-3"
              onClick={closeMenus}
            >
              Start a Project
            </RouterLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarComponent;
