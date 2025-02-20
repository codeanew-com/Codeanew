// src/hooks/useAdjustHeader.js
import { useEffect } from 'react';

const useAdjustHeader = () => {
    useEffect(() => {
        const adjustHeader = () => {
            if (window.scrollY >= 50) {
                if (!document.querySelector('.header-shrink')) {
                    document.querySelector('.sticky-header').classList.add('header-shrink');
                }
                if (!document.querySelector('.do-sticky')) {
                    // document.querySelector('.logo img').src = 'assets/img/logos/black-logo.png';
                }
            } else {
                document.querySelector('.sticky-header').classList.remove('header-shrink');
                if (!document.querySelector('.do-sticky')) {
                    // document.querySelector('.logo img').src = 'assets/img/logos/logo.png';
                }
            }
        };

        window.addEventListener('scroll', adjustHeader);
        return () => {
            window.removeEventListener('scroll', adjustHeader);
        };
    }, []);
};

export default useAdjustHeader;
