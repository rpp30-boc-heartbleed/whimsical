const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = new Schema({
  name: String,
  star: Number,
  onErrand: Boolean,
  currentErrand: Object,
});

const Errand = mongoose.model('Errand', errandSchema, 'errandCollection');

module.exports = { Errand };
