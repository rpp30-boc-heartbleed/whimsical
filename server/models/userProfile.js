const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: String,
  email: String,
  stars: Number,
  picture: String,
  errandsCompleted: Number,
  location: String,
});

const Profile = mongoose.model('Profile', ProfileSchema, 'profileCollection');

module.exports = { Profile };
