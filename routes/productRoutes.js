const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', (req, res) => {
  Product.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Get a single product by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Add a new product using post method
router.post('/', (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(() => {
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});


// UPDATE the document by calling using PUT metthod

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;
  Product.findByIdAndUpdate(id, update, { new: true })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update a product by ID
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  Product.findByIdAndUpdate(id, updates, { new: true })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a product by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
