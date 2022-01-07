const mongoose = require('mongoose');

const { Schema } = mongoose;

const MapSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  addressType: {
    type: String,
  },
  address: { type: String, default: null },
  addressGpsLoc: {
    type: [Number],
    index: '2d', // https://docs.mongodb.com/manual/core/2d/
  },
});

const Map = mongoose.model('Map', MapSchema, 'MapCollection');

module.exports = { Map };
