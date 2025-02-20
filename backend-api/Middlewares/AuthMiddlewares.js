const jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.generateToken = (payload, expired) =>{
   
    return jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn : expired
    })
}



// exports.VerifyToken = async (req, res, next) => {
//     const token =
//       req.body.token || req.query.token || req.headers["x-access-token"] ||
//       req.headers.cookies;
  
//     if (token) {
//       jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
//         if (err) {
//           return res.status(403).json({ message: "Not authorized, no valid token" });
//         } else {
//           const checkIfRole = await User.findOne({ email: decodedToken.email });
  
//           if (checkIfRole.roles !== "Admin") {
//             return res.status(404).json({ message: "Not authorized, you are not admin" });
//           } else {
//             next(); // Proceed to the next middleware or route handler
//           }
//         }
//       });
//     } else {
//       return res.status(401).json({ message: "Not authorized, token not available" });
//     }
//   };



exports.VerifyToken = async (req, res, next) => {
    // Get token from body, query, headers, or cookies
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.cookies;
  
    // Check if token exists
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
        // If token is invalid or expired
        if (err) {
          return res.status(403).json({ message: "Not authorized, invalid or expired token" });
        } else {
          try {
            // Find the user using the decoded email from the token
            const user = await User.findOne({ email: decodedToken.email });
  
            // If user not found, they are not logged in
            if (!user) {
              return res.status(404).json({ message: "User not found, please log in" });
            }
  
            // // If user exists but doesn't have admin privileges
            // if (user.roles !== "Admin") {
            //   return res.status(403).json({ message: "Not authorized, admin access required" });
            // }
  
            // User is logged in and has admin role
            req.user = user; // Pass the user object to the next middleware
            next(); // Proceed to the next middleware or route handler
  
          } catch (error) {
            return res.status(500).json({ message: "Server error" });
          }
        }
      });
    } else {
      // If no token is provided
      return res.status(401).json({ message: "Not authorized, token not provided" });
    }
  };
  