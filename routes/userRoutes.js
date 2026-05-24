const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users'); // Make sure model exports 'User' properly

// Middleware to verify the token from Authorization header
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, 'joshua_secret_key', (err, decoded) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Store decoded user info (optional for future use)
    req.user = decoded.user;
    next();
  });
}

// GET /users - Return all users (protected route)
router.get('/', verifyToken, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
