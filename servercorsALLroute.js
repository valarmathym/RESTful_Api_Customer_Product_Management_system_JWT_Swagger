const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
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

// Allow CORS for specific routes
app.use('/products', cors()); // Allow CORS for the '/products' route
app.use('/customers', cors()); // Allow CORS for the '/customers' route
app.use('/orders', cors()); // Allow CORS for the '/orders' route

// Routes
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

// Start the server

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
