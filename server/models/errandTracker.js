const mongoose = require('mongoose');

const { Schema } = mongoose;

const exampleSchema = new Schema({
  email: String,
  name: String,
  karma: Number,
  onErrand: Boolean,
  pastErrands: Array,
  currentErrand: Object,
});

const Example = mongoose.model('Example', exampleSchema, 'exampleCollection');

module.exports = { Example };
