const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = new Schema({
  requestorId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  placeId: { type: Schema.Types.ObjectId, ref: 'Places', default: null },
  runnerId: { type: Schema.Types.ObjectId, ref: 'Profile', default: null },
  errands: { type: Array, default: [] },
  eta: { type: String, default: null }, // time for delivery
  status: {
    type: String,
    enum: ['Pending', 'Delivered'],
    default: 'Pending',
  },
  // Requester,
  deliveryLoc: { type: [Number] },
  deliveryAddr: { type: String, default: null },
  requestorLoc: { type: [Number] },
  // Runner's Ratings
  stars: {
    type: Number,
    default: 0,
  },
  // Errand Places
  placeName: { type: String, default: null },
  placeAddr: { type: String, default: null },
  // Errand Runner,
  runnerLoc: { type: [Number] },
  runnerName: { type: String, default: null },
  runnerPic: { type: String, default: null },
}, { timestamps: true }); // this would handle time posted

const Errand = mongoose.model('Errand', errandSchema, 'errandCollection');

module.exports = { Errand };
