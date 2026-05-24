const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', userSchema, 'users'); // Capital 'User' model name, uses 'users' collection
