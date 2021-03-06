const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  stars: { type: Number, default: 0 },
  picture: String,
  currentErrands: { type: [Schema.Types.ObjectId], ref: 'Errand' },
  errandsCompleted: { type: Number, default: 0 },
  location: String,
  friends: { type: [String] },
}, { timestamps: true });

const Profile = mongoose.model('Profile', ProfileSchema, 'profileCollection');

module.exports = { Profile, ProfileSchema };

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
