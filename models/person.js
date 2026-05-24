const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
  }
});

const Person= mongoose.model('Person', personSchema);
// db.person.inserMany([{first_name: "Heinrich", last_name: "Heine"},

// {first_name: "Willy", last_name: "Brandt"}]);// Creates the collection and persisits data

module.exports = Person;