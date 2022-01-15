const mongoose = require('mongoose');

const { Schema } = mongoose;

const chatSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  errandId: { type: Schema.Types.ObjectId, ref: 'Errand', default: null }, // Chat associated with errand - Should come from Errand Schema
  users: { type: Array },
  messages: { type: [Object] },
});

const Chat = mongoose.model('Chat', chatSchema, 'chats');

module.exports = { Chat };
