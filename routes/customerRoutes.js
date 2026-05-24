const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Get all customers
router.get('/', (req, res) => {
  Customer.find({})
    .then((customers) => {
      res.json(customers);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Get a single customer by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Customer.findById(id)
    .then((customer) => {
      if (!customer) {
        return res.status(404).send();
      }
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Add a new customer
router.post('/', (req, res) => {
  const customer = new Customer(req.body);
  customer.save()
    .then(() => {
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  Customer.findByIdAndUpdate(id, updates, { new: true })
    .then((customer) => {
      if (!customer) {
        return res.status(404).send();
      }
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update a customer by ID
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  Customer.findByIdAndUpdate(id, updates, { new: true })
    .then((customer) => {
      if (!customer) {
        return res.status(404).send();
      }
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a customer by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Customer.findByIdAndDelete(id)
    .then((customer) => {
      if (!customer) {
        return res.status(404).send();
      }
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;