// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie'; // Import js-cookie to check the cookie

// const ProtectedRoute = ({ children }) => {
//     const authToken = Cookies.get('authToken'); // Check for the 'authToken' cookie

//     if (!authToken) {
//         // If no authToken cookie is found, redirect to the 404 page
//         return <Navigate to="/404" />;
//     }

//     // If the cookie exists, render the child component (i.e., the dashboard)
//     return children;
// };

// export default ProtectedRoute;





// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie'; // Import js-cookie to check the cookie

// const ProtectedRoute = ({ children }) => {
//     const authToken = Cookies.get('authToken'); // Check for the 'authToken' cookie

//     if (!authToken) {
//         // If no authToken cookie is found, redirect to the 404 page or login page
//         return <Navigate to="/404" />;
//     }

//     // If the cookie exists, render the child component (i.e., the dashboard)
//     return children;
// };

// export default ProtectedRoute;





import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import the context

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext); // Access token from AuthContext

    if (!token) {
        // If no token, redirect to the login page
        return <Navigate to="/" />;
    }

    // Otherwise, render the protected component
    return children;
};

export default ProtectedRoute;
