const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const jwt = require('jsonwebtoken'); // Import the JWT library

// Middleware to verify the token
function verifyToken(req, res, next) {
  // Get the token from the request's Authorization header
  //const token = req.headers.authorization;
  console.log("before split:",req.headers.authorization)
  const token = req.headers.authorization.split(' ')[1];
  console.log("After split:", token)
  console.log("Token from the header:'",token,"'");

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Verify the token
  jwt.verify(token, 'jawdat_moussa_secret_key', (err, decoded) => {
      console.log(decoded);
    if (err) {
      console.log("token to verify:", token)
      console.error('Token verification error:', err);
      return res.status(401).json({ error: 'You are not registered' });
    }

    // If the token is valid, store the decoded user information in the request for future use
    req.employees = decoded.employees;
    next();
  });
}

// Get all users route, protected with token verification middleware
router.get('/', verifyToken, async (req, res) => {
  try {
    // Fetch all user documents from the "user"/ "employees" collection
    const employees = await employees.find();

    res.status(200).json(Employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
