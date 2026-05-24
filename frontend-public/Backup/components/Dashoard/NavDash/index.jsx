import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import BlackLogo from '../../../assets/img/logos/logo.png';

const NavDash = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    Cookies.remove('authToken');
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const linkClass =
    'px-4 py-2 text-[13px] font-semibold tracking-wider uppercase text-gray-700 hover:text-gold rounded transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-nav' : 'bg-[#F5F5F7]'
      }`}
      id="main-header-2"
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center shrink-0 mr-10">
            <img src={BlackLogo} alt="Codeanew" className="h-10 w-auto" />
          </RouterLink>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            <RouterLink to="/dashboard"  className={linkClass}>Dashboard</RouterLink>
            <RouterLink to="/all-bookings" className={linkClass}>Bookings</RouterLink>
            <RouterLink to="/sign-up"    className={linkClass}>Add User</RouterLink>
            <button
              onClick={handleLogout}
              className="ml-3 px-5 py-2 rounded text-[13px] font-semibold text-red-500 border border-red-200 hover:bg-red-50 transition-colors focus-visible:ring-2 focus-visible:ring-red-400 outline-none"
            >
              Logout
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            <RouterLink to="/dashboard"    className="px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-gold hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Dashboard</RouterLink>
            <RouterLink to="/all-bookings" className="px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-gold hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Bookings</RouterLink>
            <RouterLink to="/sign-up"      className="px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-gold hover:bg-gray-50 rounded" onClick={() => setMenuOpen(false)}>Add User</RouterLink>
            <button
              onClick={handleLogout}
              className="mx-4 mt-2 py-3 text-sm font-semibold text-red-500 border border-red-200 rounded hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavDash;
