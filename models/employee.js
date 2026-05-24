const mongoose = require('mongoose');
// Define a user schema and model
const employeeSchema = new mongoose.Schema({
  // Empid: {
   // type: Number, 
   // required: true
 // },
     username: {
     type: String,
     required: true
  },
   password: {
   type: String,
   required: true
  },
//   Emp_photo: {
 //  type: Buffer,
  // required: true
 // }
  });

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;