// // // src/context/AuthContext.js

// // import React, { createContext, useState } from 'react';

// // // Create AuthContext
// // export const AuthContext = createContext();

// // // Create AuthProvider to wrap around components that need access to auth state
// // export const AuthProvider = ({ children }) => {
// //   const [fullname, setFullname] = useState(null);
// //   const [token, setToken] = useState(null);

// //   // This provider will wrap components and share these values
// //   return (
// //     <AuthContext.Provider value={{ fullname, token, setFullname, setToken }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };





// // src/context/AuthContext.js

// import React, { createContext, useState, useEffect } from 'react';

// // Create AuthContext
// export const AuthContext = createContext();

// // Create AuthProvider to wrap around components that need access to auth state
// export const AuthProvider = ({ children }) => {
//   const [fullname, setFullname] = useState(null);
//   const [token, setToken] = useState(() => {
//     // Load token from localStorage when the app initializes
//     return localStorage.getItem('token');
//   });

//   // Save token to localStorage whenever it changes
//   useEffect(() => {
//     if (token) {
//       localStorage.setItem('token', token);
//     } else {
//       localStorage.removeItem('token');
//     }
//   }, [token]);

//   // Save fullname (you can also persist it if needed in a similar way)
//   useEffect(() => {
//     if (fullname) {
//       localStorage.setItem('fullname', fullname);
//     } else {
//       localStorage.removeItem('fullname');
//     }
//   }, [fullname]);

//   return (
//     <AuthContext.Provider value={{ fullname, token, setFullname, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// Create AuthProvider to wrap around components that need access to auth state
export const AuthProvider = ({ children }) => {
  const [fullname, setFullname] = useState(() => {
    // Load fullname from localStorage when the app initializes
    return localStorage.getItem('fullname') || null; // Fallback to null if not found
  });

  const [token, setToken] = useState(() => {
    // Load token from localStorage when the app initializes
    return localStorage.getItem('token') || null;
  });

  // Save token to localStorage whenever it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  // Save fullname to localStorage whenever it changes
  useEffect(() => {
    if (fullname) {
      localStorage.setItem('fullname', fullname);
    } else {
      localStorage.removeItem('fullname');
    }
  }, [fullname]);

  return (
    <AuthContext.Provider value={{ fullname, token, setFullname, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
