const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust as per your actual model import
const Doctor = require('../models/Doctor');

// Middleware to authenticate JWT token
const authenticate = asyncHandler(async (req, res, next) => {
  // Get token from authorization header
  const authHeader = req.headers.authorization;

  // Check if token exists and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token, authorization denied' });
  }

  try {
    // Extract token without "Bearer" prefix
    const token = authHeader.split(' ')[1];

    // Verify and decode the token using JWT_SECRET_KEY
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach user information to request object for later use
    req.user = decoded.userId;
    req.role = decoded.role;

    next(); // Call next() to continue middleware chain
  } catch (err) {
    // Handle token-related errors
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token is expired' });
    }
    return res.status(401).json({ success: false, message: 'Invalid Token' });
  }
});

// Middleware to restrict access based on roles
const restrict = (roles) =>
  asyncHandler(async (req, res, next) => {
    // Use req.user information from authenticate middleware
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized: Missing user information' });
    }

    const userId = req.user;
    let user;

    try {
      // Look up user based on role using findById() (assuming Mongoose)
      const UserModel = req.role === 'patient' ? User : Doctor; // Dynamic model based on role
      user = await UserModel.findById(userId);

      // Handle user not found scenario
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (err) {
      // Handle potential errors during user lookup
      console.error('Error fetching user:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    // Check if user role matches authorized roles
    if (!roles.includes(user.role)) {
      return res.status(401).json({ success: false, message: 'You are not authorized' });
    }

    next(); // Call next() to continue middleware chain
  });

// Export both middleware functions
module.exports = { authenticate, restrict };
