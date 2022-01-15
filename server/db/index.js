const mongoose = require('mongoose');
require('dotenv').config();

const { DEPLOYED_DATABASE_URL } = process.env;

const connectDb = () => mongoose.connect(DEPLOYED_DATABASE_URL, {
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
