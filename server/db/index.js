const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = () => mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDBagel');
  })
  .catch((err) => {
    console.log('Connection to database failed womp womp');
    process.exit(1);
  });

module.exports = connectDb;
