const jwt = require('jsonwebtoken');
const secret = require('./secrets.js');

module.exports = function createToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
    user_type: user.user_type
  };

  console.log(`My mistake: ${secret.jwtSecret}`);
  const options = {
    expiresIn: '8h'
  };
  return jwt.sign(payload, secret.jwtSecret, options);
};