const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = new Schema({
  _id: Schema.Types.ObjectId,
  requestorId: { type: Schema.Types.ObjectId, ref: 'User', default: null }, // Errand requester
  placeId: { type: Schema.Types.ObjectId, ref: 'Places', default: null }, // Errand location(s)
  runnerId: { type: Schema.Types.ObjectId, ref: 'User', default: null }, // Errand runner
  errands: { type: Array, default: [] }, // Empty list if no errands
  status: {
    type: String,
    enum: ['Pending', 'Picked Up', 'Delivered'],
    default: 'Pending',
  },
  deliveryLoc: { type: [Number] },
  deliveryAddr: { type: String, default: null },
  requestorLoc: { type: [Number] },
  starRating: {
    type: Number,
    default: 0,
  },
  placeName: { type: String, default: null },
  placeAddr: { type: String, default: null },
  runnerLoc: { type: [Number] },
  runnerName: { type: String, default: null },
  runnerPic: { type: String, default: null },
  // onErrand: Boolean
});

const Errand = mongoose.model('Errand', errandSchema, 'errandCollection');

module.exports = { Errand };
