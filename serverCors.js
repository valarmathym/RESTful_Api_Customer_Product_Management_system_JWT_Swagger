const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRouter = require('./routes/loginRoutes');
const usersRoute = require('./routes/userRoutes');
//const productRoute = require('./routes/productRoutes');
const connectToDatabase = require('./Auth/remotedb');
const User = require('./models/users');


const app = express();

// Connect to the database
connectToDatabase();

const PORT = process.env.PORT || 3001;

// Define CORS options to allow specific origins for '/register' and '/login'
const CorsOptions = {
  origin: (origin, callback) => {
    console.log('Origin:', origin);
    if (
      origin === 'http://127.0.0.1' ||
      origin === 'http://127.0.0.1:5502'
    ) {
      // Allow requests from the specified origins
      callback(null, true);
      console.log(origin);
    } else {
      // Deny requests from other origins
      console.log('Origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,PUT,POST', // Specify allowed HTTP methods
  allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
};

// Middleware
app.use(bodyParser.json());



// Define CORS options for the '/users' route if needed
const usersCorsOptions = {
    origin: '*', // Allow requests from any origin
    methods: 'GET,PUT,POST', // Specify allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
  };

// Allow CORS for the '/users' route using the specified options
app.use('/users', cors(usersCorsOptions));

// Enable CORS for specific routes using the defined options
app.use('/login', cors(usersCorsOptions)); // Allow CORS for the '/login' route


//app.use('/products', cors(usersCorsOptions));

//app.use('/products', productRoute);

// Login route
app.use('/login', loginRouter);
// show users
app.use('/users', usersRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
