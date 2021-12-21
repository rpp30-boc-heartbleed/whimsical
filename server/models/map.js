const mongoose = require('mongoose');

const { Schema } = mongoose;

const egMapSchema = new Schema({
  placeholder: String,
});

const Map = mongoose.model('Map', egMapSchema, 'mapCollection');

module.exports = { Map };
