const mongoose = require('mongoose');

const { Schema } = mongoose;

const LoginSchema = new Schema({
  email: String,
  password: String,
});

const Login = mongoose.model('Login', LoginSchema, 'loginCollection');

module.exports = { Login };
