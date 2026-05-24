const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
//const connectToDatabase = require('./Auth/localdb');
const connectToDatabase = require('./Auth/remotedb');


const app = express();

// Connect to the database
connectToDatabase();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
