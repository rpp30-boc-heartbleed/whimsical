const mongoose = require('mongoose');

const { Schema } = mongoose;

const friendSchema = new Schema({
  email: String,
  name: String,
  karma: Number,
  onErrand: Boolean,
  pastErrands: Array,
  currentErrand: Object,
});

const Friend = mongoose.model('Friend', friendSchema, 'friendsCollection');

module.exports = { Friend };
