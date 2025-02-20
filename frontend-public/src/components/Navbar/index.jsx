// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { Link as RouterLink } from 'react-router-dom';
// import { animateScroll as scroll } from 'react-scroll';
// import WhiteLogo from '../../assets/img/logos/black-logo.png';
// import BlackLogo from '../../assets/img/logos/logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css'; // Import your CSS file

// const NavbarComponent = () => {
//     const [scrolled, setScrolled] = useState(false);

//     const handleScroll = () => {
//         const offset = window.scrollY;
//         if (offset > 50) {
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     };

//     useEffect(() => {
//         const debounce = (func, wait) => {
//             let timeout;
//             return (...args) => {
//                 clearTimeout(timeout);
//                 timeout = setTimeout(() => func.apply(this, args), wait);
//             };
//         };

//         const debouncedHandleScroll = debounce(handleScroll, 50);

//         window.addEventListener('scroll', debouncedHandleScroll);
//         return () => {
//             window.removeEventListener('scroll', debouncedHandleScroll);
//         };
//     }, []);

//     const handleScrollToTop = () => {
//         scroll.scrollToTop();
//     };

//     return (
//         <header className="main-header sticky-header header-with-top" id="main-header-2">
//             <Navbar expand="lg" className={`navbar-light rounded ${scrolled ? 'navbar-scrolled' : 'navbar-default'} `}>
//                 <Container>
//                     <Navbar.Brand as={RouterLink} to="/" className="d-flex logo mr-4" onClick={handleScrollToTop}>
//                         <img src={scrolled ? BlackLogo : WhiteLogo} alt="logo" />
//                     </Navbar.Brand>

//                     <Navbar.Toggle
//                         aria-controls="navbar"
//                         className={`navbar-toggler ${scrolled ? 'navbar-toggler-scrolled' : 'navbar-toggler-default'}`}
//                     />

//                     <Navbar.Collapse id="navbar" className="navbar-collapse collapse w-100">
//                         <Nav className="navbar-nav ml-auto">
//                             <Nav.Link 
//                                 as={RouterLink} 
//                                 to="/" 
//                                 smooth={true} 
//                                 duration={400} 
//                                 onClick={handleScrollToTop}
                                
//                             >
//                                 Home
//                             </Nav.Link>

//                             <NavDropdown title="Company" id="navbarDropdownMenuLink">
//                                 <NavDropdown.Item 
//                                     as={RouterLink} 
//                                     to="/about" 
//                                     onClick={handleScrollToTop}
//                                 >
//                                     About Us
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item 
//                                     as={RouterLink} 
//                                     to="/our-process" 
//                                     onClick={handleScrollToTop}
//                                 >
//                                     Our Process
//                                 </NavDropdown.Item>
//                             </NavDropdown>

//                             <Nav.Link 
//                                 as={RouterLink} 
//                                 to='/services' 
//                                 smooth={true} 
//                                 duration={400} 
//                                 className="nav-link single"
//                                 onClick={handleScrollToTop}
//                             >
//                                 Services
//                             </Nav.Link>

//                             <li className="nav-item">
//                                 <Nav.Link 
//                                     as={RouterLink} 
//                                     to="/contact-us" 
//                                     className="nav-link link-color" 
//                                     onClick={handleScrollToTop}
//                                 >
//                                     Start a Project
//                                 </Nav.Link>
//                             </li>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </header>
//     );
// };

// export default NavbarComponent;




import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import WhiteLogo from '../../assets/img/logos/black-logo.png';
import BlackLogo from '../../assets/img/logos/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import your CSS file

const NavbarComponent = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
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

    return (
        <header className="main-header sticky-header header-with-top" id="main-header-2">
            <Navbar 
                expand="lg" 
                className={`navbar-light rounded ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`} 
                onToggle={handleToggle} 
                expanded={isNavbarOpen}
            >
                <Container>
                    <Navbar.Brand as={RouterLink} to="/" className="d-flex logo mr-4" onClick={handleScrollToTop}>
                        <img src={scrolled ? BlackLogo : WhiteLogo} alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="navbar"
                        className={`navbar-toggler ${scrolled ? 'navbar-toggler-scrolled' : 'navbar-toggler-default'}`}
                        onClick={handleToggle}
                    >
                        {isNavbarOpen ? (
                            <span>&#x2715;</span> // X symbol
                        ) : (
                            <span>&#9776;</span> // Hamburger menu icon
                        )}
                    </Navbar.Toggle>

                    <Navbar.Collapse id="navbar" className="navbar-collapse collapse w-100">
                        <Nav className="navbar-nav ml-auto">
                            <Nav.Link 
                                as={RouterLink} 
                                to="/" 
                                smooth={true} 
                                duration={400} 
                                onClick={handleScrollToTop}
                            >
                                Home
                            </Nav.Link>

                            <NavDropdown title="Company" id="navbarDropdownMenuLink">
                                <NavDropdown.Item 
                                    as={RouterLink} 
                                    to="/about" 
                                    onClick={handleScrollToTop}
                                >
                                    About Us
                                </NavDropdown.Item>
                                <NavDropdown.Item 
                                    as={RouterLink} 
                                    to="/our-process" 
                                    onClick={handleScrollToTop}
                                >
                                    Our Process
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link 
                                as={RouterLink} 
                                to='/services' 
                                smooth={true} 
                                duration={400} 
                                className="nav-link single"
                                onClick={handleScrollToTop}
                            >
                                Services
                            </Nav.Link>

                            <li className="nav-item">
                                <Nav.Link 
                                    as={RouterLink} 
                                    to="/contact-us" 
                                    className="nav-link link-color" 
                                    onClick={handleScrollToTop}
                                >
                                    Start a Project
                                </Nav.Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavbarComponent;
