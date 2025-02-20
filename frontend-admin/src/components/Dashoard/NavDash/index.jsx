import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Use useNavigate for redirect
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Cookies from 'js-cookie'; // Import Cookies to handle token removal
import BlackLogo from '../../../assets/img/logos/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { AuthContext } from '../../../context/AuthContext';

const NavDash = () => {

    const { fullname, setToken, setFullname } = useContext(AuthContext); // Ensure fullname is retrieved correctly
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); // Initialize navigate for redirection

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        const debounce = (func, wait) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        };

        const debouncedHandleScroll = debounce(handleScroll, 50);

        window.addEventListener('scroll', debouncedHandleScroll);
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        scroll.scrollToTop();
    };

    // Handle logout - clear token and navigate to home
    const handleLogout = () => {
        Cookies.remove('authToken'); // Remove token from cookies
        localStorage.removeItem('authToken'); // Remove token from localStorage

        // Clear user info from context
        setToken(null);
        setFullname(null);

        navigate('/'); // Redirect to home page
    };

    return (
        <header style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            backgroundColor: '#F5F5F7',
            zIndex: '1000'
        }} id="main-header-2">
            <Navbar expand="lg" className={`navbar-light rounded ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
                <Container>
                    <Navbar.Brand as={RouterLink} to="/" className="d-flex logo mr-4" onClick={handleScrollToTop}>
                        <img src={BlackLogo} alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="navbar"
                        className={`navbar-toggler ${scrolled ? 'navbar-toggler-scrolled' : 'navbar-toggler-default'}`}
                    />

                    <Navbar.Collapse id="navbar" className="navbar-collapse collapse w-100" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Nav className="navbar-nav ml-auto">
                            <Nav.Link as={RouterLink} to="/dashboard" smooth={true} duration={400} className="nav-link single" onClick={handleScrollToTop}>
                                Dashboard
                            </Nav.Link>
                            <Nav.Link as={RouterLink} to="/all-bookings" smooth={true} duration={400} className="nav-link single" onClick={handleScrollToTop}>
                                Bookings
                            </Nav.Link>
                            <Nav.Link as={RouterLink} to="/all-users" smooth={true} duration={400} className="nav-link single" onClick={handleScrollToTop}>
                                All Users
                            </Nav.Link>
                            <Nav.Link as={RouterLink} to="/add-user" smooth={true} duration={400} className="nav-link single" onClick={handleScrollToTop}>
                                Add User
                            </Nav.Link>
                            <li className="nav-item ml-5" style={{
                                cursor: 'pointer',
                            }}>
                                <Nav.Link as="span" className="nav-link link-color" onClick={handleLogout}>
                                    Logout
                                </Nav.Link>
                            </li>

                            {/* Display Fullname or Placeholder */}
                            <Nav.Link as="span" className="nav-link link-color ml-5">
                                <p style={{
                                    color: ' #f1cf2e' }}>
                                    {fullname ? (
                                        <>Welcome <span style={{ color: ' #e4ad35', fontWeight: 'bolder' }}>{fullname}</span></>
                                    ) : (
                                        <>Welcome, User</>  // Fallback text if fullname is null
                                    )}
                                </p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavDash;
