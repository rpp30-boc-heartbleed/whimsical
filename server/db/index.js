const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = () => mongoose.connect('mongodb://localhost:27017/exampleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const { Schema } = mongoose;

const exampleSchema = new Schema({
  email: String,
  password: String,
  name: String,
  karma: Number,
});

const Example = mongoose.model('Example', exampleSchema, 'examples');

module.exports = {
  Example,
  connectDb,
};
