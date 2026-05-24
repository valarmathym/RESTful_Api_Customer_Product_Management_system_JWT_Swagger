// login.js

const express = require('express');
const router = express.Router();
const User = require('../models/users');
const { generateToken } = require('../Auth/auth'); // Import the generateToken function

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Search for the user in the "users" collection
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored password
    if (user.password === password) {
      // Generate a web token with the user's data
      const token = generateToken({ username: user.username });
      console.log("Token Generated==> ", token)
      // Send the token as a response
      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
