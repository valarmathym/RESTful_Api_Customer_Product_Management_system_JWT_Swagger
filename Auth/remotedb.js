const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://valarmathym:XtaDN3jvFmHGKDAC@cluster0.s4t3g1e.mongodb.net/GelosGrocery2025?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error(error);
  }
};   

module.exports = connectToDatabase;
