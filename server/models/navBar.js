const mongoose = require('mongoose');

const { Schema } = mongoose;

const egNavBarSchema = new Schema({
  placeholder: String,
});

const NavBar = mongoose.model('NavBar', egNavBarSchema, 'navBarCollection');

module.exports = { NavBar };
