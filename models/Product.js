const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
 // we will test this later _id: mongoose.Schema.Types.ObjectId,
 ProductCode: {
    type: Number,
    required: true
  },
 ProductName: {
    type: String,
    required: true
  },
  
ProductQuantity: {
    type: Number,
    required: true
  },
  Product_price: {
    type: Number,
    required: true
  }
 
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;