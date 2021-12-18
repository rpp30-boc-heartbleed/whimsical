const mongoose = require('mongoose');

const { Schema } = mongoose;

const egProfileSchema = new Schema({
  placeholder: String,
});

const Profile = mongoose.model('Profile', egProfileSchema, 'profileCollection');

module.exports = { Profile };
