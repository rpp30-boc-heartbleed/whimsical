const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  stars: Number,
  picture: String,
  errandsCompleted: Number,
  location: String,
  // userCoordinates: {
  //   type: {
  //     type: String,
  //     default: 'Point',
  //   },
  //   coordinates: {
  //     type: [Number],
  //     default: undefined,
  //     require: true,
  //   },
  // },
}, { timestamps: true });

const Profile = mongoose.model('Profile', ProfileSchema, 'profileCollection');

module.exports = { Profile };
