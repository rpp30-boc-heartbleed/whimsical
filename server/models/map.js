const mongoose = require('mongoose');

const { Schema } = mongoose;

const mapSchema = new Schema({
  _id: Schema.Types.ObjectId,
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

const Map = mongoose.model('Map', mapSchema, 'mapCollection');

module.exports = { Map };
