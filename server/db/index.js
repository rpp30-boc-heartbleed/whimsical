const mongoose = require('mongoose');

const connectDb = () => mongoose.connect('mongodb://localhost:27017/whimsical', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connectDb;
