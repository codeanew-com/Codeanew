import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <button onClick={scrollToTop} style={styles.button}>
                <FontAwesomeIcon icon={faAngleUp} style={styles.icon} />
            </button>
        )
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '90px',
        right: '27px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: ' #e4ad35',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    icon: {
        fontWeight: 200,
        fontSize: '20px',
        color: 'white',
    },
};

export default ScrollUpButton;
