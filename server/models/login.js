const mongoose = require('mongoose');

const { Schema } = mongoose;

const egLoginSchema = new Schema({
  placeholder: String,
});

const Login = mongoose.model('Login', egLoginSchema, 'loginCollection');

module.exports = { Login };
