// login.js

const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const { generateToken } = require('../Auth/auth'); // Import the generateToken function

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Search for the user in the "employees" collection
    const employee = await Employee.findOne({ username });

    if (!employee) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored password
    if (employees.password === password) {
      // Generate a JWT token with the user's data
      const token = generateToken({ username: employees.Username });
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
