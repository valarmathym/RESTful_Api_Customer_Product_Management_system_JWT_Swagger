// auth.js

const jwt = require('jsonwebtoken');
const secretKey = 'joshua_secret_key';

function generateToken(payload) {
  console.log("Payload: ", payload, "sce Key:", secretKey);
  console.log(jwt.sign(payload, secretKey, { expiresIn: '3h' }));
  return jwt.sign(payload, secretKey, { expiresIn: '3h' }); // Token expires in 3 hour
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log("decoded:", decoded);
    return decoded;
  } catch (error) {
    return null; // Token is invalid or expired
  }
}

module.exports = { generateToken, verifyToken };
