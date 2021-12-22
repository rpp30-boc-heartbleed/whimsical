const mongoose = require('mongoose');

const { Schema } = mongoose;

const errandSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  errands: { type: Array, default: [] },
  status: {
    type: String,
    enum: ['Pending', 'Picked Up', 'Delivered'],
    default: 'Pending',
  },
  deliveryLoc: { type: [Number] },
  deliveryAddr: { type: String, default: null },
  reqLoc: { type: [Number] },
  starRating: {
    type: Number,
    default: 0,
  },
  userLoc: { type: [Number] },
  userName: { type: String, default: null },
  userPic: { type: String, default: null },
  // onErrand: Boolean
});

const Errand = mongoose.model('Errand', errandSchema, 'errandCollection');

module.exports = { Errand };
