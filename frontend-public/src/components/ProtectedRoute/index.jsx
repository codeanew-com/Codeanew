


import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie to check the cookie

const ProtectedRoute = ({ children }) => {
    const authToken = Cookies.get('authToken'); // Check for the 'authToken' cookie

    if (!authToken) {
        // If no authToken cookie is found, redirect to the 404 page or login page
        return <Navigate to="/404" />;
    }

    // If the cookie exists, render the child component (i.e., the dashboard)
    return children;
};

export default ProtectedRoute;
