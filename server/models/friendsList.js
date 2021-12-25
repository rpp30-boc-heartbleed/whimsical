const mongoose = require('mongoose');

const { Schema } = mongoose;

const friendSchema = new Schema({
  email: String,
  name: String,
  picture: String,
  goldStars: Number,
  onErrand: Boolean,
  currentErrand: Object,
  pastErrands: Array,
});

const Friend = mongoose.model('Friend', friendSchema, 'friendsCollection');

module.exports = { Friend };
