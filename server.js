const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const connectToDatabase = require('./Auth/remotedb');

const app = express();

// Connect to the database
connectToDatabase();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


//routes for products, customers, orders
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
