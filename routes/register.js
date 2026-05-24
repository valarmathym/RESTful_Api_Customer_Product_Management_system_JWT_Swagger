const express = require('express');
const router = express.Router();
const User = require('../models/users');

// Registration route
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists in the "users" collection
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user document and save it to the "user" collection
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;
