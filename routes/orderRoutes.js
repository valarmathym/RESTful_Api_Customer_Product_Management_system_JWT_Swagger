const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// GET all orders
router.get('/', (req, res) => {
  Order.find({})
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// GET a single order by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Order.findById(id)
    .then((order) => {
      if (!order) {
        return res.status(404).send();
      }
      res.json(order);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// CREATE a new order
router.post('/', (req, res) => {
  const order = new Order(req.body);
  order.save()
    .then(() => {
      res.json(order);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// UPDATE an existing order by ID
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  Order.findByIdAndUpdate(id, updates, { new: true })
    .then((order) => {
      if (!order) {
        return res.status(404).send();
      }
      res.json(order);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});


// UPDATE an existing order by ID
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  Order.findByIdAndUpdate(id, updates, { new: true })
    .then((order) => {
      if (!order) {
        return res.status(404).send();
      }
      res.json(order);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// DELETE an order by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Order.findByIdAndDelete(id)
    .then((order) => {
      if (!order) {
        return res.status(404).send();
      }
      res.json(order);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
